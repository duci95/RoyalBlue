$(document).ready(function(){
//rastući niz
    $(" #a").click(function(){
		
        var sortiraniNiz = $('.stavke');
        console.log(sortiraniNiz);
        
        sortiraniNiz.sort(function(prvi,drugi){
            prvi = ($(prvi).find('h2').text());
            drugi = ($(drugi).find('h2').text());
                
                if(prvi>drugi){
                    return 1;
                }
                else if(prvi<drugi){
                    return -1;
                }
                else{
                    return 0;
                }
        });
        
        $('#box').html(sortiraniNiz);
        
    });


//opadajući niz
    $("#z").click(function(){
		
        var sortiraniNiz = $('.stavke');
        console.log(sortiraniNiz);
        
        sortiraniNiz.sort(function(prvi,drugi){
            prvi= ($(prvi).find('h2').text());
            drugi = ($(drugi).find('h2').text());
                
                
                if(prvi>drugi){
                    return -1;
                }

                else if(prvi<drugi){
                    return 1;
                }

                else{
                    return 0;
                }
        });
        
        $('#box').html(sortiraniNiz)
        
    });
// delimicna pretraga 
    $('#pretraga').on('keyup', function(){
		var uneseno = $("#pretraga").val();
		var niz = $('.stavke');
		
		$.each(niz, function(index, stavka){
			var uloge = $(stavka).find('.tekst h4').text();
			
			if(uneseno == ""){
				$(stavka).show();
			}
			else if(uloge.toLowerCase().indexOf(uneseno.toLowerCase()) != -1){
				$(stavka).show();
			}
			else{
				$(stavka).hide();
			}
		});
    });
    //pretraga
    $('#pretraga').keyup(function(){
		
        var uneseno = $("#pretraga").val();
        var niz = $('.artikal');
		
		$.each(niz, function(index, stavka){

			var uloge = $(stavka).find('.tekst h4').text();
			if(uneseno == '')
			{
				$(stavka).show();
			}
			else if(uneseno.toLowerCase() == uloge.toLowerCase())
			{
				$(stavka).show();
			}
			else
			{
				$(stavka).hide();
			}
		});
	});


    //JSON za serije
    var slikeSerije = [
        {
            "src" :"images/slajder/himym.jpg",
            "alt" :"how-i-met-your-mother",
            "title" : "How i met your mother"
            
        },
        {
            "src" :"images/slajder/ncis.jpg",
            "alt" :"NCIS",
            "title" : "NCIS"
            
        },
        {
            "src" :"images/slajder/zero-hour.jpg",
            "alt" :"zero-hour",
            "title" : "Zero Hour"
        },
        {
            "src" :"images/slajder/lethal-weapon.jpg",
            "alt" :"lethal-weapon",
            "title" : "Lethal Weapon"
        },
        {
            "src" :"images/slajder/smallville.jpg",
            "alt" :"smallville",
            "title" : "Smallville"
        },
        {
            "src" :"images/slajder/leverage.jpg",
            "alt" :"leverage",
            "title" : "Leverage"
        },
        {
            "src" :"images/slajder/ubice-mog-oca.jpg",
            "alt" :"ubice-mog-oca",
            "title" : "Ubice mog oca"
        },
               

    ]
///////////////////////////////////
//JSON za filmove
    var slikeFilmovi = [
        {
            "src" :"images/slajder/Spider-Man.png",
            "alt" :"spiderman",
            "title" : "Spajdermen",
            
        },
        {
            "src" :"images/slajder/the-game.png",
            "alt" :"the-game",
            "title" : "The Game",
            
        },
        {
            "src" :"images/slajder/kod.jpg",
            "alt" :"knowing",
            "title" : "Knowing"
            
        },
        {
            "src" :"images/slajder/the-expendables.jpg",
            "alt" :"expendables",
            "title" : "The Expandables"
            
        },
        {
            "src" :"images/slajder/space-jam.jpg",
            "alt" :"space-jam",
            "title" : "Space jam"
            
        },
        {
            "src" :"images/slajder/pearl-harbor.jpg",
            "alt" :"pearl-harbor",
            "title" : "Pearl Harbor"
            
        },
        {
            "src" :"images/slajder/armageddon.jpg",
            "alt" :"armageddon",
            "title" : "Armageddon"
            
        }
        
    ]
// dinamicko ispisivanje slika za serije
    var ispisSerije = "";

    for(var i in slikeSerije){
        ispisSerije+= "<img src='"+slikeSerije[i].src+"' alt='"+slikeSerije[i].alt+"' title='"+slikeSerije[i].title+"' width='800' height='500'/>";
    }
    
    var root = $("#serije .slajder-slike");
    root.append(ispisSerije);
	
	
	
//////////////////////////////////////////
//dinamicko ispisivanje slika za filmove
    var ispisFilmovi = "";

    for(var i in slikeFilmovi){
        ispisFilmovi+= "<img src='"+slikeFilmovi[i].src+"' alt='"+slikeFilmovi[i].alt+"' title='"+slikeFilmovi[i].title+"' width='800' height='500'/>";
    }
		
	
    var root = $("#filmovi .slajder-slike");
    root.append(ispisFilmovi);

});

///////////////////////////////////////////////////////////
/*regularni izrazi za korisnicko ime i sifru*/
function login(){

    var ime = document.getElementById("ime");
    var reIme = /^[a-zšđčćž]{3,9}[0-9]{1,4}$/;

    var sifra = document.getElementById("sifra");
    var reSifra = /^[A-ZŠĐČĆŽ][a-zšđčćž]{3,8}[0-9]{1,4}$/;


    if(!reIme.test(ime.value)){
        ime.style.border = "3px #960101 solid";
        alert("Korisničko ime mora biti u formatu korisnik1234"); 
    }
    else{
        ime.style.border = "3px #77f442 solid";
        localStorage.setItem("ime",ime.value);
        
    }
    if(!reSifra.test(sifra.value)){
        sifra.style.border = "3px #960101 solid";
        alert("Sifra mora biti u formatu Šifra1234");
        return false;
    }
    else{
        sifra.style.border = "3px #77f442 solid";
        localStorage.setItem("sifra",sifra.value);  
    }        
    var formaSakrij = document.getElementById("formaDiv");

    var tekstPrikazi = document.getElementById("tekstForme");
    
    document.querySelector("#tekstForme h1").innerHTML = "Ime: " + ime.value;
    
    document.querySelector("#tekstForme h2").innerHTML = "Šifra: " + sifra.value;

    tekstPrikazi.style.display = "block";

    formaSakrij.style.display = "none";  
}
///////////////////////////////////////////////////

/*regularni izrazi za kontakt formu */
function kontakt(){
    var ime = document.getElementById("imeKontakt").value;
    var prezime = document.getElementById("prezimeKontakt").value;
    var text = document.getElementById("pitanje").value;
    var reIme = /^([A-ZŠĐČĆŽ][a-zšđčćž]{3,11}(.)?)+$/;
    var rePrezime = /^([A-ZŠĐČĆŽ][a-zšđčćž]{3,25}(.)?)+$/;

    var flagI = 1;
    var flagP = 1;
    var flagV = 1;
        
    if(!reIme.test(ime)){
        flagI = 0;
        alert("Samo jedno veliko slovo je dozvoljeno na početku imena");

        return false;
    }
    else{
        console.log(ime)
    }
    if(!rePrezime.test(prezime)){
        flagP=0;
        alert("Samo jedno veliko slovo je dozvoljeno na početku prezimena");
        return false;
    }
    else{
        console.log(prezime);
    }
    if(text.length < 20 || text.length > 300){
        flagV = 0;
        alert("Mozete uneti izmedju 20 i 300 karaktera!");
        
   }
    if(flagI == 1 && flagP == 1 && flagV == 1){
        alert("Pitanje uspešno poslato!");
    }
    
}
////////////////////////////////////////////////////////////////////