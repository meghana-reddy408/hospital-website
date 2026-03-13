function showPage(page){
let pages=document.querySelectorAll(".page");
pages.forEach(p=>p.classList.remove("active"));
document.getElementById(page).classList.add("active");
window.scrollTo(0,0);
}

function book(){
alert("Appointment Booked Successfully!");
}

function feedback(){
alert("Thank you for your feedback!");
}

function downloadReport(){
alert("Report Downloaded Successfully!");
}

function toggleDark(){
document.body.classList.toggle("dark-mode");
}

function searchDoctor(){
let input=document.getElementById("searchDoctor").value.toLowerCase();
let cards=document.querySelectorAll("#doctors .card");

cards.forEach(card=>{
let text=card.innerText.toLowerCase();
card.parentElement.style.display=text.includes(input)?"block":"none";
});
}

setInterval(()=>{
let now=new Date();
document.getElementById("clock").innerHTML=now.toLocaleTimeString();
},1000);

function animateCounter(id,target){
let count=0;
let interval=setInterval(()=>{
count++;
document.getElementById(id).innerText=count+"+";

if(count>=target){
clearInterval(interval);
}

},20);
}

animateCounter("doctorsCount",150);
animateCounter("bedsCount",500);
animateCounter("deptCount",20);
animateCounter("patientsCount",1000);
