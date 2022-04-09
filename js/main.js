(() => {
    let bottomNav = document.querySelectorAll("#buttonHolder img"),
    holder = document.querySelector(".imageccholder"),
    imgbutton = document.querySelector(".wheatimg"),

    imgbutton2 = document.querySelector(".techimg");
    imgbutton3 = document.querySelector(".tasteimg");

    function wheatshow(){
        wheat.classList.toggle("show")}
    
    
        function techshow(){
            tech.classList.toggle("show")}

            function tasteshow(){
                taste.classList.toggle("show")}

    function changeBGImg(){
        holder.style.backgroundImage = `url(images/promotions_image${this.dataset.bgref}.jpg )`
    }
    bottomNav.forEach (thumb => thumb.addEventListener("click", changeBGImg));

    imgbutton.addEventListener('click', wheatshow);
    imgbutton2.addEventListener('click', techshow);
    imgbutton3.addEventListener('click', tasteshow);

})();