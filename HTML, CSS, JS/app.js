// Atskiri elementai
// Tamsiai žaliai nuspalvinti h1 tagą;
let temp1 = document.getElementsByTagName("h1")
for (i=0; i<temp1.length; i++) {
    temp1[i].style.color = "darkgreen";
}
// Tagui i pridėti klasę small;
temp1 = document.getElementsByTagName("i")
for (i=0; i<temp1.length; i++) {
    temp1[i].className += "small";
}
// Iš tago h1 pašalinti klasę main;
temp1 = document.getElementsByTagName("h1")
for (i=0; i<temp1.length; i++) {
    temp1[i].classList.remove("main") 
}
// Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
temp1 = document.getElementsByTagName("h2")
temp1[0].classList.remove("main")
temp1[0].classList.add("first")
// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
temp1 = document.querySelector("h2 span")
temp1.style.fontSize = "10px"
temp1.style.backgroundColor = "grey"
//____________________________________________________

// Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// Suskaičiuoti kiek yra h2 tagų;
let temp2 = document.getElementsByTagName("h2")
console.log("Dokumente esančių h2 elementų skaičius: "+temp2.length+".")
// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
let temp22 = document.querySelectorAll("h2.first")
let temp23 = temp2.length - temp22.length 
console.log("Dokumente esančių h2 elementų be klasės „first“ skaičius: "+temp23+".")
// Visus h2 tagus nuspalvinti šviesiai mėlynai
temp2 = document.getElementsByTagName("h2")
for (i=0; i<temp2.length; i++) {
    temp2[i].style.color = "lightblue"
}
// Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
temp2 = document.querySelectorAll("div.prices h2")
for (i=0; i<temp2.length; i++) {
    temp2[i].classList.add("price-tag")
}
// Pabraukti visus tagus su klase new;
temp2 = document.querySelectorAll("*.new")
for (i=0; i<temp2.length; i++) {
    temp2[i].style.textDecoration = "underline"
}
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
temp2 = document.getElementsByTagName("ul")
console.log("Dokumente esančių gyvūnų kategorijų ir žirafų skaičius: "+temp2.length+".")
// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
for (i=0; i<temp2.length; i++) {
    temp2[i].style.border = "2px solid darkorange"
    temp2[i].style.padding = "15px 50px 15px 50px"
}
// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
temp2 = document.querySelectorAll("*.new")
console.log("Dokumente esančių naujų gyvūnų skaičius: "+temp2.length+".")
// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
let temp2newInZirafos = document.querySelectorAll("#zirafos .new")
console.log("Naujų gyvūnų skaičius kategorijoje „Žirafos“: "+temp2newInZirafos.length+".")
let temp2newInPlesrunai = document.querySelectorAll("#plesrunai .new")
console.log("Naujų gyvūnų skaičius kategorijoje „Plėšrūnai“: "+temp2newInPlesrunai.length+".")
let temp2newInGyvates = document.querySelectorAll("#gyvates .new")
console.log("Naujų gyvūnų skaičius kategorijoje „Gyvatės“: "+temp2newInGyvates.length+".")
let temp2newInZoliaedziai = document.querySelectorAll("#zoliaedziai .new")
console.log("Naujų gyvūnų skaičius kategorijoje „Žoliaėdžiai“: "+temp2newInZoliaedziai.length+".")


//____________________________________________________

// Elementų events
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;
let temp3 = document.getElementsByTagName("h1")
let button = document.getElementById("h1-color");
let funkcija1 = () => {
    for (i=0; i<temp3.length; i++) {
    temp3[i].style.color="lightgreen"
    }
}
button.addEventListener("click", funkcija1)

button = document.getElementById("h1-font");
let funkcija2 = () => {
    for (i=0; i<temp3.length; i++) {
    temp3[i].style.fontSize="10px"
    }
}
button.addEventListener("click", funkcija2)
// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
let temp3bold = document.getElementsByTagName("i")
let funkcija3 = () => {
     for (i=0; i<temp3bold.length; i++) {
     temp3bold[i].style.fontWeight="bold"
    }
}
for (i=0; i<temp3bold.length; i++) {
    temp3bold[i].addEventListener("click", funkcija3)
}

// Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
let temp3prices = document.querySelectorAll(".prices")
let funkcija4 = () => {
     for (i=0; i<temp3prices.length; i++) {
     temp3prices[i].style.backgroundColor="grey"
    }
}
for (i=0; i<temp3prices.length; i++) {
    temp3prices[i].addEventListener("click", funkcija4)
}

// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
let temp3Contacts = document.querySelectorAll("#contacts")
let funkcija5 = () => {
     for (i=0; i<temp3Contacts.length; i++) {
     temp3Contacts[i].style.color="orange"
    }
}
for (i=0; i<temp3Contacts.length; i++) {
    temp3Contacts[i].addEventListener("click", funkcija5)
}
// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
temp3Padidinti = document.querySelectorAll("#contacts u")
let funkcija6 = () => {
     for (i=0; i<temp3Contacts.length; i++) {
     temp3Contacts[i].style.fontSize="20px"
    }
}
for (i=0; i<temp3Padidinti.length; i++) {
    temp3Padidinti[i].addEventListener("click", funkcija6)
}
// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
temp3Panaikinti = document.querySelectorAll("#contacts b")
let funkcija7 = () => {
     for (i=0; i<temp3Contacts.length; i++) {
         temp3Contacts[i].style.fontSize=null
         temp3Contacts[i].style.color=null
    }
}
for (i=0; i<temp3Panaikinti.length; i++) {
    temp3Panaikinti[i].addEventListener("click", funkcija7)
}

// Padaryti tai ką liepia mygtukai Header2 sekcijoje;
let temp3back = document.getElementsByTagName("h1")
button = document.getElementById("h1-color-back");
let funkcija8 = () => {
    for (i=0; i<temp3back.length; i++) {
    temp3back[i].style.color=null
    }
}
button.addEventListener("click", funkcija8)

button = document.getElementById("h1-font-back");
let funkcija9 = () => {
    for (i=0; i<temp3back.length; i++) {
    temp3back[i].style.fontSize=null
    }
}
button.addEventListener("click", funkcija9)
//____________________________________________________

// Elementų grupių events
// Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
let temp4 = document.querySelectorAll("ul .new")
let funkcija10 = () => {
    for (i=0; i<temp4.length; i++) {
    temp4[i].style.color="red"
    }
}
for (i=0; i<temp4.length; i++) {
    temp4[i].addEventListener("dblclick", funkcija10)
    }
 

// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
let temp4bigger = document.querySelectorAll("li")
let temp4like = document.querySelectorAll(".like-button")
let funkcija11 = () => {
    for (i=0; i<temp4bigger.length; i++) {
    temp4bigger[i].style.fontSize="130%"
    }
    for (i=0; i<temp4like.length; i++) {
    temp4like[i].style.fontSize=null
    }
}
    for (i=0; i<temp4bigger.length; i++) {
    temp4bigger[i].addEventListener("click", funkcija11)
    }
// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
let temp4sekcija1 = document.querySelector("#zirafos")
let temp4patinka1 = document.querySelector("#zirafos .like-button")
let funkcija12 = () => {
    temp4sekcija1.classList.add("like")
}
temp4patinka1.addEventListener("click", funkcija12)
let temp4sekcija2 = document.querySelector("#zoliaedziai")
let temp4patinka2 = document.querySelector("#zoliaedziai .like-button")
let funkcija13 = () => {
    temp4sekcija2.classList.add("like")
}
temp4patinka2.addEventListener("click", funkcija13)
let temp4sekcija3 = document.querySelector("#plesrunai")
let temp4patinka3 = document.querySelector("#plesrunai .like-button")
let funkcija14 = () => {
    temp4sekcija3.classList.add("like")
}
temp4patinka3.addEventListener("click", funkcija14)
let temp4sekcija4 = document.querySelector("#gyvates")
let temp4patinka4 = document.querySelector("#gyvates .like-button")
let funkcija15 = () => {
    temp4sekcija4.classList.add("like")
}
temp4patinka4.addEventListener("click", funkcija15)
//____________________________________________________

// Dinaminis elementų kūrimas (su createElement)
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
