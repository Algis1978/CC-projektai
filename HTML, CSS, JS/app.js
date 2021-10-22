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
    if (!temp3prices[i].style.backgroundColor){
    temp3prices[i].style.backgroundColor="grey";}
    else {temp3prices[i].style.backgroundColor=null;}
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
        if (temp3Contacts[i].style.color=="orange") {
            temp3Contacts[i].removeEventListener("click", funkcija5)
        }
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
let temp4ul = document.querySelectorAll("ul")

let funkcija12 = () => {
    for (let i = 0; i<temp4ul.length; i++){
        let temp4patinka = document.querySelectorAll(".like-button")
        let funkcija13 = () => {
            temp4ul[i].classList.add("like")
        }
        temp4patinka[i].addEventListener("click", funkcija13)
    }
}
funkcija12()

//____________________________________________________

// Dinaminis elementų kūrimas (su createElement)
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
let kaina1 =  document.createElement("h2")
kaina1.textContent = "Senjorai tik: 1.99 eur"
let temp5 = document.querySelector(".prices")
temp5.appendChild(kaina1)

// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
let kaina2 =  document.createElement("h2")
kaina2.textContent = "Senjorų grupė iki 10: tik 5.99 eur"
kaina2.classList.add("new")
let funkcija16 = () => {
    kaina2.style.color="lightgreen"
    }
kaina2.addEventListener("click", funkcija16)
temp5.appendChild(kaina2)

// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

temp5 = document.querySelectorAll("ul .like-button")
for (let i=0; i<temp5.length; i++) {
    let nepatinka = document.createElement("li")
    nepatinka.textContent = "NEPATINKA"
    nepatinka.classList.add("not-like")
    temp5[i].insertAdjacentElement('afterend', nepatinka)
}

let temp5ul = document.querySelectorAll("ul")

let funkcija14 = () => {
    for (let i = 0; i<temp5ul.length; i++){
        let temp5nepatinka = document.querySelectorAll(".not-like")
        let funkcija15 = () => {
            temp5ul[i].classList.remove("like")
        }
        temp5nepatinka[i].addEventListener("click", funkcija15)
    }
}
funkcija14()
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
let fieldset = document.createElement("fieldset")
let legend = document.createElement("legend")
legend.textContent = "HEADER3"
let button1 = document.createElement("button")
button1.id = "h1-underline"
button1.textContent = "Pabraukti H1 tagą"
let button2 = document.createElement("button")
button2.id = "h1-no-underline"
button2.textContent = "Nepabraukti H1 tagą"

fieldset.appendChild(legend)
fieldset.appendChild(button1)
fieldset.appendChild(button2)

temp5 = document.querySelector("#contacts")
console.log(temp5)
temp5.insertAdjacentElement('beforebegin', fieldset)

//mygtukų funkcijos
temp5 = document.getElementsByTagName("h1")

button = document.getElementById("h1-underline");
let funkcija17 = () => {
    for (i=0; i<temp5.length; i++) {
    temp5[i].style.textDecoration="underline"
    }
}
button.addEventListener("click", funkcija17)

button = document.getElementById("h1-no-underline");
let funkcija18 = () => {
    for (i=0; i<temp5.length; i++) {
    temp5[i].style.textDecoration="none"
    }
}
button.addEventListener("click", funkcija18)