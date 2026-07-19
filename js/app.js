hereimport { db } from "./firebase.js";

import {

ref,

onValue

} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const list=document.getElementById("animeList");

onValue(ref(db,"anime"),snapshot=>{

list.innerHTML="";

snapshot.forEach(item=>{

const anime=item.val();

list.innerHTML+=`

<div class="card">

<img src="${anime.image}" loading="lazy">

<h3>${anime.title}</h3>

<p>${anime.description}</p>

</div>

`;

});

});
