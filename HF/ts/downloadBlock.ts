// Добавление иконки скачать для компонента "кнопка скачать"
export function createIconBtnDownload(selector) {
    const downloadBlocks = document.querySelectorAll(selector);
    downloadBlocks.forEach(item => {
        item.insertAdjacentHTML('beforeend', `<img src="/HF/media/img/download.png" alt="скачать">`)
    });
}