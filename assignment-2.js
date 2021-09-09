localStorage.setItem('slide','close')
//automating setting styles
var setStyles = function(elem,styles){
    
    var s;
    for( s in styles){
        elem.style[s]=styles[s]
    }
}

document.getElementById('vc').style.visibility="hidden";
// c.style.visibilty="hidden"
// console.log(c);
//setStyles(c,{'visibilty':'hidden'})
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
        //console.log('working');
        document.querySelector('.variable-content').style.visibility='visible'
        //setStyles(content,{'visibility':'visible'})
        document.querySelector('#reptxt').disabled='disabled'
        document.querySelector('#report').disabled='disabled'


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
        setStyles(nc,{'width':'20%'})
        at.forEach(element => {
            setStyles(element,{'visibility':'visible'});
        });
        
        localStorage.setItem('slide','open')
    }
    

}



