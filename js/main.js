const myHeading = document.getElementById("myHeading")
myHeading.innerHTML = "George Stead"

// let myLink = document.querySelector("nav ul li")
// myLink.setAttribute("class", "currentPage")

document.getElementById("myTestBtn").addEventListener('click',function(ev){
    console.info(ev.target)
});

// 9. Arrays in Javascript
(()=> {
    let fruits = ["Apple", "Banana", "Cherry"];
    console.info(fruits);
    let firstFruit = fruits[0];
    let secondFruit = fruits[1];

    fruits[1] = "Avacado";
    console.log(fruits);

    fruits.splice(1, 1);
    console.log(fruits);

    fruits.splice(1, 0, "Banana", "Blueberry");
    console.log(fruits);
});



// 12. Working with the Window Object
(()=> {
    console.dir(window.location);
    let url = window.location.href;
    let filename = url.split('/').pop();
    console.log(filename);
});

