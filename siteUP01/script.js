function switchTab(tabId) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Показать выбранную вкладку
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Инициализируем первую вкладку как активную
document.addEventListener('DOMContentLoaded', () => {
    switchTab('firstPage');
});
