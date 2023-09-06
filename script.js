var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

//JSON objet
//let listeExperience = [{"idExperience":"1","date":"2023-03-18","heureDepart":"10:30","heureArrive":"12:20","distance":"18","meteo":"1","manoeuvre":"3","trajet":["1","2"]},{"idExperience":"2","date":"2023-04-02","heureDepart":"9:00","heureArrive":"10:30","distance":"14","meteo":"3","manoeuvre":"2","trajet":["3","4","5"]},{"idExperience":"3","date":"2023-04-20","heureDepart":"15:50","heureArrive":"16:45","distance":"15","meteo":"1","manoeuvre":"2","trajet":["1"]}];
let listeMeteo = [{"idMeteo":"1","condition":"ensoleille"},{"idMeteo":"2","condition":"nuageux"},{"idMeteo":"3","condition":"pluvieux"},{"idMeteo":"4","condition":"venteux"},{"idMeteo":"5","condition":"neigeux"}];
let listeManouevre = [{"idManoeuvre":"1","description":"Arret et freinage de precision"},{"idManoeuvre":"2","description":"Marche arriere en ligne droite"},{"idManoeuvre":"3","description":"Marche arriere en courbe"},{"idManoeuvre":"4","description":"Se garer en creneau"},{"idManoeuvre":"5","description":"Rangement en epi"},{"idManoeuvre":"6","description":"stationnement en bataille avant"},{"idManoeuvre":"7","description":"stationnement en bataille arriere"}];
let listeTrajet = [{"idTrajet":"1","trajet":"chemin"},{"idTrajet":"2","trajet":"rue"},{"idTrajet":"3","trajet":"route"},{"idTrajet":"4","trajet":"autoroute"},{"idTrajet":"5","trajet":"peripherique"}];

// create radio meteo
var span = document.createElement("sapn");
span.innerHTML = "Choisir le Meteo"
span.htmlFor = "meteo";
span.className = "champ1";
var br = document.createElement("br");
document.getElementById('fieldset').appendChild(span).appendChild(br);
     
for (const item of listeMeteo)
{
    var input = document.createElement("input");
    input.type = 'radio';
    input.value = item.idMeteo;
    input.id = "radio" + item.idMeteo;
    input.name = "meteo";
    input.className = "meteo";
    var label = document.createElement("label");
    label.innerText = item.condition.charAt(0).toUpperCase() + item.condition.slice(1);
    label.htmlFor = input.id;
    input.addEventListener('change', () => {
        Object.keys(listeMeteo).forEach(key => {
            listeMeteo[key] = false;
        })
        
        item.key = true;
    });

    label.appendChild(input);
    document.getElementById('fieldset').appendChild(label);
}


// create liste deroulante manoeuvre
var select = document.createElement("select");
select.name = "manoeuvre";
     
for (const item of listeManouevre)
{
    var option = document.createElement("option");
    option.value = item.idManoeuvre;
    option.text = item.description.charAt(0).toUpperCase() + item.description.slice(1);
    select.appendChild(option);
}

    var span = document.createElement("span");
    span.innerHTML = "Manoeuvre particuliere"
    span.htmlFor = "manoeuvre";
    span.className = "champ1";

    var br = document.createElement("br");
    var br2 = document.createElement("br");
    document.getElementById("fieldset").appendChild(br);
    document.getElementById("fieldset").appendChild(span);
    document.getElementById("fieldset").appendChild(br2);
    document.getElementById("fieldset").appendChild(select);


//create checkbox trajet
var span = document.createElement("sapn");
span.innerHTML = "Trajet"
span.htmlFor = "trajet";
span.className = "champ1";
var br3 = document.createElement("br");
var br4 = document.createElement("br");
document.getElementById('fieldset').appendChild(br3)
document.getElementById('fieldset').appendChild(span).appendChild(br4);
         
for (const item of listeTrajet)
{
    var input = document.createElement("input");
    input.type = 'checkbox';
    input.value = item.idTrajet;
    input.id = "check" + item.idTrajet;
    input.className = "checkbox";
    input.name = "check[]";
    var label = document.createElement("label");
    label.innerText = item.trajet.charAt(0).toUpperCase() + item.trajet.slice(1);
    label.htmlFor = input.id;
    label.appendChild(input);
    document.getElementById('fieldset').appendChild(label);
}

//create autobuttons pour checkbox
const button1 = document.createElement("button");
const button2 = document.createElement("button");
button1.id = "autoButton";
button2.id = "autoButton";
button1.type = "button";
button2.type = "button";
button1.innerText = "All";
button2.innerText = "None";
var br5 = document.createElement("br");
var br6 = document.createElement("br");
document.getElementById('fieldset').appendChild(br5);
document.getElementById('fieldset').appendChild(button1);
document.getElementById('fieldset').appendChild(button2);
document.getElementById('fieldset').appendChild(br6);
//button1.addEventListener("onclick", clickAuto(1));
//button2.addEventListener("onclick", clickAuto(-1));
button1.onclick = () => {
    var CBlist=document.querySelectorAll('input[type="checkbox"]');
    CBlist.forEach(function(item){
        item.checked=true;
        });	
}
button2.onclick = () => {
    var CBlist=document.querySelectorAll('input[type="checkbox"]');
    CBlist.forEach(function(item){
        item.checked=false;
        });	
}



const myForm = document.getElementById('form');
const date = document.getElementById('date');
const departHeure = document.getElementById('depart-heure');
const arriveeHeure = document.getElementById('arrivee-heure');
const distance = document.getElementById('distance');
const meteo = document.querySelector('.meteo');
const trajet = document.querySelector('.checkbox');
const msg = document.querySelector('.msg');
const aside = document.querySelector('#aside');
const btn = document.querySelector('#bouton');


// create button pour redirect page
const experience_button = document.querySelector('#nav-experience');
const records_button = document.querySelector('#nav-records');
const map_button = document.querySelector('#nav-map');
//const graph_button = document.querySelector('#nav-graph');
experience_button.onclick = () => {
    window.location.replace("index.html");
}
records_button.onclick = () => {
    window.location.replace("records.html");
}
map_button.onclick = () => {
    window.location.replace("map.html");
}


//create alert
function alert(e){
    e.preventDefault();
    msg.classList.add('msg');
    msg.innerHTML = 'Veuillez remplir tous les champs';
    setTimeout(() => msg.innerHTML = "", 1000);
    myForm.onsubmit = false;
    console.log(msg)
    
}



//local storage
btn.onclick = (e) => {
    //const temp = JSON.parse(listeExperience);
    e.preventDefault();
    if(date.value === '' || departHeure.value == '' || arriveeHeure.value == '' || distance.value == '' || meteo.value == '' || trajet.value == '') {
        alert(e);
        //document.location.reload();
    } else {
        let experience = new FormData(myForm);
        let obj = Object.fromEntries(experience);
        obj["trajet"] = new Array();
        for(var i=1;i<=5;i++){
            if ($("#check"+i).is(":checked")) {
                obj["trajet"].push(i);
            }
        }
        obj["idExperience"] = obj["code"];
        delete obj["code"];
        delete obj["check[]"];
        let lst = localStorage.getItem("listeExperience");
        lst_text = JSON.parse(lst);
        if (lst_text != null) {
            obj['idExperience'] = lst_text.length+1;
            lst_text.push(obj);
            localStorage.setItem("listeExperience", JSON.stringify(lst_text));
        } else {
            obj['idExperience'] = 1;
            lst_text = new Array;
            lst_text.push(obj);
            localStorage.setItem("listeExperience", JSON.stringify(lst_text));
        }




        /*if (lst_text != null) {
            obj['idExperience'] = lst_text.length+1;
            lst_text.push(obj);
            localStorage.setItem("listeExperience", JSON.stringify(lst_text));
        } else {
            obj['idExperience'] = listeExperience.length+1;
            listeExperience.push(obj);
            localStorage.setItem("listeExperience", JSON.stringify(listeExperience));
        }*/
        document.location.reload();
    }
}

	

