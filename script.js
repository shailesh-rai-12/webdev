// document.html.style.height="100%"
let body=document.body
body.style.width="100vw"
body.style.height="100vh"
//creating container division
var div=document.createElement('div')
div.classList.toggle('container',true)
body.append(div)

//acessing the container division
var container=document.querySelector('.container')

//styling div container
var con=document.querySelector('.container')
con.style.display='flex'
con.style.flexFlow='column'
con.style.width="100%"
con.style.height="100%"
con.style.justifyContent="center"
con.style.backgroundColor="red"


//automating setting styles
var setStyles = function(elem,styles){
    
    var s;
    for( s in styles){
        elem.style[s]=styles[s]
    }
}


//form container
div=document.createElement('div')
div.classList.toggle('formdiv',true)
con.append(div)
setStyles(div,{"display":"flex","flex-flow":"column warp","justify-content":"center"})

//appending a form
var form=document.createElement("form")
form.setAttribute('method','post')
div.append(form)

div=document.createElement('div')
div.classList.toggle('btndiv',true)
con.append(div)
setStyles(div,{"display":"flex","flex-flow":"row wrap",'justify-content':'center','align-content':'center'})


//Text Buttons
var btndiv=document.createElement('div')
btndiv.classList.toggle('inner-btn-div',true)
setStyles(btndiv,{"display":"flex","flex-flow":"column wrap",'justify-content':'center','align-content':'center'})
div.append(btndiv)

//add button
var but=document.createElement('button')
but.innerText="textAdd"
btndiv.append(but)
but.addEventListener('click',addInput)

//delete button
but=document.createElement('button')
but.innerText='textDel'
btndiv.append(but)
but.addEventListener('click',delInput)

//password Button
btndiv=document.createElement('div')
btndiv.classList.toggle('inner-btn-div',true)
setStyles(btndiv,{"display":"flex","flex-flow":"column wrap",'justify-content':'center','align-content':'center'})
div.append(btndiv)

//add button
var but=document.createElement('button')
but.innerText="passAdd"
btndiv.append(but)
but.addEventListener('click',addInput)

//delete button
but=document.createElement('button')
but.innerText='passDel'
btndiv.append(but)
but.addEventListener('click',delInput)



function addInput()
{
    let type=this.innerText;

    if(type=='textAdd'){
        let inp=document.createElement('input')
        inp.type='text'
        inp.style.display='block'
        inp.style.margin='0.0625rem'
        inp.setAttribute('placeholder','text')
        form.append(inp)
    }
    if(type=='passAdd'){
        let inp=document.createElement('input')
        inp.type='password'
        inp.style.display='block'
        inp.style.margin='0.0625rem'
        //inp.setAttribute('placeholder','text')
        form.append(inp)
    }
    
    // localStorage.setItem('text',inp)
    
    //console.log(this);
}

function delInput()
{
    let type=this.innerText
    if(type=='textDel'){
        let inps=document.querySelectorAll("input[type=text]")
        //let len=inps.length
        //console.log(len);
        for(var i=0;i<inps.length;i++){
            var last=inps[i]
        }
        last.remove()
    }

    if(type=='passDel'){
        let inps=document.querySelectorAll("input[type=password]")
        //let len=inps.length
        //console.log(len);
        for(var i=0;i<inps.length;i++){
            var last=inps[i]
        }
        last.remove()
    }
}

con=document.querySelector('.container')
con.style.setProperty('margin',0)
div=document.createElement('div')
div.classList.toggle('slidediv',true)
setStyles(div,{'position':'absolute','width':'20%','height':'100%','background-color':'green','z-index':'1','display':'flex','flex-direction':'column','transition':'width 2s'})
con.append(div)

// setTimeout(()=>{
//     let sd=document.querySelector('.slidediv')
//     console.log(sd);
//     setStyles(sd,{'width':'0%'})
  
//     console.log("done");
//     console.log(sd);
// },3000);
div=document.createElement('div')
div.classList.toggle('slidebtn',true)
setStyles(div,{'position':'absolute','width':'2%','height':'4%','background-color':'black','top':'3%','z-index':'2','left':'18.5%','transition':'left 2s'})
con.append(div)
div.addEventListener('click',slide)

localStorage.setItem('slideFlag','open')

function slide()
{
    //closing window
    let sw=document.querySelector('.slidediv')
    let sb=document.querySelector('.slidebtn')
    if(localStorage.getItem('slideFlag')=='open'){
        
        setStyles(sw,{'width':'0%'})
        setStyles(sb,{'left':'0.9%'})
        localStorage.setItem('slideFlag','close')
    }else{
        setStyles(sw,{'width':'20%'})
        setStyles(sb,{'left':'18.5%'})
        localStorage.setItem('slideFlag','open')
    }
   

}

//adding menu
div=document.querySelector('.slidediv')
const menu=['About','Home','Create']
menu.forEach(ele => {
    let a=document.createElement('a')
    a.innerHTML=ele
    setStyles(a,{'margin-top':'2%'})
    div.append(a)
});






