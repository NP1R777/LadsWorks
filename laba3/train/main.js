import { ProductCardComponent } from "./components/product-card/index.js";
import { ProductComponent } from "./components/product/index.js";
import { ProductPage } from "./pages/product/index.js";

const root = document.getElementById('main-page');
const productCard = new ProductCardComponent(root)
const data = productCard.getData()

// const page = document.getElementById('root')
// const productComponent = new ProductComponent(page)
// const getDataPage = new ProductPage(root)

productCard.render(data)
// productComponent.render(getDataPage.getData())
