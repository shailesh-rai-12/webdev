//resetting all the inputs 
function reset()
{
    let inputs=document.querySelectorAll('form input[type=text]');
    for(let element of  inputs){
            element.value='';
            element.style.borderColor='';
    }
}


//storing input data to paragraphs
function storeData(){
    let inputs=document.querySelectorAll('form input[type=text]');
    let paragraph,
        parent=document.querySelector('.output-container'),
        div=document.createElement('div');
        div.classList.toggle('saved-content');
        parent.appendChild(div);
        
    for(let element of  inputs){
          paragraph=document.createElement('p');
          paragraph.innerText=element.value;
          div.appendChild(paragraph);
    }
}


//function to check inputs and show message
function checkInput()
{
    let inputs=document.querySelectorAll('form input[type=text]');
    let count=0,flag=false,msg;
   for(let element of inputs)
   {
       //empty input values
       if(element.value=='')
       {
         
            element.style.borderColor='red';
            flag=true;
            count++;
       }else{
            
                element.style.borderColor='green';
            
       }
   }

   //message
   if(flag){
        msg='* '+count+' input boxes are empty fill to submit';
   } else{
         msg='submission successfull';
         storeData();
         reset();
    } 
   document.getElementById('error').innerText=msg;

}

//submit button and reset button
var submitButton=document.getElementById('submit-btn'),
    resetButton=document.getElementById('reset-btn');

//adding click event listeners to submit & reset button
submitButton.addEventListener('click',checkInput);
resetButton.addEventListener('click',reset);