burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')



burger.addEventlistener('click',()=>{
    navList.classList.toggle('v-clss-resp');
    navbar.classList.toggle('h-nav-resp');

})