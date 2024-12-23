import { ProductCard } from "./components/index.js";
import { groupId } from "./modules/const.js";
import { urls } from "./modules/urls.js";

const root = document.getElementById('root')
const card = new ProductCard(root)

card.render()

const dataId = Array()
const arrayNames = Array()
const id = Array()
const dataNames = document.querySelectorAll("div[name]")

for (let i = 0; i < dataNames.length; i++) { arrayNames.push(dataNames[i].getAttribute("name")) }

for (let i = 0; i < 9; i++) { dataId.push(document.getElementsByName(`${i}`)) }

for (let i = 0; i < dataId.length - 1; i++) { id.push(dataId[i][0].id) }

export const exportArrayNames = arrayNames
export const exportIdPeoples = id


for(let i = 0; i < id.length; i++) {
    const btn = document.getElementById(`clk-${id[i]}`)
    btn.addEventListener("click", () => {
        const id = parseInt(document.getElementsByName(i)[0].id)
        window.localStorage.setItem("id", id)
        openWindow()
    })
}

document.getElementById("btn1").addEventListener("click", () => { window.location.replace("pages/index1.html") })
document.getElementById("btn2").addEventListener("click", () => { window.location.replace("pages/index2.html") })
