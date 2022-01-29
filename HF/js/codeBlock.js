export function codeBlock(selector) {
    const codeBlocks = document.querySelectorAll(selector);
    codeBlocks.forEach(item => {
        let code = item.innerHTML;
        item.innerHTML = '';
        item.textContent = code;
    });
}
