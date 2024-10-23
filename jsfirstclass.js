function memes(){
    let a = document.querySelector("h1");
    a.innerHTML="NO CLASS TODAY";
    document.querySelector("body").style.background="blue";
    a.style.color="white"
}
function tope(){
    let temi=prompt("what is your name?");
    alert("welcome to my page, ${temi}");
    

}
let temi={
    material:"wooden",
    purpose:"study",
    heightinfeet:4,
    widthinfeet:3.5,
    color:"brown",

}
alert(`i have a ${temi.color} ${temi.material} table for ${temi.purpose} it is ${temi.heightinfeet}feet tall and ${temi.widthinfeet}feet long`)
