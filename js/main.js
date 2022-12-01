(function () {
    const listElements = document.querySelectorAll('.nav__item--show');
    const list = document.querySelector('.nav__links');
    const menu = document.querySelector('.menu__hamburguesa');

    const addClick = () => {
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('.nav__item--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            });
        });
    }
    
    const deleteStyle = ()=>{
        listElements.forEach(element =>{
            element.children[1].removeAttribute('style');
            element.children[1].removeAttribute('nav__item--active')
        })
    }

    menu.addEventListener('click', ()=>{
        list.classList.toggle('menu__links--show')
    })

    window.addEventListener('resize', ()=>{
        if(window.innerWidht > 768){
            deleteStyle();
            if(list.classList.contains('nav__item--show')){
                list.classList.remove('nav__item--show')
            }
        }else{
            addClick();
        }
    });

    if(window.innerWidht <= 768){
        addClick();
    }
})()
