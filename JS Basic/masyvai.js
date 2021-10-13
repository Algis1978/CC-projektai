console.log ("MASYVAI");
console.log ("Darbas. Nr.1. \n Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai)");
let masyvas = []
let masyvoIlgis = Math.round( Math.random()*20 + 10 );
for (let i = masyvoIlgis; i>0; i--) {
    let masyvoVertes = Math.round( Math.random()*10 );
    masyvas.push(masyvoVertes)
}
console.log(masyvas);
console.log ("Darbas. Nr.2. \n Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą");
let masyvoVerciuSuma=0
for (let i = 0; i<masyvas.length; i++) { 
    masyvoVerciuSuma += masyvas[i];
}
console.log(masyvoVerciuSuma)
console.log ("Darbas. Nr.3. \n Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą");
let masyvoVerciuSuma2=0;
for (let i = 0; i<masyvas.length; i++) { 
    if (masyvas[i]>2) 
    {masyvoVerciuSuma2 += masyvas[i];}
}
console.log(masyvoVerciuSuma2)
console.log ("Darbas. Nr.4. \n Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio");
for (let i = 0; i<masyvas.length; i++) { 
    if (masyvas[i]<=2) 
    {masyvas[i]=0;}
}
console.log(masyvas);
console.log ("Darbas. Nr.5. \n Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra");
let didziausiaVerte = -Infinity;
for (let i = 0; i<masyvas.length; i++) { 
    if (masyvas[i]>=didziausiaVerte) 
    {didziausiaVerte = masyvas[i];}
}
console.log(didziausiaVerte);
let didziausiuVerciuSkaiciusMasyve = 0;
for (let i = 0; i<masyvas.length; i++) {
    if (masyvas[i]==didziausiaVerte) {
        didziausiuVerciuSkaiciusMasyve++
    }
}
console.log("Didžiausia vertė masyve - skaičius "+didziausiaVerte+" ir šių verčių yra "+didziausiuVerciuSkaiciusMasyve+".");
console.log ("Darbas. Nr.6. \n Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes");
 for (let i = 0; i<masyvas.length; i++){
        if (masyvas[i]==0) {
            masyvas[i] = i
        }
    }
console.log(masyvas);
console.log ("Darbas. Nr.7. \n Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30");
if (masyvas.length<30) {
    for (let i = 30-masyvas.length; i>0; i--){
        let masyvoVertes = Math.round( Math.random()*10 );
        masyvas.push(masyvoVertes);
    }
}
console.log(masyvas);
console.log ("Darbas. Nr.8. \n Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus)");
let masyvas1 = [];
for (let i=0; i<masyvas.length; i++) {
    if (masyvas[i]<=2) {
        masyvas1.push(masyvas[i])
    }
}
let masyvas2 = [];
for (let i=0; i<masyvas.length; i++) {
    if (masyvas[i]>2) {
        masyvas2.push(masyvas[i])
    }
}
console.log(masyvas1);
console.log(masyvas2);

console.log ("Darbas. Nr.9. \n Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais");
let pinigine = [masyvas1, masyvas2];
console.log(pinigine);
console.log ("Darbas. Nr.10. \n Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']");
let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
pinigine.push(korteles);
console.log(pinigine);
console.log ("Darbas. Nr.11. \n Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę");
pinigine[2].sort();
console.log(pinigine);
console.log ("Darbas. Nr.12. \n Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20");
if (pinigine[2].length<20) {
    for (let i = 20-pinigine[2].length; i>0; i--){
        let kortele = Math.random()<0.5 ? 'MasterCard':'Visa';
        pinigine[2].push(kortele);
    }
}
console.log(pinigine);
console.log ("Darbas. Nr.13. \n Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau");
let visaKorteles = 0;
let masterCardKorteles = 0;
for (let i = 0; i<pinigine[2].length; i++) {
    if (pinigine[2][i]=='Visa') {
        visaKorteles++
    }
    if (pinigine[2][i]=='MasterCard') {
        masterCardKorteles++
    }
}
if (visaKorteles>masterCardKorteles) {
    console.log("„Visa“ kortelių yra daugiau nei „MasterCard“")}
    else if (visaKorteles<masterCardKorteles) {
      console.log("„MasterCard“ kortelių yra daugiau nei „Visa“")}
      else {console.log("„Visa“ ir „MasterCard“ kortelių yra po lygiai")}  
console.log ("Darbas. Nr.14. \n Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999");
let loterijosBilietai = [];
for (let i = 0; i<10; i++){
    let numeris = Math.round(Math.random()*(9_999_999_999-1_000_000_000)) + 1_000_000_000
    loterijosBilietai.push(numeris)
}
pinigine.push(loterijosBilietai);
console.log(pinigine);
console.log ("Darbas. Nr.15. \n Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio");
pinigine[3].sort(function(a, b){return b-a});
console.log(pinigine);
console.log ("Darbas. Nr.16. \n Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500)");
let suma = 0;
for (let i = 0; suma<500&&suma<510; i++){
    naujasPinigas = Math.round(Math.random()*(10-3)) + 3
    pinigine[1].push(naujasPinigas)
    suma += naujasPinigas
}
console.log(pinigine);
console.log ("Darbas. Nr.17. \n Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.");
let laimingasBilietas = 0;
for (let i = 0; i<pinigine[3].length; i++) {
    if (pinigine[3][i]%777==0) {
        laimingasBilietas++
    }
}
if (laimingasBilietas==0) {console.log("Laimingų bilietų nebuvo.")}
else if (laimingasBilietas==1) {console.log("Yra "+laimingasBilietas+" laimingas bilietas.")}
else {console.log("Yra "+laimingasBilietas+" laimingi bilietai.")}

console.log ("Darbas. Nr.18. \n  Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai");
let nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
pinigine.push(nuotraukos);
pinigine[4].sort(function(a, b){return a.length-b.length});
console.log(pinigine);

