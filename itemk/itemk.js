var kelii = document.getElementsByClassName("element");

function izgradiTabelaNaElementite() {
  for(let i = 0; i < elementi_podatok.length; i++) {
    
    kelii[i].innerHTML = `
      <div class="td-kontejner"> 

        <div class="atomskiot-broj">${elementi_podatok[i].atomski_broj}</div>
    
        <div class="simbol-masa-kontejner">          
          <b class="simbol">${elementi_podatok[i].simbol}</b>
          <span class="masa">${elementi_podatok[i].atomska_tezina}</span>
        </div>  
        
      </div>
      
      `;
    
    kelii[i].classList.add(`${elementi_podatok[i].klasa_kategorija}`);
    
    
    kelii[i].setAttribute("onmouseover", "pokaziDetalite(this)");
    kelii[i].setAttribute("onmouseleave", "skrijDetalite()");
    
    
    kelii[i].setAttribute("data-ime", elementi_podatok[i].ime);
    kelii[i].setAttribute("data-atomskibroj", elementi_podatok[i].atomski_broj);
    kelii[i].setAttribute("data-hemijskiznak", elementi_podatok[i].simbol);    
    kelii[i].setAttribute("data-atomskatezina", elementi_podatok[i].atomska_tezina);
    kelii[i].setAttribute("data-kategorija", elementi_podatok[i].kategorija);
    kelii[i].setAttribute("data-tockatopenje", elementi_podatok[i].tocka_topenje);
    kelii[i].setAttribute("data-tockavrienje", elementi_podatok[i].tocka_vrienje);
    kelii[i].setAttribute("data-pronaogjanje", elementi_podatok[i].pronaogjanje);    
    kelii[i].setAttribute("data-opisigo", elementi_podatok[i].opis);
    kelii[i].setAttribute("data-kadesekoristi", elementi_podatok[i].kade_se_koristi);    
    kelii[i].setAttribute("data-odkadedoagja", elementi_podatok[i].od_kade_doagja);
  }
  
}

izgradiTabelaNaElementite();







function pokaziDetalite(hodor) {
  srediTekstot("hemijski-znak-tekst", hodor.dataset.hemijskiznak);
  srediTekstot("detal-ime-naslov", "Име: ");
  srediTekstot("detal-ime-tekst", hodor.dataset.ime);
  srediTekstot("detal-atomska-tezina-naslov", "Атомска тежина:");
  srediTekstot("detal-atomska-tezina-tekst", hodor.dataset.atomskatezina); 
  srediTekstot("detal-atomski-broj-naslov", "Атомски број:");
  srediTekstot("detal-atomski-broj-tekst", hodor.dataset.atomskibroj);  
  srediTekstot("detal-topenje-naslov", "Точка на топење:");
  srediTekstot("detal-topenje-tekst", hodor.dataset.tockatopenje + " &deg;C");
  srediTekstot("detal-vrienje-naslov", "Точка на вриење:");
  srediTekstot("detal-vrienje-tekst", hodor.dataset.tockavrienje + " &deg;C");    
  srediTekstot("detal-kategorija-naslov", "Категорија:");
  srediTekstot("detal-kategorija-tekst", hodor.dataset.kategorija);  
  srediTekstot("detal-otkrivanje-naslov", "Откриен:");
  srediTekstot("detal-otkrivanje-tekst", hodor.dataset.pronaogjanje);
   
  srediTekstot("informacija-opisigo-naslov", "Oпис:");
  srediTekstot("informacija-opisigo-tekst", hodor.dataset.opisigo); 
 
  srediTekstot("informacija-kade-sekoristi-naslov", "Каде се користи:");
  srediTekstot("informacija-kade-sekoristi-tekst", hodor.dataset.kadesekoristi);
  srediTekstot("informacija-odkade-poteknuva-naslov", "Од каде потекнува:");
  srediTekstot("informacija-odkade-poteknuva-tekst", hodor.dataset.odkadedoagja);
  
  
  
};


function skrijDetalite() {
  
  srediTekstot("hemijski-znak-tekst", "");
  srediTekstot("detal-ime-naslov", "");
  srediTekstot("detal-ime-tekst", "");
  srediTekstot("detal-atomska-tezina-naslov", "");
  srediTekstot("detal-atomska-tezina-tekst", "");
  srediTekstot("detal-atomski-broj-naslov", "");
  srediTekstot("detal-atomski-broj-tekst", "");
  srediTekstot("detal-topenje-naslov", "");
  srediTekstot("detal-topenje-tekst", "");
  srediTekstot("detal-vrienje-naslov", "");
  srediTekstot("detal-vrienje-tekst", "");
  srediTekstot("detal-kategorija-naslov", "");
  srediTekstot("detal-kategorija-tekst", "");
  srediTekstot("detal-otkrivanje-naslov", "");
  srediTekstot("detal-otkrivanje-tekst","");
  srediTekstot("informacija-opisigo-naslov", "");
  srediTekstot("informacija-opisigo-tekst","");
  srediTekstot("informacija-kade-sekoristi-naslov", "");
  srediTekstot("informacija-kade-sekoristi-tekst", "");
  srediTekstot("informacija-odkade-poteknuva-naslov", "");
  srediTekstot("informacija-odkade-poteknuva-tekst", "");
  
};

function srediTekstot(bran, newText) {
  document.getElementById(bran).innerHTML = newText;
};
