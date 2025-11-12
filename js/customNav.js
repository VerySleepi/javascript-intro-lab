(() => {
    const allLinks = document.querySelectorAll("nav ul li a");
    let url = window.location.href;
    let filename = url.split('/').pop();
    console.log(filename);

    allLinks.forEach((link) => {
        let currentLink = link.getAttribute("href")
        if (filename === currentLink){
            link.setAttribute("class", "currentPage");
        }
    });
})();

