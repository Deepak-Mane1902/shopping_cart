const product = [
     { id: 0, image: 'image/img4.png', title: 'JavaScript Course', price: 120 },
     { id: 1, image: 'image/img5.png', title: 'GoLang Programming Course', price: 99 },
     { id: 2, image: 'image/img4.png', title: 'JavaScript Course', price: 140 },
     { id: 3, image: 'image/img5.png', title: 'GoLang Programming Course', price: 299 },
 ];
 
 // Deduplicate products based on title and price
 const categories = product.filter(
     (value, index, self) =>
         index === self.findIndex((t) => t.title === value.title && t.price === value.price)
 );
 
 let i = 0;
 
 // Render products
 document.getElementById('root').innerHTML = categories
     .map((item) => {
         const { image, title, price } = item;
         return `
             <div class='box'>
                 <div class='img-box'>
                     <img class="images" src=${image}></img>
                 </div>
                 <div class="bottom">
                     <p>${title}</p>
                     <h2>$ ${price}.00</h2>
                     <button onclick="addtocart(${i++})">Add To Cart</button>
                 </div>
             </div>
         `;
     })
     .join('');
 
 var cart = [];
 
 // Add to Cart Function
 function addtocart(a) {
     cart.push({ ...categories[a] });
     displaycart();
 }
 
 // Display Cart Function
 function displaycart() {
      let j = 0 ,total=0;
     document.getElementById('count').innerHTML =cart.length;
     if (cart.length === 0) {
         document.getElementById('cartItem').innerHTML = 'Your Cart Is Empty';
         document.getElementById('total').innerHTML ="$ "+0+".00";
     } else {
         document.getElementById('cartItem').innerHTML = cart
             .map((items) => {
                 const { image, title, price } = items;
                 total =total+price;
                 document.getElementById('total').innerHTML ="$"+total+".00"; 
                 return `
                     <div class='cart-item'>
                         <div class='row-img'>
                             <img class='rowing' src=${image}>
                         </div>
                         <p style='font-size:10px; padding:0px 2px'>${title}</p>
                         <h2 style='font-size:15px;'>$ ${price}.00</h2>
                         <i class='ri-delete-bin-line' onclick='delElement(${j++})'></i>
                     </div>
                 `;
             })
             .join('');
     }
 }
 
 // Delete Item from Cart
 function delElement(index) {
     cart.splice(index, 1);
     displaycart();
 }
 