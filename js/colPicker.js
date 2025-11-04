//Challenge 1

// colourButtons.forEach(button => {
//     button.style.backgroundColor = "red";
// });

// for (let button of colourButtons) {
//     button.style.backgroundColor = "blue";
// }

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

// const redBtn = document.querySelector(".red")
// redBtn.addEventListener('click', function(){
//     console.info("Red Button Clicked")
// });

// const greenBtn = document.querySelector(".green")
// greenBtn.addEventListener('click', function(){
//     console.info("Green Button Clicked")
// });

// const blueBtn = document.querySelector(".blue")
// blueBtn.addEventListener('click', function(){
//     console.info("Blue Button Clicked")
// })

// const resetBtn = document.querySelector(".reset")
// resetBtn.addEventListener('click', function(){
//     console.info("Reset colour")
// })

// Refactored Code
(()=>{
    const colourButtons = document.querySelectorAll(".colPicker");
    console.dir(colourButtons);
    const colourChange = ((ev) => {
        const colourPicked = ev.target.classList[0] + "Back"
        document.body.className = colourPicked === "resetBack" ? "" : colourPicked
    })
    colourButtons.forEach(btn => {
        btn.addEventListener("click", colourChange)
    })
})()


// colourButtons.forEach(button => {
//     button.addEventListener('click', function(ev){
//         let colour = ev.target.classList[0]
//         if (colour.className == "reset"){
//             document.body.removeAttribute('class')
//             console.info("Reset colour")
//         }
//         else {
//             colour = colour + "Back"
//             document.body.setAttribute('class', colour)
//             console.info(`${colour} Button Clicked`)
//         }
//         console.info(colour)
        
//     })
// });