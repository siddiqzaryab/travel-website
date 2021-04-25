
// onclickfunction
function addNewClass(elem){
    if (elem.className==="fas fa-bars"){
        elem.className="fas fa-times";

    }
    else if (elem.className="fas fa-times"){
        elem.className="fas fa-bars";
    }
}

const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const mainBody = document.querySelector('#main-body')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    mainBody.classList.toggle('active')
    
})

