class Human{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;

    }

    getname()
    {
        return this.name;
    }

    setname(newName)
    {
        this.name=newName;
    }
}


class Baby extends Human{
    constructor(name,age){
        super(name,age);
    }

    cry() {
        console.log(this.name,'cryingggg.......');  
    }
}

class Infant extends Baby{
    constructor(name,age)
    {
        super(name,age);
    }

    puke()
    {
        console.log('ooooooaAAAAAhhh.......Enjoy the party');
    }

}

// let baby=new Baby('Sara',1);
// baby.cry();
// console.log(baby.name);

// let infant=new Infant('Bablu',1);
// infant.cry();

// !function(){
//     console.log('IIFE');
// }();

//promises
    /*
        function randomNumber() {
            
            return Math.floor(Math.random()*10);
        }

        let promise = new Promise((resolve,reject)=>{
            if(randomNumber() > 5)
            {
                resolve('Greater')
            }else{
                reject('Smaller')
            }
        });


        promise.then(message=>{
            console.log('Then',message)
        }
        ).catch(message=>{
            console.log('Catch',message);
        })
    */


//call back function
    // const userSleep=false;
    // const userWatch=true;

    // function callbackFunction(callback,errorCallback) 
    // {
    //     if(userSleep)
    //     {
    //         errorCallback({
    //             name:'User slept',
    //             message:'bad user'
    //         })

    //     }else if(userWatch)
    //     {
    //             errorCallback({
    //                 name:'User Watching',
    //                 message:'bad user'
    //             })
    //     }else{
    //             callback({
    //                 message:'good user'
    //             })
    //     }
        
    // }

    // callbackFunction((message)=>{
    //     console.log('success',message.message)
    // },(message)=>{
    //     console.log('failed',message.name,message.message)
    // })
//call back end

//promise conversion
// const userSleep=false;
// const userWatch=false;
// function userPromise()
// {
//     return new Promise((resolve,reject)=>{
//             if(userSleep){
//                 reject({
//                         status:'User slept',
//                         message:'bad user'
//                         });
//             }else if(userWatch){
//                 reject({
//                         status:'User Watching',
//                         message:'bad user'
//                         })
//             } else{
//                 resolve({
//                     status:'User studying',
//                     message:'good user'
//                 })
//             }
//     });
// }

// userPromise().then((msg)=>{
//     console.log(msg.status,msg.message)
// }).catch((msg)=>{
//     console.log(msg.status,msg.message)
// })

console.log('1')
const promise1=new Promise((resolve,reject)=>{
    resolve('promise1 rocks');
});

const promise2=new Promise((resolve,reject)=>{
    resolve('promise2 rocks');
});

const promise3=new Promise((resolve,reject)=>{
    resolve('promise3 sucks');
});

console.log(2)

const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise4 sucks');
    },5000);
   
});
setTimeout(()=>{
    console.log('timeout');
},5000);

Promise.all([promise1,promise2,promise3,promise4])
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

console.log(3)


