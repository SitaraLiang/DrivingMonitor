/*
script for records

*/


const experience_button = document.querySelector('#nav-experience');
const records_button = document.querySelector('#nav-records');
const map_button = document.querySelector('#nav-map');
experience_button.onclick = () => {
    window.location.replace("index.html");
  }

records_button.onclick = () => {
    window.location.replace("records.html");
  }

map_button.onclick = () => {
    window.location.replace("map.html");
}

let lst = localStorage.getItem("listeExperience");
let lst_text = JSON.parse(lst); 
//onsole.log(lst_text[2]);
if(lst_text!=null) {
  dynamicWriting();
}

/*
function dynamicWriting() {
    let codeHTML = "<table><head><tr><th>Date</th><th>Heure depart</th><th>Heure d'arrivee</th></tr></thead><tbody>";

    lst_text.forEach(function(item, index){
        codeHTML+='<tr>';
        codeHTML+=`<td>${item.date}</td>`;
        console.log(item.date)
        codeHTML+=`<td>${item.heureDepart}</td>`;
        codeHTML+=`<td>${item.heureArrive}</td>`;
        codeHTML+="</tr>";
    });
    codeHTML+="</tbody></table>";
    document.querySelector("article").insertAdjacentHTML("beforeend", codeHTML);

}
*/

function dynamicWriting() {
  let taille = lst_text.length;
  let htmlTable = document.createElement('table');
  let newTR;
  let newTD;
  let newText;
  let newBtn;
  headerList = ["Date", "Heure Depart", "Heure Arrivee", ""]
  htmlTable.classList.add('table');
  htmlTable.id = "table";
  var tr = document.createElement('tr'); // Header row
  for (var j = 0; j < 4; j++) {
      var th = document.createElement('th'); //column
      th.classList.add('th');
      var text = document.createTextNode(headerList[j]); //cell
      th.appendChild(text);
      tr.appendChild(th);
  }
  htmlTable.appendChild(tr);

  for(let i = 0; i<taille;i++) {
      newTR = document.createElement('tr');
      /*
      newTR.onclick = () => {
        window.location.href="show.html?i="+i;
      }
      */
      newTR.classList.add('tr')
      newTD = document.createElement('td');
      newText = document.createTextNode(lst_text[i].date);
      newTD.classList.add('td');
      newTD.appendChild(newText);
      newTR.appendChild(newTD);

      newTD = document.createElement('td');
      newText = document.createTextNode(lst_text[i].heureDepart);
      newTD.classList.add('td');
      newTD.appendChild(newText);
      newTR.appendChild(newTD);
  
      newTD = document.createElement('td');
      newText = document.createTextNode(lst_text[i].heureArrive);
      newTD.classList.add('td');
      newTD.appendChild(newText);
      newTR.appendChild(newTD);

      newTD = document.createElement('td');
      newBtn = document.createElement('button');
      newBtn.id = "btn-detail"
      newBtn.onclick = () => {
        window.location.href="show.html?i="+i;
      }
      newBtn.type = "button";
      newBtn.innerText = "Detail";
      newTD.appendChild(newBtn);

      newBtn = document.createElement('button');
      newBtn.id = "btn-suppr";
      newBtn.onclick = () => {
        lst = localStorage.getItem("listeExperience");
        lst_text = JSON.parse(lst);
        for( var j = 0; j < lst_text.length; j++){ 
          if (lst_text[j].idExperience == i+1) { 
              lst_text.splice(j, 1);
          }
          document.location.reload();       
        }
        localStorage.setItem("listeExperience", JSON.stringify(lst_text));
      }
      newBtn.type = "button";
      newBtn.innerText = "Delete";
      newTD.appendChild(newBtn);

      
      newTR.appendChild(newTD);

/*
      newTD = document.createElement('td');
      newText = document.createTextNode(lst_text[i].distance);
      newTD.classList.add('td');
      newTD.appendChild(newText);
      newTR.appendChild(newTD);
*/
      htmlTable.appendChild(newTR);
  }
  document.querySelector('article').appendChild(htmlTable);
}
