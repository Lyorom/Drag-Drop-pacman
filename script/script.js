$(function(){
   
    $('.boule').draggable({
        containment : '.pacman',
        revert : 'invalid',
        axis : 'x',
        
    });
    
    $('.fantome').draggable({
        containment : '.pacman',
        revert : 'valid',
        axis : 'x',
    });
    
    var div = $("#drop");
    
    $('#drop').droppable({
        
        drop : function(event, ui){
            ui.draggable.clone().appendTo(div);
            
            if(div.children(".boule").length == 4){
                
                $("#drop").html('<img src="./ressource/pacman good.png"  width=200px height=200px />');
                $(".boule").hide(); 
                
                setTimeout(function(){
                $("body").html('<img src="./ressource/fin.png" width=800px height=800px style="margin-left: 12%;" />').append('<a href="" style="text-decoration: none; color: darkgoldenrod; font-size: 150px; position: absolute; left: 30%; background-color: black; bottom: 10%;">Rejouer</a>');
                },2000);
            }
            
            else if(div.children(".fantome").length == 1){
                $("#drop").html('<img src="./ressource/pacman dead.png"  width=200px height=200px />');
                setTimeout(function(){
                $("*").html('<img src="./ressource/easter egg/dead.jpg" width="100%" />');
                },5000);
                setTimeout(function reload() {
                    alert('error');
                    location.reload();
                },6000);
            }
           
        }
    });
    
});