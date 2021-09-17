function Rectangle(width,height) {
    this.width=width;
    this.height=height;
    
    
    
}

var rect=new Rectangle(5,6);

console.log(rect.width,rect.height);

// Rectangle.prototype.area=function(){
//     return this.width*this.height;
// }
// //console.log(Rectangle.prototype);

// console.log('area rect',rect.area())


// function Square(len){
//    // Rectangle.call(this,len,len);
//    this.width=this.height=len
    
// }
// //console.log(Square.prototype);
// Square.prototype=Object.create(Rectangle.prototype)
// Square.prototype.constructor=Square


// // var sq=Object.create(Rectangle.prototype)
// // Square.prototype=sq;
// // var sqr=new Square(7);
// // console.log(sqr.area());

// var sq=new Square(7);
// console.log('area sq',sq.area());

// Square.prototype.newArea=function() {
//     return this.width*this.width;
    
// }

// console.log(' Sqaure new Area',sq.newArea());

// //console.log(Rectangle.prototype);
// //console.log(Square.prototype)
// //console.log(sq.height);

// function Rhombus(len) {
//     this.height=this.width=len;
    
// }

// Rhombus.prototype=Object.create(Square.prototype)
// Rhombus.prototype.constructor=Rhombus

// var r=new Rhombus(9);
// console.log('rhombus area',r.area());
// console.log('rhombus new area',r.newArea());