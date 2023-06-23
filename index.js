
  // images switch
  document,addEventListener('DOMContentLoaded', () => {
  
  let mainImage = document.getElementById('mainImage');
  let thumbnail = document.querySelectorAll('.thumbnail');

  thumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {

      mainImage.src = thumbnail.src;
      mainImage.classList.add('enlarged')
    });
  });



  // counter
//   window.onload = function() {
  let count = 0

let minus = document.getElementById('minus');
let value = document.getElementById('value');
let add = document.getElementById('add');


minus.addEventListener('click', ()=> {
  count--;

  if(count < 0){
    count = 0
  }
 value.textContent = count
 localStorage.setItem('count',count)
});



add.addEventListener('click', ()=> {
  count++;
  value.textContent = count
  localStorage.setItem('count',count)
  localStorage.setItem('status','added')
});

//   };



//   window.onload = function() {
    let slider = 0 
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');
    let img = document.getElementById('mainImage')

    next.addEventListener('click', ()=>{
        slider++;
        if (slider == 1) {
            img.src = '/image-product-2.jpg'
        }
        if (slider == 2) {
            img.src = '/image-product-3.jpg'
        }
        if (slider == 3) {
            img.src ='/image-product-4.jpg'

        

        }else if (slider >= 4){
            img.src = '/image-product-1.jpg'
        }

    })

    previous.addEventListener('click', ()=>{
        slider--
        if (slider == 1) {
        img.src = '/image-product-2.jpg'
        }
        if (slider == 2) {
            img.src = '/image-product-3.jpg'
        }
        if (slider == 3) {
            img.src = '/image-product-4.jpg'
        } else if(slider <= 0) {
            img.src = '/image-product-1.jpg'
        }

    })

    let body = document.querySelector('body')
   body.addEventListener('mouseover',()=>{
    count = localStorage.getItem('count');
      value.textContent = count
      let badge = document.querySelector('.badge')
      let total = document.querySelector('.total')
      let deletes = document.querySelector('.delete')
      let together = document.querySelector('.together')
      let noOfItems = document.querySelector('.no-of-items')
      deletes.addEventListener('click',()=>{
        together.textContent = 'Your Cart is Empty'
        together.classList.add('margin')
        localStorage.setItem('status','deleted')
      })
      if (localStorage.getItem('status') == 'deleted') {
        together.textContent = 'Your Cart is Empty'
        together.classList.add('margin')
        count = 0
        value.textContent = count
 localStorage.setItem('count',count)
      } else {
        together.innerHtml = `    <div class="cart-product">
        <img class="item" src="/image-product-1-thumbnail.jpg" alt="">
       <p> Fall Limited Sneakers Edition <span>$125.00 x <span class="no-of-items">3</span>  <b class="total">$375.00</b></span>
       </p>
       <img class="delete" src="/icon-delete.svg" alt="">
  
      </div>
      <span class="checkout">Checkout</span>`
      }
      if (count >= 1) {
        badge.textContent = 1
        badge.style.display = 'grid'
        noOfItems.textContent = count
        total.textContent = `$${125 * count}`
      } else {
        badge.style.display = 'none'
        together.textContent = 'Your Cart is Empty'
        together.classList.add('margin')
      }
      
    })
       


//   hamburger




// let hamburger = document.querySelector('.hamburger');
// let menu = document.querySelector('.menu');
// let isActive = false;

// function toggleMenu() {
//   isActive = !isActive; // Toggle the active state

//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');

//   if (isActive) {
//     document.addEventListener('click', closeMenu);
//   } else {
//     document.removeEventListener('click', closeMenu);
//   }
// }

// function closeMenu(event) {
//   if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
//     isActive = false;
//     hamburger.classList.remove('active');
//     menu.classList.remove('active');
//     document.removeEventListener('click', closeMenu);
//   }
// }

    
  });

