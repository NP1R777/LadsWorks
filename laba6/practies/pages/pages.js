import { ProductCard } from "../components/index.js"

function getHTML(data) {
    return(
        `
        <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <div class="w-[350px] h-[350px] m-auto rounded-lg border-solid border-1 border-black">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.photo_400_orig}" 
                        class="mt-[100px] ml-[115px] scale-x-[2] scale-y-[2] rounded-2xl" alt="картинка">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="text-lg">${data.first_name} ${data.last_name}</h5>
                        </div>
                    </div>
                </div>
                <button id="card-1" class="btn btn-primary block w-100 h-10 mt-[92px]"
                            onclick="backWindow()">Вернуться назад</button>
            </div>
        `
    )
}


const data = new ProductCard().getData()
const id = parseInt(window.localStorage.getItem("id"))


for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
        const html = getHTML(data[i])
        document.body.insertAdjacentHTML('beforeend', html)
        window.localStorage.clear()
        break;
    }
}
