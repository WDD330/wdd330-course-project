import { renderListWithTemplate } from "./utils.mjs";


function productCardTemplate(product) {

    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }

export default class ProductListing {

    constructor(dataSource, category, listElement) {

        this.dataSource = dataSource;
        this.category = category;
        this.listElement = listElement;
      }

      async init() {

        const list = await this.dataSource.getData();

        this.renderList(list);

      }

      renderList(list) {

        // stretch feature
        renderListWithTemplate(productCardTemplate, this.listElement, list);
        /*
        const htmlStrings = list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
        */
      }


}