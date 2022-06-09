// document.addEventListener("DOMContentLoaded", function(){
//     window.onmousemove = function(e){
//         console.log(e.clientY)
//         if(e.clientY < 100 ){
//             document.querySelector("#nav_menu").classList.add("active");
//         }else{
//             document.querySelector("#nav_menu").classList.remove("active");
//         }
//     }
// });

document.getElementById("nav_btn").onclick = function(){
    console.log("gd")
    document.querySelector("#nav_menu").classList.toggle("active");
}