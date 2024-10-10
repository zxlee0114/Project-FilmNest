const chooseInputName = document.getElementById('chooseInputName');
const supporterNameInput = document.getElementById('supporterNameInput');

chooseInputName.addEventListener('change', function() {
    supporterNameInput.disabled = !this.checked;
    if (this.checked) {
        supporterNameInput.focus();
    }
});