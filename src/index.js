import {sum} from "./modules/sum"

const root = document.querySelector('#root')

root.textContent = sum(1, 6).toString()