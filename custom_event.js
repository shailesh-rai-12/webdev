const anEvent=new Event('called')

document.getElementById("1").addEventListener('called',(event)=>{
    console.log(event.target);
});


function foo(e) {
    if(e.innerText==="Uno")
        document.getElementById("1").dispatchEvent(anEvent);  
}


