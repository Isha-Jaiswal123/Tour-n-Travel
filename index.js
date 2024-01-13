
let dropdown=document.querySelector(".dropdown-menu");
let show=true;
function run(){
if(show){
    dropdown.style.display="flex";
    show=false;
}else{
    dropdown.style.display="none"; 
    show=true;
}
}

let login=document.querySelector(".login");
let show2=true;
function run2(){
if(show2){
    login.style.display="flex";
    show2=false;
}else{
    login.style.display="none"; 
    show2=true;
}
}

let search=document.querySelector(".search");
let show3=true;
function run3(){
if(show3){
    search.style.display="flex";
    show3=false;
}else{
    search.style.display="none"; 
    show3=true;
}
}

function btn_alert(){
    alert("booked successfully ");
}
