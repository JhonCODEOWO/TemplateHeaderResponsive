//Selectores globales
const body = document.querySelector('body');
console.log(window.visualViewport.width);

//Javascript para el header movil
    //Variables
    let visible = false;
    let subItemsVisibles = false;
    let lastIndexMenuMovile = 0;
    let windowWidth = window.visualViewport.width;
    //Selectores
    const btnMenu = document.querySelector('#btnMenu');
    const btnMenu_Icon = document.querySelectorAll('#btnMenu__icon');
    btnMenu_Icon[1].classList.add('hideMenuMovile');
    const headerNavTelefono = document.querySelector('#headerNavMovile');
    const itemPrincipalMovil = document.querySelectorAll('#itemPrincipalMovil');
    const submenuMovil = document.querySelectorAll('#submenu__movil');
    console.log(btnMenu);
    
    //Programación de los elementos
    //Muestra el menú cuando está en un viewport de tipo movil
    btnMenu.addEventListener('click', function(elemento){
        if (visible == false) {
            headerNavTelefono.classList.remove('hideMenuMovile');
            headerNavTelefono.classList.add('showMenuMovile');
            btnMenu_Icon[0].classList.add('hideMenuMovile');
            btnMenu_Icon[1].classList.remove('hideMenuMovile');
            btnMenu_Icon[1].classList.add('showMenuMovile');
            body.classList.add('showingMenuMovile');
            visible = true;
        }else{
            headerNavTelefono.classList.remove('showMenuMovile');
            headerNavTelefono.classList.add('hideMenuMovile');
            //Igual eliminamos la clase de los subitems moviles para que no se queden abiertos
            if (submenuMovil[lastIndexMenuMovile].classList.contains('showMenuMovile')) {
                submenuMovil[lastIndexMenuMovile].classList.remove('showMenuMovile');
                subItemsVisibles = false;
            }
            btnMenu_Icon[0].classList.remove('hideMenuMovile');
            btnMenu_Icon[0].classList.add('showMenuMovile');
            btnMenu_Icon[1].classList.add('hideMenuMovile');
            btnMenu_Icon[1].classList.remove('showMenuMovile');
            body.classList.add('showingMenuMovile');
            body.classList.remove('showingMenuMovile');
            visible = false;
        }
    });

    //Muestra el div con la lista de los subelementos se usas un foreach para añadir el event listener a todos los elementos que tengan ese nombre o id
    itemPrincipalMovil.forEach((elemento, index) => {
        elemento.addEventListener('click', function(elementos){
            // subItemsVisibles = false;
            if (subItemsVisibles==false) {
                submenuMovil[index].classList.remove('hideMenuMovile');
                submenuMovil[index].classList.add('showMenuMovile');
                subItemsVisibles = true;
                lastIndexMenuMovile = index;
            } else {
                submenuMovil[index].classList.remove('showMenuMovile');
                submenuMovil[index].classList.add('hideMenuMovile');
                subItemsVisibles = false;
                lastIndexMenuMovile = index;
            }
        });
    });

    //Detectar viewport y si es mayor a 760 ocultar el div del menú para evitar errores visuales
    window.addEventListener('resize', function(event){
        windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            headerNavTelefono.classList.remove('showMenuMovile');
            body.classList.remove('showingMenuMovile');
            headerNavTelefono.classList.add('hideMenuMovile');
            visible = false;
            if (submenuMovil[lastIndexMenuMovile].classList.contains('showMenuMovile')) {
                submenuMovil[lastIndexMenuMovile].classList.remove('showMenuMovile');
                subItemsVisibles = false;
            }
            btnMenu_Icon[0].classList.remove('hideMenuMovile');
            btnMenu_Icon[0].classList.add('showMenuMovile');
            btnMenu_Icon[1].classList.add('hideMenuMovile');
            btnMenu_Icon[1].classList.remove('showMenuMovile');
        }
    });
    