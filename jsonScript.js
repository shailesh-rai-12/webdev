var data;
//ajax request for json file
function readFile(file,callback) {
    var xmlthttp=new XMLHttpRequest();
    xmlthttp.onreadystatechange=function(){
            if(xmlthttp.readyState==4 && xmlthttp.status==200)
            {
                data=callback(this.responseText).songs;
                createSongList(data);
                
            }
    }
    xmlthttp.open("GET",file,true);
    xmlthttp.send(null);
    
}

//reading json 
readFile('jsonData.json',function(text){
    return JSON.parse(text);
});

//song play action
function playSong()
{
    let songObj=data[parseInt(this.id)];
    let titles=["song-name","song-artist","song-duration","song-year"];

    titles.forEach((title,index)=>{
        let element=document.getElementById(title);
        switch(index)
        {
            case 0:
                    element.innerText=songObj.name;
                    break;
            case 1:
                    element.innerText=songObj.artist;
                    break;
            case 2:
                element.innerText=songObj.duration;
                break;

            case 3:
                    element.innerText=songObj.year;
                    break;

        }
    })
    
}

//making song list
function createSongList(data)
{
    let parent=document.getElementById('song-list');
    let listElement,insertedElement;

    data.forEach((element,index) => {
        listElement='<div id="'+index+'" class="bg-warning d-flex justify-content-between p-1 mt-1 rounded"> <div class="fa fa-play-circle"></div>                        <div>'+element.name+'</div>                        <div>'+element.duration+'</div>                    </div>';
        //adding to list
        parent.insertAdjacentHTML("beforeend",listElement);

        //adding click event
        document.getElementById(index).addEventListener("click",playSong);
    });
}


