let clock=document.querySelector("p");
let finale=setInterval(()=>{
    let Todate=new Date();
    clock.innerText=Todate.toLocaleTimeString();
},1000);
console.log(finale);








