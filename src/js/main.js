import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import Alert from "./Alert.js";

const productData = new ProductData();

document.addEventListener("DOMContentLoaded", () => {
    const alertInstance = new Alert("../../public/json/alert.json");
    alertInstance.render();
});

