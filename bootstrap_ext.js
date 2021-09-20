class Data{
    constructor()
    {
        this.name=''
        this.email=''
        this.time=''
        this.dept=''
        this.comment=''
        
    }
}

//storing data
const data=new Data();

//id_generater
function idGenerator()
{
    let id=1;
    return function(){
        return id++;
    }
}

let uid=idGenerator();


//validating inputs
function validation() {
    let flag=true;

    //first three inputs
    var x=document.querySelectorAll('input.form-control');
    x.forEach((e)=>{
        if(e.value=='')
        {
            e.classList.toggle('alert-danger',true);
            flag=false;
        }else{
            e.classList.toggle('alert-danger',false);
            
            switch (e.getAttribute('name')) {
                case "name":
                            data.name=e.value;
                    break;
                case "email":
                            data.email=e.value;
                    break;
                
                case "time":
                            data.time=e.value;
                    break;
            
                default:
                    break;
            }
        }
    });
    
     //select value
        x=document.querySelector('select.custom-select');
        if(x.value != '')
        {
            data.dept=x.value;
        }
        
            
        //commnet box
        x=document.getElementById('comment')
        if(x.value == '')
        {
             x.classList.toggle('alert-danger',true);
             flag=false;
        }else{
            data.comment=x.value;
            x.classList.toggle('alert-danger',false);
        }


        //message printing
        x=document.getElementById('message-box');
         
        if(flag){
            x.classList.add('d-none')
            x.classList.remove('d-flex'); 
            
        }else{
            x.classList.remove('d-none')
            x.classList.add('d-flex'); 


        }
       
      return flag;  
           
}

function createInfoBox(id)
{
    //unique ids
    let cid='d'+id,
    color='bg-success';

    switch(data.dept)
    {
        case "Backend":
                        color='bg-primary';
            break;
        case "Infra":
                        color='bg-warning';
            break;
        case "Testing":
                        color='bg-danger';
            break;

        case "Support":
                        color='bg-secondary';
                break;

    }

    //division box

   /*
   return data
   <div id="id" class="col-sm-12 bg-success mt-1 p-1 rounded">
        <div class="d-flex flex-row justify-content-between">
            <span>frontend</span>
            <span>Time</span>
            <i id="c_id" class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="bg-white">
            <p class="m-sm-0">Name</p>
            <p class="m-sm-0">Email</p>
            <p class="m-sm-0">Comment</p>  
        </div>
    </div>
    
    */

    return '<div id="'+cid+'" class="col-sm-12 '+color+' mt-1 p-1 rounded">                            <div class="d-flex flex-row justify-content-between">                                <span>'+data.dept+'</span>                                <span>'+data.time+'</span>                                <i id="'+id+'" class="fa fa-times" aria-hidden="true"></i>                            </div>                            <div class="bg-white d-none">                                <p class="m-sm-0">'+data.name+'</p>                                <p class="m-sm-0">'+data.email+'</p>                                <p class="m-sm-0">'+data.comment+'</p>                              </div>                        </div>';

}

//hiding-showing of data
function toggleDivision()
{
    let div=this.lastChild.previousElementSibling;
    div.classList.toggle('d-none')
    div.classList.toggle('d-block')
} 



//close Division
function closeDivision(event)
{
    //handling event bubbling
    event.stopPropagation();
    this.parentElement.parentElement.remove();
}


//clearing form
function clearForm()
{
    //first three inputs
    var x=document.querySelectorAll('input.form-control');
    x.forEach((e)=>{
        e.value='';
    });

    //select value
    x=document.querySelector('select.custom-select');
    x.selectedIndex=0;

    //commnet box
    x=document.getElementById('comment');
    x.value='';
}

//storing data
function storeData() {

    if(validation())
    {
        //creating id
        let id=uid();
        let infoBox=document.getElementById('info-box');
            infoBox.insertAdjacentHTML("beforeend",createInfoBox(id));

            //attaching listener
            let reportHead=document.getElementById('d'+id);
            reportHead.addEventListener('click',toggleDivision);

            //will cause event bubbling
            let close=document.getElementById(id);
            close.addEventListener('click',closeDivision);

            //clearing form
            clearForm();


    }
    
}


const submit=document.getElementById('submit');
submit.addEventListener('click',storeData);

