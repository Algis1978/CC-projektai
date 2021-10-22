let nepatinka =  document.createElement("li")
nepatinka.textContent = "NEPATINKA"
let temp5 = document.getElementsByTagName("ul")
console.log(temp5)
for (i=0; i<temp5.length; i++) {
    temp5[i].appendChild(nepatinka)
    console.log(temp5[i])
}