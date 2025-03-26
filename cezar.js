function drukuj() {
    document.getElementById('kodowany').innerHTML= SzyfrCezara(document.getElementById('haslo').value,document.getElementById('kod').value) ;
    document.getElementById('dekodowany').innerHTML= " "+SzyfrCezara(document.getElementById('haslo').value,-(document.getElementById('kod').value)) ;
    
    }
    function SzyfrCezara(TekstWejsciowy, liczba) {
    var MałeLitery = TekstWejsciowy.toLowerCase();
    var alfabet ="aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split('');
    liczba = liczba % alfabet.length;
    var TekstWyjsciowy = "";
    for(var i=0; i<MałeLitery.length; i++) {
      var aktualnaLitera = MałeLitery[i];
      if(aktualnaLitera === ' '){
        TekstWyjsciowy += aktualnaLitera;
        continue;
      }
      var aktualnyIndeks = alfabet.indexOf(aktualnaLitera);
      var nowyIndeks = aktualnyIndeks + liczba;
      if(nowyIndeks > alfabet.length-1) {
        nowyIndeks = nowyIndeks - alfabet.length-1;
      }
      if(nowyIndeks < 0) {
        nowyIndeks = nowyIndeks + alfabet.length-1;
      }
      if(TekstWejsciowy[i]===TekstWejsciowy[i].toUpperCase()){
        TekstWyjsciowy += alfabet[nowyIndeks].toUpperCase();
      }
      else TekstWyjsciowy += alfabet[nowyIndeks];
    }
    return TekstWyjsciowy;
    }