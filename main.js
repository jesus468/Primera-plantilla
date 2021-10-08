

    let ver = document.documentElement.scrollTop


    /*######################################################################################
    ################################### pagina de cargado ##################################
    ########################################################################################
    */

    const listo = document.addEventListener("DOMContentLoaded", () => {
        if( listo === true ){
            console.log(document);
        }else{
            //console.log("cargando");
        }
    })

    /* ####################### menu #############################*/ 

    const menu = document.querySelector('div');

    menu.addEventListener('click', giro)

    function giro() {
    // menu.classList.add('giro');
        if( menu.classList.contains('giro')){
            menu.classList.remove('giro');
            lateral.classList.remove('activo');
            textMenu.classList.remove("hidden");     
        
        }else{
            menu.classList.add('giro');
            lateral.classList.add('activo');
            textMenu.classList.add("hidden");
            textMenu.classList.remove("menuA");
            textMenu.classList.remove("menuT");
        }
    }

    const textMenu = document.querySelector("#menuT")
    const ima = document.querySelector('.menu');


    ima.addEventListener("mouseenter", () => {
        textMenu.classList.add("menuA");
        textMenu.classList.remove("menuT");
    })
    ima.addEventListener('mouseout', () => {
        textMenu.classList.remove("menuA");
        textMenu.classList.add("menuT");
    })

    /*############################## MENU LATERAL ##########################*/
    const lateral = document.querySelector('.menu-lateral');


    /*##############################  CONTACTOS  ###########################*/

    const contactos = document.querySelector("#contactos") 
    const contactosText = document.querySelector('.contactos')
    const mover = document.querySelector('#inventario')
    const mover2 = document.querySelector('#iniciarsesion')


    contactos.addEventListener('click', abrir);

    function abrir() {
        if( contactos.classList.contains('abrir')){
            contactos.classList.remove('abrir');
            contactosText.classList.remove('abrir');
            mover.classList.remove('mover');
            mover2.classList.remove('mover')
            console.log(mover2);
            console.log(mover); 
        }else{
            contactos.classList.add('abrir');
            contactosText.classList.add('abrir');
            mover.classList.add('mover');
            mover2.classList.add('mover')

            console.log(mover2);
            console.log(mover);    
            
        }

    }
    /*#########################################################################################
    ###################################### INVENTARIO #########################################
    ###########################################################################################
    */
    const fila4 = document.querySelector('#fila4');
    const fila5 = document.querySelector('#fila5');

    console.log(fila4);
    console.log(fila5);

    window.addEventListener('scroll',()=>{ 
        let ver = document.documentElement.scrollTop
        const fila4 = document.querySelector('#fila4');
        const fila5 = document.querySelector('#fila5');
        if ( ver > 250 ){
            fila3.style.opacity = 1 ;
            fila3.classList.add("fila3")
        }if ( ver > 350 ){
            fila4.style.opacity = 1 ;
            fila4.classList.add("fila4")
        }if (ver > 550 ){
            fila5.classList.add('fila5');
            fila5.style.opacity = 1 ;
        }
    })
    /*##########################################################################################
    ################################ BOTON PARA SUBIR LA PAGINA ################################
    ############################################################################################
    */
    const btnUp = document.querySelector("#backUp")
    console.log(btnUp)
    window.addEventListener("scroll", ej )

    function ej(){
        let ver = document.documentElement.scrollTop
        console.log(ver);

        if(ver > 200 ){
            btnUp.style.opacity = 1 ;
            btnUp.classList.add("show")
        }if(ver < 200){
            btnUp.style.opacity = 0;
            btnUp.classList.remove("show")
        } 
    }

    btnUp.addEventListener("click", yoUp)

    function yoUp(){ 
        window.scrollTo({   
            top: 0,
            behavior: "smooth"
        })
    }
 
