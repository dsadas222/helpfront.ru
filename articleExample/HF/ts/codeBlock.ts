export function codeBlock(selector:string) {
    const codeBlocks = document.querySelectorAll(selector);
    codeBlocks.forEach(item => {
        let code = item.innerHTML;
        item.innerHTML = '';
        item.textContent = code
    });
}