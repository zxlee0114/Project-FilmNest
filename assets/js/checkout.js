
// // 其他頁面的顯示程式碼
// function initializeAmountDisplay() {
//     // 取得儲存的金額
//     const savedAmount = parseInt(localStorage.getItem('totalAmount')) || 2000;
    
//     // 找到所有需要顯示金額的元素
//     const amountDisplays = document.querySelectorAll('.total-number');
    
//     // 更新所有顯示元素
//     amountDisplays.forEach(display => {
//         display.textContent = savedAmount.toLocaleString();
//     });
    
//     // 監聽 storage 變化
//     window.addEventListener('storage', function(e) {
//         if (e.key === 'totalAmount') {
//             const newAmount = parseInt(e.newValue) || 2000;
//             amountDisplays.forEach(display => {
//                 display.textContent = newAmount.toLocaleString();
//             });
//         }
//     });
// }

// // 頁面載入時初始化顯示
// document.addEventListener('DOMContentLoaded', initializeAmountDisplay);