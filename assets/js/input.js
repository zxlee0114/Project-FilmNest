const chooseInputName = document.getElementById('chooseInputName');
const supporterNameInput = document.getElementById('supporterNameInput');

chooseInputName.addEventListener('change', function() {
    supporterNameInput.disabled = !this.checked;
    if (this.checked) {
        supporterNameInput.focus();
    }
});

//加碼計算機
let total = 2000;

const totalDisplay = document.querySelector ('.total-number');
const customAmountInput = document.querySelector('.custom-amount-input');
const errorMessage = document.querySelector('.error-message');
const addAmountButtons = document.querySelectorAll('.add-amount');
const addCustomAmount = document.querySelector('.add-custom-amount');
const resetCustomAmount = document.querySelector('.reset-custom-amount');

function updateTotal() {
    totalDisplay.textContent = total.toLocaleString();
}

function validateInput(value) {
    const amount = parseInt(value);
    if (isNaN(amount) || amount <= 0) {
        customAmountInput.classList.add('input-error');
        errorMessage.style.display = 'block';
        return false;
    }
    customAmountInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    return true;
}

function hideError() {
    customAmountInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
}

customAmountInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^\d-]/g, '');
    
    if (this.value.startsWith('-')) {
        this.value = this.value.substring(1);
    }
    
    if (this.value.length > 1 && this.value.startsWith('0')) {
        this.value = this.value.substring(1);
    }

    validateInput(this.value);
});

customAmountInput.addEventListener('blur', function() {
    hideError();
});

addAmountButtons.forEach(button => {
    button.addEventListener('click', function() {
        const amount = parseInt(this.dataset.amount);
        total += amount;
        updateTotal();
    });
});

addCustomAmount.addEventListener('click', function() {
    const value = customAmountInput.value;
    if (validateInput(value)) {
        const amount = parseInt(value);
        total += amount;
        updateTotal();
        customAmountInput.value = '';
        hideError();  // 清除錯誤提示
    }
});

resetCustomAmount.addEventListener('click', function() {
    total = 2000;
    updateTotal();
    customAmountInput.value = '';
    hideError();
});

customAmountInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addCustomAmount.click();
    }
});