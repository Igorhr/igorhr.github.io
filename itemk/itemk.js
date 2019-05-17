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
    
    kelii[i].classList.add("${elementi_podatok[i].klasa_kategorija}");
    
    
    kelii[i].setAttribute("onmouseover", "pokaziDetalite(this)");
    kelii[i].setAttribute("onmouseleave", "skrijDetalite()");
    
    
    kelii[i].setAttribute("podatoci-ime", elementi_podatok[i].ime);
    kelii[i].setAttribute("podatok-atomskibroj", elementi_podatok[i].atomski_broj);
    kelii[i].setAttribute("podatok-simbol", elementi_podatok[i].simbol);
    kelii[i].setAttribute("podatok-atomskatezina", elementi_podatok[i].atomska_tezina);
    kelii[i].setAttribute("podatok-kategorija", elementi_podatok[i].kategorija);
    kelii[i].setAttribute("podatok-tockatopenje", elementi_podatok[i].tocka_topenje);
    kelii[i].setAttribute("podatok-tockavrienje", elementi_podatok[i].tocka_vrienje);
    kelii[i].setAttribute("podatok-pronaogjanje", elementi_podatok[i].pronaogjanje);
    kelii[i].setAttribute("podatok-opis", elementi_podatok[i].opis);
    kelii[i].setAttribute("podatok-kadesekoristi", elementi_podatok[i].kade_se_koristi);
    kelii[i].setAttribute("podatok-odkadedoagja", elementi_podatok[i].od_kade_doagja);
  }
  
}

izgradiTabelaNaElementite();





/*

function pokaziDetalite(hodor) {
  napraviText("hemijski-znak-tekst", hodor.dataset.simbol);
  napraviText("detal-ime-naslov", "Име: ");
  napraviText("detal-ime-tekst", hodor.dataset.ime);
  
}


function skrijDetalite() {
  
  napraviText("simbol-text", "");
  napraviText("detal-ime-naslov", "");
  napraviText("detal-ime-tekst", "");
}

funkcija napraviText(id, sansa) {
  document.getElementById(id).innerHTML = sansa;
}*/
