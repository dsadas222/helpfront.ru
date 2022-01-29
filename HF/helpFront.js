import { createIconBtnDownload } from "./js/downloadBlock.js";
import { codeBlock } from "./js/codeBlock.js";

codeBlock('.codeBlock')
createIconBtnDownload('.downloadBlock')

// даёт возможность импортировать функции сложных компонентов 
export let {createNavBlock} = await import("./js/navBlock.js")