const myHeading = document.getElementById("myHeading")
myHeading.innerHTML = "George Stead"

let myLink = document.querySelector("nav ul li")
myLink.setAttribute("class", "currentPage")



// colourButtons.forEach(button => {
//     button.style.backgroundColor = "red";
// });

// for (let button of colourButtons) {
//     button.style.backgroundColor = "blue";
// }

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

document.getElementById("myTestBtn").addEventListener('click',function(ev){
    console.info(ev.target)
});

//Challenge 1

// const redBtn = document.querySelector(".red")
// redBtn.addEventListener('click', function(){
//     console.info("Red Button Clicked")
//     document.body.setAttribute('class',"redBack")
// });

// const greenBtn = document.querySelector(".green")
// greenBtn.addEventListener('click', function(){
//     console.info("Green Button Clicked")
//     document.body.setAttribute('class',"greenBack");
// });

// const blueBtn = document.querySelector(".blue")
// blueBtn.addEventListener('click', function(){
//     console.info("Blue Button Clicked")
//     document.body.setAttribute('class',"blueBack");
// })

// const resetBtn = document.querySelector(".reset")
// resetBtn.addEventListener('click', function(){
//     console.info("Reset colour")
//     document.body.removeAttribute('class')
// })

const colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
colourButtons.forEach(button => {
    button.addEventListener('click', function(ev){
        let colour = ev.target.classList[0]
        if (colour.className == "reset"){
            document.body.removeAttribute('class')
        }
        else {
            colour = colour + "Back"
            document.body.setAttribute('class', colour)
        }
        console.info(colour)
        
    })
})
