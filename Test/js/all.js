var heart = document.querySelectorAll('#heart');
heart.forEach(e => e.addEventListener('click',()=>{
    if (e.style.color == 'rgb(255, 24, 24)') {
        e.style.color ='grey';
    } else {
        e.style.color = 'rgb(255, 24, 24)';
    }

}));

var addToCart = document.querySelectorAll('.add-to-cart');
addToCart.forEach(e => e.addEventListener('click',(event)=>{
    if (e.innerText="add to cart") {
        e.innerText="in cart";
    }

}));