var doagja_od = {
  golema_eksplozija: "Водородот е најраспостранет елемент во вселената",
  kosmicki_zraci: "процес на космичка нуклеосинтеза",
  zvezdi_mala_masa: "Ѕвезди со средна големина",
  masivni_zvezdi: "се синтетизираат во масивните ѕвезди",
  supernova: "Супернова eксплозија на масивни ѕвезди",
  vestacki_element: "синтетички елемент"
  
      
  
}




var elementi_podatok = [
  {
    atomski_broj: 1,
    ime: "Водород",
    simbol: "H",
    atomska_tezina: 1.008,
    kategorija: "Неметал",
    klasa_kategorija: "nemetal",
    tocka_topenje: -259,
    tocka_vrienje: -253,
    pronaogjanje: 1776,
    opis: "Водородот е лесно запалив и гори во воздухот доколку е концентриран од 4% до 75%.",
    kade_se_koristi: "Водородот најчесто се користи за добивање на Амониа на пазарот за ѓубрива. Водородот се користи и во Металургија.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.golema_eksplozija, doagja_od.kosmicki_zraci)
  },
  {
    atomski_broj: 2,
    ime: "Хелиум",
    simbol: "He",
    atomska_tezina: 4.0026,
    kategorija: "Благороден гас",
    klasa_kategorija: "blagodaren-gas",
    tocka_topenje: -272,
    tocka_vrienje: -269,
    pronaogjanje: 1895,
    opis: "Хелиум е втор најмалку реактивен благороден гас.",
    kade_se_koristi: "Течниот хелиум се користи во криогениката, особено во ладењето на суперкомпјутерски магнети, при што главната комерцијална апликација е во скенери за МРИ.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.golema_eksplozija)
  },
  {
    atomski_broj: 3,
    ime: "Литиум",
    simbol: "Li",
    atomska_tezina: 6.997,
    kategorija: "Алкален метал",
    klasa_kategorija: "alkalen-metal",
    tocka_topenje: 180.5,
    tocka_vrienje: 1330,
    pronaogjanje: 1817,
    opis: "Литиумот е мек, запалив и потенцијално експлозивен кога е изложен на воздух.",
    kade_se_koristi: "Литиумовиот метал се употребува првенствено во топлоспроводните апликации, батериите, куќни уреди како што се тостери и микробранови печки и во легури како оние кои се користат за конструкција на авиони.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.golema_eksplozija, doagja_od.kosmicki_zraci)
  },
  {
    atomski_broj: 4,
    ime: "Берилиум",
    simbol: "Be",
    atomska_tezina: 9.0122,
    kategorija: "Земноалкален метал",
    klasa_kategorija: "zemnoalkalen-metal",
    tocka_topenje: 1287,
    tocka_vrienje: 2970,
    pronaogjanje: 1797,
    opis: "Тој е лесен метал. Има челично-сива боја.",
    kade_se_koristi: "Без него не е можно да се направи нуклеарно оружје, да се лета со авион, да се направат рендгенски снимки и да се освојува космосот.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.kosmicki_zraci)
  },
  {
    atomski_broj: 5,
    ime: "Бор",
    simbol: "B",
    atomska_tezina: 10.821,
    kategorija: "Металоид",
    klasa_kategorija: "metaloid",
    tocka_topenje: 2076,
    tocka_vrienje: 3927,
    pronaogjanje: 1808,
    opis: "Постојат неколку алотропи на борот; аморфниот бор е кафеав прав, а металниот (кристален) бор е црн, цврст (9,3 според Мосовата скала) и е слаб спроводник на собна температура.",
    kade_se_koristi: "Елементарниот бор се користи како премаз во полуспроводничката индустрија, додека боровите соединенија играат важни улоги како лесни структурни материјали, нетоксични инсектициди и презервативи, како и реагенси за хемиската синтеза.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.kosmicki_zraci)
  },
  {
    atomski_broj: 6,
    ime: "Јаглерод",
    simbol: "C",
    atomska_tezina: 12.0116,
    kategorija: "Неметал",
    klasa_kategorija: "nemetal",
    tocka_topenje: "нема точка на топење",
    tocka_vrienje: 4827,
    pronaogjanje: "Oд античко време",
    opis: "Алтропите на јаглерод вклучуваат графит, еден од најмеката позната супстанца, и дијамант, најјаката природна супстанција.",
    kade_se_koristi: "Некои форми на графит се користат за термоизолација, но некои други форми се добри термички проводници.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.kosmicki_zraci)
  },  
  {
    atomski_broj: 7,
    ime: "Азот",
    simbol: "N",
    atomska_tezina: 14.0073,
    kategorija: "Неметал",
    klasa_kategorija: "nemetal",
    tocka_topenje: −210,
    tocka_vrienje: -196.795,
    pronaogjanje: 1772,
    opis: "Тој е гас без боjа, мирис и вкус, една од главните состоjки на воздухот.",
    kade_se_koristi: "Служи основно за производство на вештачки ѓубрива и експлозиви.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.zvezdi_mala_masa, doagja_od.supernova)
  },
  {
    atomski_broj: 8,
    ime: "Кислород",
    simbol: "O",
    atomska_tezina: 15.9998,
    kategorija: "Неметал",
    klasa_kategorija: "nemetal",
    tocka_topenje: −218.79,
    tocka_vrienje: -182.962,
    pronaogjanje: 1772,
    opis: "Тој е гас без боjа.",
    kade_se_koristi: "Кислородот е главна состојка на воздухот, се произведува од растенијата за време на фотосинтезата и е потребен за аеробна респирација кај животните.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.supernova)
  },
  {
    atomski_broj: 9,
    ime: "Флуор",
    simbol: "F",
    atomska_tezina: 18.9984,
    kategorija: "Неметал",
    klasa_kategorija: "nemetal",
    tocka_topenje: −219.67,
    tocka_vrienje: -188.11,
    pronaogjanje: 1810,
    opis: "корозивен бледожолт гас кој е моќно оксидационо средство. 
    Тој е најреактивниот и најелектронегативниот од сите хемиски елементи,
    и брзо формира соединенија со повеќето други елементи.",
    kade_se_koristi: "Кислородот е главна состојка на воздухот, се произведува од растенијата за време на фотосинтезата и е потребен за аеробна респирација кај животните.",
    od_kade_doagja: odKadeTojDoagja(doagja_od.supernova)
  },
  
  
  
  
  
];
