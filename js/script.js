let menuItems = document.querySelector('.menu-items');
let menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click',function(){
    if(menuBar.classList.length===1){
        menuBar.classList.add('active');
        menuItems.classList.add('active');
    }else{
        menuBar.classList.remove('active');
        menuItems.classList.remove('active');
    }
})