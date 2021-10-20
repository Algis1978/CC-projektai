// Atskiri elementai
// Tamsiai žaliai nuspalvinti h1 tagą;
let temp = document.getElementsByTagName("h1")
console.log(temp)
for (i=0; i<temp.length; i++) {
    temp[i].style.color = "darkgreen";
}
// Tagui i pridėti klasę small;
temp = document.getElementsByTagName("i")
for (i=0; i<temp.length; i++) {
    temp[i].className += "small";
}
// Iš tago h1 pašalinti klasę main;
temp = document.getElementsByTagName("h1")
for (i=0; i<temp.length; i++) {
    temp[i].classList.remove("main") 
}
console.log(temp)
// Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
temp = document.getElementsByTagName("h2")
temp[0].classList.remove("main")
temp[0].classList.add("first")
console.log(temp[0])
// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
temp = document.querySelector("h2 span")
console.log(temp)
temp.style.fontSize = "10px"
temp.style.backgroundColor = "grey"
// Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// Suskaičiuoti kiek yra h2 tagų;
temp = document.getElementsByTagName("h2")
console.log(temp)
console.log("Dokumente esančių h2 elementų skaičius: "+temp.length+".")
// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
let temp2 = document.querySelectorAll("h2.first")
console.log(temp2)
let temp3 = temp.length - temp2.length 
console.log("Dokumente esančių h2 elementų be klasės „first“ skaičius: "+temp3+".")
// Visus h2 tagus nuspalvinti šviesiai mėlynai
temp = document.getElementsByTagName("h2")
for (i=0; i<temp.length; i++) {
    temp[i].style.color = "lightblue"
}
// Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
temp = document.querySelectorAll("div.prices h2")
console.log(temp)
for (i=0; i<temp.length; i++) {
    temp[i].classList.add("price-tag")
}
console.log(temp)
// Pabraukti visus tagus su klase new;
temp = document.querySelectorAll("*.new")
console.log(temp)
for (i=0; i<temp.length; i++) {
    temp[i].style.textDecoration = "underline"
}
console.log(temp)
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
temp = document.getElementsByTagName("ul")
console.log(temp)
console.log("Dokumente esančių gyvūnų kategorijų ir žirafų skaičius: "+temp.length+".")
// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
for (i=0; i<temp.length; i++) {
    temp[i].style.border = "2px solid darkorange"
    temp[i].style.padding = "15px 50px 15px 50px"
}
// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
temp = document.querySelectorAll("*.new")
console.log("Dokumente esančių naujų gyvūnų skaičius: "+temp.length+".")
// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
temp = document.getElementsByTagName("ul")
let array=[]
for (i=0; i<temp.length; i++){
   console.log(temp[i].children)
    array.push(temp[i].children)
}
console.log(array)
for (i=0; i<array.length; i++){
    for (j=0; j<array[i].length; j++)
    if (array[i][j]==="li.new"){
        console.log(array[i][j])
    }
}
// Elementų events
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;
temp = document.getElementsByTagName("h1")
let button = document.getElementById("h1-color");
let funkcija1 = () => {
    for (i=0; i<temp.length; i++) {
    temp[i].style.color="lightgreen"
    }
}
button.addEventListener("click", funkcija1)

button = document.getElementById("h1-font");
let funkcija2 = () => {
    for (i=0; i<temp.length; i++) {
    temp[i].style.fontSize="10px"
    }
}
button.addEventListener("click", funkcija2)
// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
let tempI = document.getElementsByTagName("i")
let funkcija3 = () => {
     for (i=0; i<tempI.length; i++) {
     tempI[i].style.fontWeight="bold"
    }
}
for (i=0; i<tempI.length; i++) {
    tempI[i].addEventListener("click", funkcija3)
}

// Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
let tempPrices = document.querySelectorAll(".prices")
let funkcija4 = () => {
     for (i=0; i<tempPrices.length; i++) {
     tempPrices[i].style.backgroundColor="grey"
    }
}
for (i=0; i<tempPrices.length; i++) {
    tempPrices[i].addEventListener("click", funkcija4)
}

// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
let tempContacts = document.querySelectorAll("#contacts")
let funkcija5 = () => {
     for (i=0; i<tempContacts.length; i++) {
     tempContacts[i].style.color="orange"
    }
}
for (i=0; i<tempContacts.length; i++) {
    tempContacts[i].addEventListener("click", funkcija5)
    console.log(tempContacts[i])
}
// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
tempPadidinti = document.querySelectorAll("#contacts u")
let funkcija6 = () => {
     for (i=0; i<tempContacts.length; i++) {
     tempContacts[i].style.fontSize="20px"
    }
}
for (i=0; i<tempPadidinti.length; i++) {
    tempPadidinti[i].addEventListener("click", funkcija6)
    console.log(tempPadidinti[i])
}
// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
tempPanaikinti = document.querySelectorAll("#contacts b")
let funkcija7 = () => {
     for (i=0; i<tempContacts.length; i++) {
         tempContacts[i].style.fontSize=null
         tempContacts[i].style.color=null
    }
}
for (i=0; i<tempPanaikinti.length; i++) {
    tempPanaikinti[i].addEventListener("click", funkcija7)
}

// Padaryti tai ką liepia mygtukai Header2 sekcijoje;
temp = document.getElementsByTagName("h1")
button = document.getElementById("h1-color-back");
let funkcija8 = () => {
    for (i=0; i<temp.length; i++) {
    temp[i].style.color=null
    }
}
button.addEventListener("click", funkcija8)

button = document.getElementById("h1-font-back");
let funkcija9 = () => {
    for (i=0; i<temp.length; i++) {
    temp[i].style.fontSize=null
    }
}
button.addEventListener("click", funkcija9)
// Elementų grupių events
// Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
// Dinaminis elementų kūrimas (su createElement)
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
