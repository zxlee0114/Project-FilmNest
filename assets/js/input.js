// 取得所有 radio buttons（假設它們都有相同的 name 屬性，例如 "nameOption"）
const allRadioButtons = document.querySelectorAll('input[name="nameOption"]');
const supporterNameInput = document.getElementById('supporterNameInput');

// 初始狀態設為 disabled
supporterNameInput.disabled = true;

// 為所有 radio buttons 添加事件監聽
allRadioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        // 檢查是否選中了「我想匿名」選項
        // 假設「我想匿名」選項的 id 是 "chooseInputName"
        if (this.id === 'chooseInputName') {
            supporterNameInput.disabled = false;
            supporterNameInput.focus();
        } else {
            supporterNameInput.disabled = true;
            supporterNameInput.value = ''; // 可選：清空輸入內容
        }
    });
});

// const chooseInputName = document.getElementById('chooseInputName');
// const supporterNameInput = document.getElementById('supporterNameInput');

// chooseInputName.addEventListener('change', function() {
//     supporterNameInput.disabled = !this.checked;
//     if (this.checked) {
//         supporterNameInput.focus();
//     }
// });

const cardTypeSelects = document.querySelectorAll('input[name="cardType"]');

cardTypeSelects.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const creditCardForm = document.querySelector('#creditCardForm');
        const unionPayForm = document.querySelector('#unionPayForm');
        
        if (e.target.value === 'creditCard') {
            creditCardForm.style.display = 'block';
            unionPayForm.style.display = 'none';
        } else {
            creditCardForm.style.display = 'none';
            unionPayForm.style.display = 'block';
        }
    });
});

// 自動跳轉到下一個輸入框
document.querySelectorAll('.card-number-input').forEach((input, index, inputs) => {
    input.addEventListener('input', function() {
        if (this.value.length === this.maxLength) {
            if (index < inputs.length - 1) inputs[index + 1].focus();
        }
    });
});

//加碼計算機

let total = 2000;
// ↓
// 初始化總金額，優先從 localStorage 讀取，如果沒有則使用預設值
// let total = parseInt(localStorage.getItem('totalAmount')) || 2000;

const totalDisplay = document.querySelector ('.total-number');
const customAmountInput = document.querySelector('.custom-amount-input');
const errorMessage = document.querySelector('.error-message');
const addAmountButtons = document.querySelectorAll('.add-amount');
const addCustomAmount = document.querySelector('.add-custom-amount');
const resetCustomAmount = document.querySelector('.reset-custom-amount');

function updateTotal() {
    totalDisplay.textContent = total.toLocaleString();
}
// ↓
// 更新金額顯示並儲存到 localStorage
// function updateTotal() {
//     totalDisplay.textContent = total.toLocaleString();
//     localStorage.setItem('totalAmount', total.toString());
//     // 觸發自定義事件，通知其他頁面金額已更新
//     window.dispatchEvent(new CustomEvent('amountUpdated', { 
//         detail: { amount: total }
//     }));
// }

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

// // 監聽其他頁面的金額更新
// window.addEventListener('storage', function(e) {
//     if (e.key === 'totalAmount') {
//         total = parseInt(e.newValue) || 2000;
//         if (totalDisplay) {
//             totalDisplay.textContent = total.toLocaleString();
//         }
//     }
// });

// // 頁面載入時立即更新顯示
// updateTotal();