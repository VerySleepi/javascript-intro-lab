const myHeading = document.getElementById("myHeading")
myHeading.innerHTML = "George Stead"

let myLink = document.querySelector("nav ul li")
myLink.setAttribute("class", "currentPage")

document.getElementById("myTestBtn").addEventListener('click',function(ev){
    console.info(ev.target)
});


