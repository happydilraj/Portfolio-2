AOS.init();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// const body = document.querySelector("body"),
//       nav = document.querySelector("nav"),
//       modeToggle = document.querySelector(".dark-light"),
//       searchToggle = document.querySelector(".searchToggle"),
//       sidebarOpen = document.querySelector(".sidebarOpen"),
//       siderbarClose = document.querySelector(".siderbarClose");

//       let getMode = localStorage.getItem("mode");
//           if(getMode && getMode === "dark-mode"){
//             body.classList.add("dark");
//           }

// // js code to toggle dark and light mode
//       modeToggle.addEventListener("click" , () =>{
//         modeToggle.classList.toggle("active");
//         body.classList.toggle("dark");

//         // js code to keep user selected mode even page refresh or file reopen
//         if(!body.classList.contains("dark")){
//             localStorage.setItem("mode" , "light-mode");
//         }else{
//             localStorage.setItem("mode" , "dark-mode");
//         }
//       });

// // js code to toggle search box
//         searchToggle.addEventListener("click" , () =>{
//         searchToggle.classList.toggle("active");
//       });
 
      
// //   js code to toggle sidebar
// sidebarOpen.addEventListener("click" , () =>{
//     nav.classList.add("active");
// });

// body.addEventListener("click" , e =>{
//     let clickedElm = e.target;

//     if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//         nav.classList.remove("active");
//     }
// });





// top scrolll bar 


// $(document).ready(function(){
//   window.scroll(function(){
//     if(window.scrollTop() > 300){
//       $('.pointer i').css({
//         "opacity":"1", "pointer-events":"auto"
//       });
//     }else{
//       $('.pointer i').css({
//         "opacity":"0", "pointer-events":"none"
//       });
//     }
//   });
//   $('.pointer i').click(function(){
//     $('html').animate({scrollTop:0}, 500);
//   });
// });






$('.linkedin').click(function(e) {
  window.open('https://www.linkedin.com/in/dilraj-singh-009613208/');
  e.preventDefault();
});

$('.instagram').click(function(e) {
  window.open('https://www.instagram.com/_happydilraj/');
  e.preventDefault();
});

$('.github').click(function(e) {
  window.open('https://github.com/happydilraj');
  e.preventDefault();
});





// projects links 



// counter 











