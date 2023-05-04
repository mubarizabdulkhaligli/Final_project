if(localStorage.getItem('products')=== null)
  {
    localStorage.setItem('products', JSON.stringify([]));
  }

  let add_buttons = document.querySelectorAll('.add-to-cart')

    console.log(add_buttons);

    for(let add_btn of add_buttons){
      add_btn.onclick = function(e){
        e.preventDefault()
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.children[0].children[0].src
        let card_name = this.parentElement.parentElement.children[1].children[0].children[0].innerHTML
        let price = this.parentElement.parentElement.children[1].children[0].children[1].innerHTML
        
        let products_list = JSON.parse(localStorage.getItem('products'))

      let exist_product = products_list.find(prd => prd.Id === id)

      if(exist_product === undefined)
      {
        products_list.push({
          Id: id,
          Image: src,
          Name: card_name,
          Price: price,
          Count: 1
        })
        document.querySelector('.alertbox').style.right = '5%'
        document.querySelector('.alertbox').innerHTML = "Əlavə olundu"

      }
      else{
        exist_product.Count+=1;
        document.querySelector('.alertbox').style.right = '5%'
        document.querySelector('.alertbox').innerHTML = "Daha 1 ədəd əlavə olundu"
      }

      

      localStorage.setItem('products', JSON.stringify(products_list))

      setTimeout(function() {
        document.querySelector('.alertbox').style.right = '-50%'
      }, 1000);
      

      ShowCount()
      }
    }

    function ShowCount(){
      let products_list = JSON.parse(localStorage.getItem('products'))
      document.querySelector('.count').innerHTML = products_list.length;
  
      if(products_list.length>0)
      {
        let adding_product_count = document.querySelector('.count-adding-product')
        adding_product_count.classList.remove('d-none')
      }
  
    }
  
    ShowCount();
    
    let products_list = JSON.parse(localStorage.getItem('products'))

if(products_list.length > 0)
{
    document.querySelector('.empty-cart').classList.add('d-none')
    document.querySelector('.your-cart').classList.remove('d-none')
}
else{
    document.querySelector('.empty-cart').classList.remove('d-none')
    document.querySelector('.your-cart').classList.add('d-none')

}

function GetProducts(){
let products_list = JSON.parse(localStorage.getItem('products'))
let x = '';
products_list.forEach(product=>{
    x+=`
    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
    <div id="${product.Id}" class="card product">

              <div class="image-div">
                <img
                  class="card-img-top"
                  src="${product.Image}"
                  alt="Card image cap"
                />
              </div>

              <div class="card-body">

                  <div class="d-flex align-items-center justify-content-between">
                    <h5 class="card-title fw-bold">${product.Name}</h5>
                    <span class="price fst-italic fs-5">${product.Price}</span>
                    
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                  <button class="minus-button btn w-20 btn-light border-dark me-3 rounded-5"><i class="fa-solid fa-minus" style="color: #ff0000;"></i></button> 
                  <span class="price fs-5 me-2">Sayı : </span>
                  <input type="number" readonly min="1" class="count-input text-center w-25" value=${product.Count}>
                  <button class="plus-button btn w-20 btn-light border-dark ms-3 rounded-5"><i class="fa-solid fa-plus" style="color: #12a512;"></i></button>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                      <a
                        href="#"
                        class="btn btn-danger fw-bold remove-button m-auto mt-2"
                         >Səbətdən sil</a
                      >
                      
                  </div>

              </div>
            </div>
          </div>
          </div>
    `
})
document.querySelector('.shopping-list').innerHTML=x;
}

GetProducts();


let remove_buttons = document.querySelectorAll('.remove-button')

  for(let remove_button of remove_buttons){
    remove_button.onclick = function(e){
      e.preventDefault();

      let id = this.parentElement.parentElement.parentElement.id;
      
      let products_list = JSON.parse(localStorage.getItem('products'))

      let filtered = products_list.filter(product => product.Id.slice(4) !== id.slice(4));

      localStorage.setItem('products', JSON.stringify(filtered));

      location.reload()
        ShowCount()

    }
  }

let minus_buttons = document.querySelectorAll('.minus-button')
let plus_buttons = document.querySelectorAll('.plus-button')

minus_buttons.forEach(minus_button => {
  minus_button.addEventListener('click', function(e) {
    e.preventDefault();
    let id = this.parentElement.parentElement.parentElement.id;
    let products_list = JSON.parse(localStorage.getItem('products'));
    let updated_products = products_list.map(product => {
      if (product.Id.slice(4) === id.slice(4)) {
        if (product.Count > 1) {
          product.Count--;
        }
      }
      return product;
    });
    localStorage.setItem('products', JSON.stringify(updated_products));
    location.reload();
  });
});

plus_buttons.forEach(plus_button => {
  plus_button.addEventListener('click', function(e) {
    e.preventDefault();
    let id = this.parentElement.parentElement.parentElement.id;
    let products_list = JSON.parse(localStorage.getItem('products'));
    let updated_products = products_list.map(product => {
      if (product.Id.slice(4) === id.slice(4)) {
        product.Count++;
      }
      return product;
    });
    localStorage.setItem('products', JSON.stringify(updated_products));
    location.reload();
  });
});


document.querySelector('.product-count').innerHTML=products_list.length

document.querySelector('.remove-all').addEventListener('click', function(){
  localStorage.removeItem('products')
  location.reload()
})

function FindTotalPrice(){
  let products_list = JSON.parse(localStorage.getItem('products'))
  let totalPrice = 0
  for (let i = 0; i < products_list.length; i++) {
    totalPrice += products_list[i].Count*products_list[i].Price.slice(0, products_list[i].Price.indexOf(' '))
    document.querySelector('.total-price').innerHTML = totalPrice + " AZN"
  }
}
  
  FindTotalPrice()




