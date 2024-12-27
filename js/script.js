const menus = document.querySelector(".nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () =>{
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () =>{
    menus.classList.remove("display");
});

//scroll sticky navbar
window.addEventListener("scroll", () =>{
    if(document.documentElement.scrollTop > 20){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});

//static numbers....
const countersEL = document.querySelectorAll(".numbers");
countersEL.forEach((counters) => {
    counters.textContent = 0;

    increamentCounters();

    function increamentCounters(){
        let currentNum = +counters.textContent;
        const dataCeiL = counters.getAttribute("data-ceiL");

        const increament = dataCeiL / 25;

        currentNum = Math.ceil(currentNum + increament);

        if (currentNum<dataCeiL){
            counters.textContent = currentNum;
            setTimeout(increamentCounters,70);
        } else {
            counters.textContent = dataceiL;
        }
    }
});