$(()=>{
    
    
    window.addEventListener("resize",(event)=>{
        if(window.innerWidth<=486){
            
            $(".boton").css("display","inline");
            
            $("#menu").css("display","none");
            
            $("#cabecera").css("min-height","auto");
            
            $(".logo").css("margin-top","0px");
        }
       
        else if(window.innerWidth>486 && window.innerWidth<=767){
            
            $(".boton").css("display","none");
            
            $(".logo").css("margin-top","40px");
            
            $("#menu").css("display","flex");
            
            $("#cabecera").css("min-height","110px");
        }
        else{
            
            $(".boton").css("display","none");
            
            $(".logo").css("margin-top","0px");
           
            $("#menu").css("display","flex");
            
            $("#cabecera").css("min-height","auto");
        }
        
        
    })
   
    $(".boton").click(()=>{
        
        if($("#menu").css("display")=="flex"){
            
            $("#menu").css("display","none");
            
            $(".logo").css("margin-top","0px");
        }
        else{
           
            $("#menu").css("display","flex");
            
            if($(".login-movil").length==1){
                
                $(".logo").css("margin-top","135px");
            }
            else{
                
                $(".logo").css("margin-top","110px");
            }
            
            
        }
    });
});