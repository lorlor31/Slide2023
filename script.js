// comment faire pour que qd on est à la 1ère photo, la fleche recule s'affiche en rouge que sur le hover ?
//création d'une classe à attribuer à  l'element recule?

// cmt créer un diaporama sur cette base ?? ?? ??

// le début c'est des essais avec JSON et tableaux 
//et classes parce que je ne vois pas l'utilité pour l'instant

// idée d'a melioration ; faire un eventlistener regroupant les 2boutons avance et recule et faire un  if sellon le bouton appuyé
//pour regrouper les instructions à exécuter / faire une fonction communr aux dernières lignes

const photosTABL= [
    {   "nom" : "Lilas en robe" ,
        "fichier" : "1.jpg",
        "seul" : true } 
        ,
    {   "nom" : "Lilas cuisine" ,
        "fichier" : "2.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas en Sangoku" ,
        "fichier" : "3.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas et le renard" ,
        "fichier" : "4.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas et Mamie Choupie" ,
        "fichier" : "5.jpg",
        "seul" : false } 
        ,
    {    "nom" : "Lilas sourit" ,
        "fichier" : "6.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas pensive" ,
        "fichier" : "7.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas à la crèche - Noël 2022" ,
        "fichier" : "8.jpg",
        "seul" : false } 
        ,
]



let c=0
let click=""
let photoEnCours=photosTABL[c]
const avance=document.getElementById("avance")
const recule=document.getElementById("recule")
const reculeHover=document.querySelector("#recule:hover")
const cadrePhoto=document.getElementById("cadrePhoto")
let photo=document.getElementById("photo")
let img=document.querySelector("img")
let h1=document.querySelector("h1")
let max=(photosTABL.length) -1
let avancerEvent=avance.addEventListener("click", avancer)
let reculerEvent=recule.addEventListener("click", reculer)

function avancer() { 
    c++
    click="right"
    if (c==max ) {
        photo.remove()
        let titreh2=document.getElementById("cadreTitre")
        titreh2.textContent="Et voilà c'est fini !"
        let paragraphe=document.createElement("p")
        paragraphe.setAttribute("id","texteDeFinDiv")
        let texteDeFin=document.createTextNode("C'est la fin du diapo ;)")
        paragraphe.appendChild(texteDeFin)
        document.getElementById("cadrePhoto").appendChild(paragraphe) 
        avance.style.backgroundColor="red"
        
    }
    else if (c>max) {
        avance.style.backgroundColor="red"
    }
    else
    
    { 
    attribuerPhotoEtTitreAAfficher() ;
    }
    console.log(c)
}


function reculer (){ 
    click="left"
    if (c===0) {
        
        photoEnCours=photoEnCours
        recule.classList.add("recule:hover")
        console.log(recule)
    }
    else if (c>=max){
        texteDeFinDiv.remove()
        photo=document.createElement("img")
        photo.setAttribute("id","photo" )
        cadrePhoto.appendChild(photo)
        c=7
        photoEnCours=photosTABL[c]
        let photo_fichier="photos/" +photoEnCours.fichier
        photo.setAttribute("src",photo_fichier )
        let cadreTitre=document.getElementById("cadreTitre")
        cadreTitre.textContent=""
        let titreh2=document.createElement("h2")
        let titrePhoto=document.createTextNode(photoEnCours.nom)
        titreh2.appendChild(titrePhoto)
        document.getElementById("cadreTitre").appendChild(titreh2) 
        avance.style.backgroundColor="#e6e6e6"
        c=c-1 ;
    }
    else
    {c--;
    attribuerPhotoEtTitreAAfficher() ;
    }
    console.log(c)
}

function attribuerPhotoEtTitreAAfficher () {

    photo.remove()
    photo=document.createElement("img")
    if (click=="right" ) {
        photo.style.animation="glisseVersGauche  500ms ease-in"
    }
    else if (click=="left" ) {
        photo.style.animation="glisseVersDroite 500ms ease-in"
    }
    photo.setAttribute("id","photo" )
    cadrePhoto.appendChild(photo)
    photoEnCours=photosTABL[c]
    let photo_fichier="photos/" +photoEnCours.fichier
    photo.setAttribute("src",photo_fichier )
    
    let cadreTitre=document.getElementById("cadreTitre")
    cadreTitre.textContent=""
    let titreh2=document.createElement("h2")
    let titrePhoto=document.createTextNode(photoEnCours.nom)
    titreh2.appendChild(titrePhoto)
    document.getElementById("cadreTitre").appendChild(titreh2) 
    
    //photo.removeAttribute("style")
}

function diaporama () {
    for (let photo of photosTABL) {
        console.log(photo)
        attribuerPhotoEtTitreAAfficher()
    }
}
// Utilisation de variables CSS -Essai
// dans le CSS on crée une variable ans le selecteur root au préalable cf fichier css

let r = document.querySelector(':root');
function fonctionPourVariablesCSS() {
    let rs = getComputedStyle(r);
    alert("The value of --blue is: " + rs.getPropertyValue('--couleur'));
    h1.style.animation="glisseGauche 1000ms"

function myFunction_set() {
        r.style.setProperty('--blue', 'lightblue');
    }
}


// for (let x of photosTABL) {
//     if (x.seul==false) {console.log (x.nom)}
//     else {}
// }

/*
// ?? on ne peut parcourir un JSON en uttilsant les rangs chiffrés  comme un tableau?
// quel est l'interet du JSON par rapport à une classe excepté  le fait que ça soit un standard de communication
// essayer de mettre les photos ds un JSON et parcourir les propriétés--> j'arrive pas avec des chifres
const photosJSON = {

    "photo1": {
    "fichier" : "1.jpg",
    "seul" : true } 
    ,
    "photo2": {    
    "nom" : "2.jpg",
    "seul" : false 
}

}
//*convertir le JSON en objet sinon on peut pas accéder aux propriétés facilement  ??
let photoTEXT=`{
    
    "photo1": {
    "fichier" : "1.jpg",
    "seul" : true } 
    ,
    "photo2": {    
    "nom" : "2.jpg",
    "seul" : false 
    }
}`
let photosOBJ=JSON.parse(photoTEXT)


console.log (photosOBJ[0].fichier)

////////////////

*/