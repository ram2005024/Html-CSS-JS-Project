let bodyElement=document.querySelector("body");

bodyElement.addEventListener
("mousemove",(event)=>{
let spanElement=document.createElement('span');
bodyElement.appendChild(spanElement);
console.log(event.offsetX);
const xPos=event.offsetX;
const yPos=event.offsetY;
spanElement.style.left=xPos+"px";
spanElement.style.top=yPos+"px";
const size=Math.random()*100;
spanElement.style.height=size+"px";
spanElement.style.width=size+"px";
setTimeout(()=>{
spanElement.remove();
},4000);




})
