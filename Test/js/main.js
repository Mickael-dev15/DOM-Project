window.onscroll = function() {scrollFunction()};
var header = document.getElementById("header")
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.top = "0";
        header.style.opacity = ".8"
    } else {
        header.style.top = "-50px";
    }
}

var heart = document.querySelectorAll('#heart');
heart.forEach(e => e.addEventListener('click',()=>{
    if (e.style.color == 'rgb(255, 24, 24)') {
        e.style.color ='grey';
    } else {
        e.style.color = 'rgb(255, 24, 24)';
    }

}));

let count = 0;
const counter = document.getElementById('counter');
document.querySelectorAll('.add-to-cart').forEach(e =>e.addEventListener('click', ()=> {
    const cl = counter.classList;
    const c = 'animated-counter';
    count ++ ;
    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() => counter.classList.add('animated-counter'),1)
}));

var cart = document.getElementById('cart');
var counterContainer = document.querySelector('.counter-container');
counterContainer.addEventListener('click', () => {
    if(getComputedStyle(cart).display != "none"){
        cart.style.display = "none";
    } else {
        cart.style.display = "block";    

    }       

});

var cartContent = document.querySelector('.cart-content');
var addToCart = document.querySelectorAll('.add-to-cart');
var cardPrice = document.querySelector('.card-price');

addToCart.forEach(e => e.addEventListener('click',()=>{ 
    e.innerHTML = "in cart";   
    var row=document.createElement('div');
    row.className = "cart-row";
    var col = document.createElement('div');
    col.className="cart-col"; 
    col.classList.add('item');      
    var image=document.createElement('img');
    image.classList.add('mini-image');
    image.src = e.parentElement.children[0].src.slice(22,37); 
    image.alt = "minus";
    var price = document.createElement('div');
    price.classList.add('priceDiv');
    price.innerHTML= e.previousElementSibling.childNodes[1].firstChild.data;
    var creDecr = document.createElement('div');
    var plus =document.createElement('button');
    plus.classList.add('btn','btn-info','plus-btn');
    plus.innerHTML = "+";
    var input =document.createElement('input');
    input.type="text";
    input.classList.add("input");
    input.value = "1";
    var minus =document.createElement('button');
    minus.classList.add('btn','btn-info','min-btn');
    minus.innerHTML = "-";
    creDecr.appendChild(plus);
    creDecr.appendChild(input);
    creDecr.appendChild(minus);
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn','btn-danger');
    deleteBtn.innerHTML = "Remove";   
    col.appendChild(image);
    col.appendChild(price);
    col.appendChild(creDecr);
    col.appendChild(deleteBtn);
    row.appendChild(col);      
    cartContent.appendChild(row);

    plus.addEventListener('click',()=>{
        input.value++;
    })

    minus.addEventListener('click',()=>{
    if(input.value > 1){
        input.value--;
    }else {input.value = 1;}
    });

    deleteBtn.addEventListener('click',()=>{
        row.remove();
    });

    updateCartTotal();
}));

console.log(price.textContent.slice(0,2));
function updateCartTotal() {

}