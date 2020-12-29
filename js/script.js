window.addEventListener("load",()=>{
    
    var boton=document.querySelector(".boton");
    var cabecera= document.querySelector("#cabecera");
    var logo=document.querySelector(".logo");
    var menu=document.querySelector("#menu");
    
    
    

    window.addEventListener("resize",(event)=>{
        if(window.innerWidth<=486){
            boton.style.display="inline";
            menu.style.display="none";
            cabecera.style.minHeight="auto";
            logo.style.marginTop="0px";
        }
       
        else if(window.innerWidth>486 && window.innerWidth<=767){
            
            boton.style.display="none";
            logo.style.marginTop="40px";
            menu.style.display="flex";
            cabecera.style.minHeight="110px";
        }
        else{
            boton.style.display="none";
            logo.style.marginTop="0px";
            menu.style.display="flex";
            cabecera.style.minHeight="auto";
        }
        
        
    })
   
    boton.addEventListener("click",()=>{
        if(menu.style.display=="flex"){
            menu.style.display="none";
            logo.style.marginTop="0px";
        }
        else{
            menu.style.display="flex";
            if(document.querySelector(".login-movil")!=null){
                logo.style.marginTop="135px";
            }
            else{
                logo.style.marginTop="110px";
            }
            
            
        }
    });
})