// Расширение Element, чтобы он видел dataset
type objectKey = {
    key: string
}
interface myElement extends Element{
    dataset: objectKey
}

function changeActiveNavBlock(key:myElement, selector:string):void {
    try {
        if (!key.dataset.key) {
            throw new Error(`Ошибка при переключении на активный пункт "${key.textContent}". Проверьте, чтобы у него был 'data-key'`);
        } else {
            document.querySelector(`${selector} .navBlock-menu .active`).classList.remove("active");
            document.querySelector(`${selector} .navBlock-content .active`).classList.remove("active");

            key.classList.add("active");     
            document.querySelector(`${selector} .navBlock-content .navBlock-content_block[data-lock="${key.dataset.key}"]`).classList.add("active");
            
            // для переключения podMenu
            if (key.tagName === "H4") {
                document.querySelector('.active_podmenu').classList.remove("active_podmenu")
                document.querySelector(`${selector} h4[data-key="${key.dataset.key}"]`).nextElementSibling.classList.add("active_podmenu")
            }
        }
    } catch (error) {
        if (error.message === "Cannot read properties of null (reading 'classList')") {
            error.message = `У пункта меню "${key.textContent}" нет пары 'data-lock' со  значением "${key.dataset.key}"`
        }
        console.log(error);
    }
}

export function createNavBlock(selector:string):void {
    // регистрация слушателя на меню
    document.querySelector(`${selector} .navBlock-menu`).addEventListener("click", (e)=>{
        // @ts-ignore думает, что tagName нет в EventTarget
        if (e.target.tagName == "H5" || e.target.tagName == "H4") {
            // @ts-ignore думает, что e.target нельзя передать
            changeActiveNavBlock(e.target, selector);
        }
    })
}