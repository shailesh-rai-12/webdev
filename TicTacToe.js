//counter
function Counter(){
    let count=1;
    //closure
    function clicked()
    {
        //console.log(count);
        return count++;
    }

    return clicked;
}

var click = Counter();
var counterValue;
const max=9;
var x_array=[],
    o_array=[],
    win_array=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];


//when a tile is clicked
function tileClicked() {
    console.log(document.getElementById('cpu').checked,counterValue);

    //if already clicked
    if(!this.hasChildNodes() )
    {
        //increase counter
        counterValue=click();
        //check valid counter value
        if (counterValue < 10) 
        {
            let tile=this;
            let span=document.createElement('span'),
                comment=document.getElementById('comment');
            
                //first player
            if(counterValue % 2==1)
            {
                
                span.classList.add('fa','fa-times');
                tile.append(span); 
                //appending moves
                x_array.push(parseInt(tile.getAttribute('value')));
                if(isWinner(counterValue))
                {
                    alert('Player-1 is winner!');
                    reset();
                    return;
                }

                    //cpu
                    if(document.getElementById('cpu').checked && counterValue<9)
                    {   
                        let decision=cpuDecision();
                        console.log('descision',decision);
                        let decideTile=document.getElementById(decision);
                        span=document.createElement('span');
                        span.classList.add('fa','fa-circle-o');
                        decideTile.append(span);
                        o_array.push(decision);
                        if(isWinner(counterValue))
                        {
                            alert('CPU is winner!');
                            reset();
                            return;
                        }
                        click();
                        comment.innerText='Player-1 turn';

                    }else{
                        comment.innerText='Player-2 turn';
                    }
                    
                   
            }else
            {
               
                     //for second player
                    span.classList.add('fa','fa-circle-o');
                    tile.append(span); 
                    //appending moves
                    o_array.push(parseInt(tile.getAttribute('value')));
                    if(isWinner(counterValue))
                    {
                        alert('Player-2 is winner!');
                        reset();
                        return;
                    }
                
              
                     comment.innerText='Player-1 turn';
            }           
        }
         else 
        {
            alert('Resetting board');
            reset();  
        }   

        //game draw condition
        if(counterValue==9)
            alert('Game Draw');
    }else
    {
        if(counterValue >= 9){
           
            reset();
        }
        console.log('already clicked',counterValue);
    }
  
}

//all the elements of one array exist in another or not
let checker=(arrSource,arrTarget)=>arrTarget.every(arrayTargetElement => arrSource.includes(arrayTargetElement));

//check win or not
function isWinner(player)
{
    let flag=false;
    if(player % 2==1)
    {
        win_array.forEach((subarray)=>{
           if(checker(x_array,subarray)){
            flag=true;
           }      
           
        });

        //cpu winning
        if(document.getElementById('cpu').checked){
            win_array.forEach((subarray)=>{
                if(checker(o_array,subarray)){
                    flag= true;
                }  
             });    
        }
    }else{
        win_array.forEach((subarray)=>{
            if(checker(o_array,subarray)){
                flag= true;
            }  
         });
    }
    return flag;

}

//resetting board
function reset()
{
    let tiles=document.querySelectorAll('.tile');
    tiles.forEach((element)=>{
         if(element.hasChildNodes())
            element.firstChild.remove();
    });
    click=Counter();
    x_array=[];
    o_array=[];
    document.getElementById('comment').innerText='New Game';
}

//possible random value
function randomPossible() {
    let random,
        flag=true;
        while(flag)
        {
            random=Math.floor(9 * Math.random())+1;
            if(!(x_array.includes(random) || o_array.includes(random))){
                console.log(random);
                flag=false;
            }
            
        }

        return random;
    
}


function cpuDecision() {

    //arrays of possible winning
    if (x_array.length >1) 
    {
        let filter1=new Set();
        win_array.forEach((subarray)=>{
            x_array.forEach((xEle)=>{
                if(subarray.includes(xEle)){
                    filter1.add(win_array.indexOf(subarray));
                }
            })
        });

        
       //console.log('filtered',filter1);
       let subA=subarrays();
       let filter2=-1;
       filter1.forEach((index)=>{
            //console.log('index',index);
            subA.forEach((subset)=>{
               if(win_array[index].includes(subset[0]) && win_array[index].includes(subset[1]))
               {
                        filter2=index;
                       //console.log('Array win',index);
                    // console.log(win_array[index]);
               }
            });
       });
       
       
       if(filter2 != -1)
       {

         let result;
              for(let j=0;j<3;j++)
              {
                 if(!x_array.includes(win_array[filter2][j]))
                 {
                      result=win_array[filter2][j];
                 }
              }
            if(!o_array.includes(result))
                    return result;
          
       }

        
    }
        
      return randomPossible();
    
    
}

//subsets of two elements
function subarrays()
{
    let subsets=[]
    for(let i=0;i< x_array.length-1;i++)
    {
        let arr;
        for(let j=i+1;j<x_array.length;j++)
        {
          arr=[];
          arr.push(x_array[i])
          arr.push(x_array[j]);
        }
        subsets.push(arr);

       // console.log(arr);
    }
    //console.log(subsets);
    return subsets;
}

//adding event listeners to tiles
document.querySelectorAll('.tile').forEach((element)=>{
    element.addEventListener('click',tileClicked);
});

//adding event to reset button
var resetButton=document.getElementById('reset');
resetButton.addEventListener('click',reset);
