const products = [
  {
    id: 1,
    name: "Pair",
    price: 195,
    discount: "50%",
  },
  {
    id: 2,
    name: "Pair",
    price: 345,
    discount: "40%",
  },
  {
    id: 3,
    name: "Pair",
    price: 528,
    discount: "60%",
  },
];

const bundleContainer = document.querySelector(".bundle-container");
const bundleCards = () => {
  products.map((data) => {
    const bundleElement = document.createElement("div");
    bundleElement.classList.add("bundle-items");
    bundleElement.innerHTML = `
    
  <div class="bundle-item-top">
       <div class="bundle-item-left">
        <input type="checkbox"  value=${false} id="bundleCheck-${data.id}">
         <div> </div>
          <div class="pair-container">
           <h4>${data.id} ${data.name}</h4>
              <h3>DKK ${data.price}</h3>
       </div>
    </div>
    <div class="bundle-item-right">
        <span>Most Popular</span>
        <h3>${data.discount} OFF</h3>
    </div>
  </div>
    
    
    <div id="bundle-item-bottom">
       <div class="bundle-size-color">
         <div class="size-color-left">#1</div>
          <select class="size-color-center">
            <option value="" disabled>Size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
            <select class="size-color-right">Colour
            <option value="" disabled>Colour</option>
            <option value="">Red</option>
            <option value="">Green</option>
          </select>
       </div>
    <div class="bundle-size-color">
       <div class="size-color-left">#2</div>
          <select class="size-color-center">
            <option value="" disabled>Size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
          <select class="size-color-right">
            <option value="" disabled>Colour</option>
            <option value="">Red</option>
            <option value="">Green</option>
          </select>
        </div>
      </div>
    `;

    bundleContainer.appendChild(bundleElement);

    const bundleCheckbox = document.getElementById(`bundleCheck-${data.id}`);
    bundleCheckbox.addEventListener("click", () => {
      const bundleItemBottom = bundleElement.querySelector(
        "#bundle-item-bottom"
      );
      if (bundleCheckbox.checked) {
        bundleElement.classList.add("bundle-itemsx");
      } else {
        bundleElement.classList.remove("bundle-itemsx");
      }
      if (bundleCheckbox.checked) {
        bundleItemBottom.style.display = "block";
      } else {
        bundleItemBottom.style.display = "none";
      }
    });
  });
};

bundleCards();
