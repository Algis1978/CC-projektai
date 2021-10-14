console.log("Funkcija nr. 1");
console.log("Celsijaus temperatūros laipsnių keitimas į Farenheito");

function celsijusIFarenheit (laipsnisC) {
    let laipsnisF = laipsnisC*(9/5)+32;
    return laipsnisF;
}
console.log("farenheitasICelsiju(10): "+celsijusIFarenheit(10));

console.log("Funkcija nr. 2");
console.log("Žodžio perrašymas atbulai");

function zodisAtbulai (zodis) {
    let zodisAtbulai = "";
    for (let i = zodis.length-1; i>=0; i--){
        zodisAtbulai += zodis.charAt(i)
    }
    return zodisAtbulai;
}
console.log("zodisAtbulai('Lietuva'): "+zodisAtbulai("Lietuva"));

console.log("Funkcija nr. 3");
console.log("Faktorialo radimas");

function faktorialas (skaicius) {
    if (skaicius == 0) {
        skaicius = 1;
    } else {
        skaicius = skaicius*(faktorialas(skaicius-1));
        }
    return skaicius;
}
console.log("faktorialas(8): "+faktorialas(8));

console.log("Funkcija nr. 4");
console.log("Ilgiausio žodžio radimas eilutėje");

function ilgiausiasZodis (zodis) {
    let masyvas = zodis.split(" ")
    let ilgiausiasZodis = 0;
    let atsakymas = [];
    for (let i = 0; i<masyvas.length; i++) {
        if (masyvas[i].length>ilgiausiasZodis){
            ilgiausiasZodis=masyvas[i].length
        }
    }
    masyvas.sort(function (a,b) {return b.length-a.length});
    atsakymas.push(masyvas[0]);
    atsakymas.push(ilgiausiasZodis);
    return atsakymas;
}
ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu')
console.log("ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu'): ilgiausias žodis: „"+ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu')[0]+"“, ilgis: "+ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu')[1]+" simbolių.");

console.log("Funkcija nr. 5");
console.log("Iš keletos masyvų viename masyve išrinkti didžiausius skaičius į atskyrą masyvą.");
function largestOfArray(arr) {
    let topNumbers = [];
  for (let i = 0; i<arr.length; i++){
    let largestNumber=-Infinity;
    for (let j = 0; j<arr[i].length; j++) 
    if (arr[i][j] >= largestNumber) {
      largestNumber = arr[i][j]
    }
    topNumbers.push(largestNumber)
  }
  return topNumbers;
}
console.log("largestOfArray([[4, 8, -34, 145], [0, -189, 32, 14], [7, 102], [-23, Infinity, 1004, 7]]): " + largestOfArray([[4, 8, -34, 145], [0, -189, 32, 14], [7, 102], [-23, Infinity, 1004, 7]]));

console.log("Funkcija nr. 6");
console.log("Patikrinti, ar pirmo argumento teksto eilutė baigiasi antro argumento teksto eilute");

function confirmEnding(str, target) {
    let mString = "";
    for (let i = target.length; i >0; i--) {
        mString += str[str.length-i]
    }
    if (mString === target) {
        return true
    }
    return false
}
console.log("confirmEnding('Nemunas teka, vingiuoja', 'uoja'): "+confirmEnding('Nemunas teka, vingiuoja', 'uoja'))
console.log("confirmEnding('Nemunas teka, vingiuoja', 'eeja'): "+confirmEnding('Nemunas teka, vingiuoja', 'eeja'))

console.log("Funkcija nr. 7");
console.log("Pakartoti pirmu argumentu duotą teksto eilutę antro argumento kartų ir išvesti nauja eilute. Jei antras argumentas nėra teigiamas skaičius, grąžinti tuščią tekstą.");

function repeatStringNumTimes(str, num) {
  if (num<=0) {
      return ""
  }
  let newString = "";
  for (let i=1; i<=num; i++) {
      newString += str
  }
  return newString
}
console.log("repeatStringNumTimes('Taip ', 5): "+ repeatStringNumTimes('Taip ', 5))

console.log("Funkcija nr. 8");
console.log("Sutrumpinti pirmu argumentu duotą teksto eilutę iki antro argumento simbolių skaičiaus ir pridėti '...' Jei eilutė ilgesnė arba lygi, ją ir grąžinti");

function truncateString(str, num) {
    return str.length>num ? str.slice(0, num)+'...' : str
}
console.log("truncateString('Nemunas teka, vingiuoja', 10): "+truncateString('Nemunas teka, vingiuoja', 10))

console.log("Funkcija nr. 9");
console.log("Iteruoti pirmo argumento masyvą ir grąžinti pirmą elementą, kuris atitinka antro argumento funkciją. Jei tokių nebus rasta, grąžinti 'undefined'.");

function findElement(arr, func) {
  return arr.find(func);
}

console.log("findElement([7, 5, 6, 8], (num) => num%2 === 0): "+findElement([7, 5, 6, 8], (num) => num%2 === 0))

console.log("Funkcija nr. 10");
console.log("Patikrinti, ar argumentas yra Būlio vertė. Grąžinti true arba false.");

function arBulioVerte(bool) {
    if (bool===true||bool===false) {
        return true
    }
  return false;
}
console.log("arBulioVerte(null): "+arBulioVerte(null))
console.log("arBulioVerte(false): "+arBulioVerte(false))
console.log("arBulioVerte('la-la-la'): "+arBulioVerte('la-la-la'))

