import { ProductCard } from "./components/index.js"; 


function getTrueId() {
    const page = new ProductCard()
    const data = page.getData()
    let arrId = Array()

    for(let i = 0; i < data.length; i++) { arrId.push(data[i]['id']) }

    const check_id = arrId[3]

    for(let i = 0; i < data.length; i++) {
        if (Object.values(data[i]).includes(check_id)) {
            console.log(data[i])
        }
    }
}