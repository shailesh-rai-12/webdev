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
                comment.innerText='Player-2 turn';
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
        } else 
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

//adding event listeners to tiles
document.querySelectorAll('.tile').forEach((element)=>{
    element.addEventListener('click',tileClicked);
});

//adding event to reset button
var resetButton=document.getElementById('reset');
resetButton.addEventListener('click',reset);
