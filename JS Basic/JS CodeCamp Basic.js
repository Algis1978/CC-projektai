console.log("Funkcija nr. 1");
console.log("Celsijaus temperatūros laipsnių keitimas į Farenheito");

function celsijusIFarenheit (laipsnisC) {
    let laipsnisF = laipsnisC*(9/5)+32;
    return laipsnisF;
}
console.log("farenheitasICelsiju(10): "+celsijusIFarenheit(10));
document.write("1. farenheitasICelsiju(10): "+celsijusIFarenheit(10)+"<br>");

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
document.write("2. zodisAtbulai('Lietuva'): "+zodisAtbulai("Lietuva")+"<br>");

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
document.write("3. faktorialas(8): "+faktorialas(8)+"<br>");

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
document.write("4. ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu'): ilgiausias žodis: „"+ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu')[0]+"“, ilgis: "+ilgiausiasZodis('Mano tavo ausys liko pajūry saulėlydžio metu')[1]+" simbolių.<br>");