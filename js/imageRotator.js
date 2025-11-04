(()=>{
    let imageAr = [
        'images/view1.jpg',
        'images/view2.jpg',
        'images/view3.jpg',
        'images/view4.jpg',
        'images/view5.jpg',
        'images/view6.jpg'
    ];
    

    let currentIndex = 0;
    let intervalId = setInterval(chgImage, 2000);
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
    document.getElementById('myImages').addEventListener('click', nextImage);
    
    function chgImage(){
        // Increment the index to get the next image
        currentIndex++;
        // If the index exceeds the array length, reset it to 0
        if (currentIndex >= imageAr.length) {
            currentIndex = 0;
        }
        // Change the image source to the next image in the array
        document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
    }

    function nextImage(){
        chgImage();
        clearInterval(intervalId);
        intervalId = setInterval(chgImage, 2000);
    }

    // Stop the interval after 10 seconds
    setTimeout(function() {
        clearInterval(intervalId);
        console.info('Image rotation stopped');
    }, 30000);

    function showMessage(){
        console.info('This message is shown after 3 seconds');
    }

    setTimeout(showMessage, 3000);

    

    
})()