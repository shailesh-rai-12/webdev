localStorage.setItem('slide','close')
//automating setting styles
var setStyles = function(elem,styles){
    
    var s;
    for( s in styles){
        elem.style[s]=styles[s]
    }
}

//media queries
var breadth='20%';
let mq=window.matchMedia('(max-width:992px)')
if (mq.matches) {
    breadth='36%'
}

mq=window.matchMedia('(max-width:768px)')
if (mq.matches) {
    breadth='50%'
}
//mqT.addEventListener('change',breadthAdjust)

mq=window.matchMedia('(max-width:480px)')
if (mq.matches) {
    breadth='100%'
}


document.getElementById('vc').style.visibility="hidden";

var contentBox=document.querySelector('.content')
var but=document.querySelector('#at')
but.addEventListener('click',addTextItem)

but=document.querySelector('#ac')
but.addEventListener('click',addCommentBox)

but=document.querySelector('#del')
but.addEventListener('click',deleteItem)

but=document.querySelector('#report')
but.addEventListener('click',validateInput)

but=document.querySelector('#nav-btn')
but.addEventListener('click',toggleSlide)

but=document.querySelector('.nav-btn-open')
but.addEventListener('click',toggleSlide)

but=document.querySelector('#submit')
but.addEventListener('click',summary)

but=document.querySelector('.message button')
but.addEventListener('click',closePop)

function addTextItem() {
    let ele=document.createElement('input')
    ele.type='text'
    ele.placeholder='problem'
    ele.classList.toggle('text-single',true)
    setStyles(ele,{'margin':'0.5vh'})
    contentBox.append(ele)

}

function addCommentBox() {
    let ele=document.createElement('textarea')
    ele.classList.toggle('text-comment')
    ele.placeholder='problem comment'
    setStyles(ele,{'margin':'0.5vh'})
    contentBox.append(ele)
    
}

function deleteItem() {
    let ele=document.querySelectorAll('.content > *')
    ele[ele.length-1].remove()
    
}

function validateInput() {
    let input=document.getElementById('reptxt').value
    const op=['bug','frontend','backend','infra']
    if(op.includes(input)){
     
        document.querySelector('.variable-content').style.visibility='visible'
       
        document.querySelector('#reptxt').disabled='disabled'
        document.querySelector('#report').disabled='disabled'


    }else{
        alert('Please choose from Given inputs')
    }
    console.log(input);
    
}

function toggleSlide()
{
    let nc=document.querySelector('.nav-container')
    let at=document.querySelectorAll('a')
    if(localStorage.getItem('slide')=='open')
    {
        setStyles(nc,{'width':'0%'})
        setTimeout(()=>{
            at.forEach(element => {
                setStyles(element,{'visibility':'hidden'});
            });
        },680);
        
        
        localStorage.setItem('slide','close')
    }else{
       // console.log(breadth)
        setStyles(nc,{'width':breadth})
        at.forEach(element => {
            setStyles(element,{'visibility':'visible'});
        });
        
        localStorage.setItem('slide','open')
    }
    

}

function summary() {
    let points=document.querySelectorAll('.content input').length
    let comments=document.querySelectorAll('.content textarea').length

    if(!points==0 || !comments==0){
        let inps=document.querySelectorAll('.content > *')
        let flag=true
        inps.forEach(element => {
            if(element.value=='')
            {
                flag=false
            }
        });

        if(flag)
        {
            let topic=document.querySelector('#reptxt').value
        let msg='Your '+topic+' Report Sucessfully Submitted!'
    
         document.querySelector('.message').style.visibility='visible'

        document.querySelector('.successMsg').innerHTML='<span>'+msg+'</span>';
         document.querySelector('.msg-count').innerHTML='<ul><li>Points-'+points+'</li><li>Comments-'+comments+'</li></ul>'

        }else{
            alert('fill the text fields')
        }
        
        
    }else{
        alert('Atleast add one element')
    }
    
    
}

function closePop() {
    location.reload()
}





