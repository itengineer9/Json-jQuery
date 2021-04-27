

$(function(){

    loadImg();
    	
});//ende doc Ready


function loadImg(){
    $.ajaxSetup({cache : false}); // verhindern des cachen
    
    $.getJSON("js/mehrereGalleris.json")
    
    .done(function(data){
        $('<figure class= "slide"></figure>').appendTo('#content');
        
        $.each(data.grimaud, function (key, value) {
            let bild = data.grimaud[key].imgPath;
            $('<img src= "'+bild+'"></img>').appendTo('.slide');
            let title = data.grimaud[key].title;
            $('<li>'+title+'</li>').appendTo('.slide');
        });
        
//        $.each(data.birmingham, function (key, value) {
//            let title = data.birmingham[key].title;
//            $('<li>'+title+'</li>').appendTo('.slide');
//        });
        
     })//end Done

    .fail (function(){
        $('#content').text('Entschuldigung ,,,, etwas Passiert');
     });
}

