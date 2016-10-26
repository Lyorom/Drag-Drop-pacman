$(function(){
   
    $('.boule').draggable({
        revert : 'invalid',
        axis : 'x',
    });
    
    $('.fantome').draggable({
        axis : 'x',
    });
    
    
    $('#drop').droppable({
        
        drop : function(event, ui){
           $(this)
            .addClass( "" );
        }
    });
    
});