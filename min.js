//para mostrar todos los elementos 
//let listElements variable
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElements => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElements.nextElementSibling;
        console.log(menu.scrollHeight)
        //condisional
        if(menu.clientHeight =="0"){
            height=menu.scrollHeight;
        }

        menu.style.height = '${height}px';
    })
});
