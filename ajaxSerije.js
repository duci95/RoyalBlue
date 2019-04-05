//ajax zahtev za serije
$(document).ready(function(){
    $.ajax({
        url: "serije.json",
        type : "GET",
        dataType : "JSON",
        success : function(podaci){
            prikaziSerije(podaci);
        },
        error : function(zahtev, status, greska){
           // alert("Izvinjavamo se zbog tehničkih problema");
           console.log(greska);
        }
    });
////////////////////////

//funkcija za prikaz serija
    function prikaziSerije(podaci){
        var root = $("#box");
            
        var div ="";
        
        for(i=0;i<podaci.length;i++){
            
            div+="<div class='stavke'>";
            div+= "<div class='slika'>";
            div+= '<h2>' + podaci[i].naziv +'</h2>';
            div+='<img src="'+podaci[i].slika.src+'" alt="'+podaci[i].slika.alt+'" width="'+podaci[i].slika.width+'" height='+podaci[i].slika.height+' title="'+podaci[i].slika.title+'"/>';  
            div+="</div>";
            div+= "<div class='tekst'>";
            div+= '<h3 class="zanr">Žanr: ' + podaci[i].zanr +'</h3>';
            var uloge = podaci[i].uloge;
            div+='<h3 class="uloge">Uloge:</h3>';
            for(j=0;j<uloge.length;j++){
                div+= '<h4 class="podvuci">'+uloge[j].ime +' '+ uloge[j].prezime +'</h4>';
        }               
             div+="</div>";  
             div+="</div>";  
             div+="<div class='cl'> </div>";
             
        }

        
        
        root.append(div);
    }   

////////////////////////////
});