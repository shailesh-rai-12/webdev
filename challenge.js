//sum function
var sum=function()
{
    let x=this
    let sum=0
    //console.log(x)
    for(let i=0;i<x.length;i++){
        sum += x[i]
    }
    return sum
}
//adding to prototype
Array.prototype.sum=sum

var a=[1,2,3,4,5]
var b=[2,4,6]
console.log(a.sum());
b.push(8)
console.log(b.sum());