console.log ("CIKLAI");
console.log ("Darbas. Nr.1. \n console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’");
for (let i = 5; i>0; i--) {
    console.log('Labas')
}
console.log ("Darbas. Nr.2. \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje))");
for (let i = 0; i<=4; i++) {
    console.log(i)
}
console.log ("Darbas. Nr.3. \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje))");
for (let i = 0; i<=4; i++) {
    console.log(i*10)
}
console.log ("Darbas. Nr.4. \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje))");
for (let i = 49; i<=53; i++) {
    console.log(i)
}
console.log ("Darbas. Nr.5. \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje))");
for (let i = 4; i>=0; i--) {
    console.log(i)
}
console.log ("Darbas. Nr.6. \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for))");
for (let i = 0; i<=8; i+=2) {
    console.log(i)
}
console.log ("Darbas. Nr.7 \n console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje))");
for (let i = 4; i>=0; i--) {
    console.log( Math.round(Math.random()*10) )
}
console.log ("Darbas. Nr.8 \n console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5)");
for (let i = 0, skaicius; i>=0&&skaicius!=5; i++) {
    skaicius = Math.round(Math.random()*10);
    console.log(skaicius);
}
console.log ("Darbas. Nr.9. \n console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100)");
let sum = 0;
for (let i = 0, k; sum<=100; i++) {
    k = Math.round(Math.random()*10);
    console.log( k )
    sum += k
}
console.log("Skaičių suma = "+sum+".");
console.log ("Darbas. Nr.10. \n console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7) Suskaičiuoti kiek ciklų prasisuko)");
let cikluSkaicius=0;
for (let i = 0, skaicius; i>=0&&skaicius!=5&&skaicius!=7; i++) {
    skaicius = Math.round(Math.random()*10);
    console.log(skaicius);
    cikluSkaicius++
}
console.log("Prasisuko ciklų: "+cikluSkaicius+".")
console.log ("Darbas. Nr.11 \n console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų)");
sum = 0
for (let i = 0, k; i<=10||sum<20; i++) {
    k = Math.round(Math.random()*10);
    console.log( k )
    sum += k
}
console.log("Skaičių suma = "+sum+".");
console.log ("Darbas. Nr.12 \n console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai)");
let nelyginiaiSkaiciai=0;
for (let i = 0; i>=0&&nelyginiaiSkaiciai<3; i++) {
    let skaicius = Math.round(Math.random()*10);
    console.log(skaicius);
    if (!(skaicius%2==0)){
       nelyginiaiSkaiciai++ 
    }
}

console.log ("Darbas. Nr.13 \n console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai)");
let vienodiSkaiciai = true;
for (let i = 0; i>=0&&vienodiSkaiciai; i++) {
    let skaicius1 = Math.round(Math.random()*10);
    let skaicius2 = Math.round(Math.random()*10);
    console.log(skaicius1+", "+skaicius2);
    if (skaicius1==skaicius2){
        vienodiSkaiciai = false;0
    }
}
console.log ("Darbas. Nr.14 \n console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100)");
let riba = true;
let suma1 = 0;
let suma2 = 0;
for (let i = 0; i>=0&&riba; i++) {
    let skaicius1 = Math.round(Math.random()*10);
    let skaicius2 = Math.round(Math.random()*10);

    console.log(skaicius1+", "+skaicius2);

    suma1 += skaicius1;
    suma2 += skaicius2;
    if (suma1>100&&suma2>100){
        riba = false;
    }
}
console.log("suma1 = "+suma1);
console.log("suma2 = "+suma2);

console.log ("Darbas. Nr.15 \n console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.")

nelyginiaiSkaiciai = true;
let nelygSkaicius1 = 0; 
let nelygSkaicius2 = 0; 
for (let i = 0; i>=0&&nelyginiaiSkaiciai; i++) {
    let skaicius1 = Math.round(Math.random()*10);
    let skaicius2 = Math.round(Math.random()*10);
    console.log(skaicius1+", "+skaicius2);

    if ( !(skaicius1%2==0) ) {
        nelygSkaicius1++
    }
    if ( !(skaicius2%2==0) ) {
        nelygSkaicius2++
    }
    if (nelygSkaicius1==3||nelygSkaicius2==3) {
        nelyginiaiSkaiciai = false;
    }
}

