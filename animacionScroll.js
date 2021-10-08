window.onload = function(){
    const carga = document.getElementById("contenedor_carga");
    
    carga.style.visibility = 'hidden';
    carga.style.opacity = '0';
    
}

/* ####################### menu #############################*/ 

const menu = document.querySelector('.menu');
const lateral = document.querySelector('.menu-lateral');

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


/*##########################################################################################
################################ BOTON PARA SUBIR LA PAGINA ################################
############################################################################################
*/
const btnUp = document.querySelector("#backUp")
window.addEventListener("scroll", () => {
    const altura = document.documentElement.scrollTop;
    console.log(altura)

    if(altura < 550 ){
        btnUp.style.opacity = 1 ;
        btnUp.classList.add("show")
    }if(altura > 550){
        btnUp.style.opacity = 0;
        btnUp.classList.remove("show")
    } 
})

btnUp.addEventListener("click", yoUp )

function yoUp(){ 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
} 
