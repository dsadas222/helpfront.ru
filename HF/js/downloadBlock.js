// Добавление иконки загрузки
export function createIconBtnDownload(selector) {
    const downloadBlocks = document.querySelectorAll(selector);
    downloadBlocks.forEach(item => {
        item.insertAdjacentHTML('beforeend', `<img src="/HF/media/img/download.png" alt="скачать">`);
    });
}
