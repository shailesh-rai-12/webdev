function Rectangle(width,height) {
    this.width=width;
    this.height=height;
    
}

var rect=new Rectangle(5,6);

console.log(rect.width,rect.height);

Rectangle.prototype.area=function(){
    return this.width*this.height;
}
//console.log(Rectangle.prototype);

console.log('area',rect.area())

function Square(len){
    this.width=this.height=len
}
//console.log(Square.prototype);
Square.prototype=Object.create(Rectangle.prototype)
Square.prototype.constructor=Square

// var sq=Object.create(Rectangle.prototype)
// Square.prototype=sq;
// var sqr=new Square(7);
// console.log(sqr.area());

var sq=new Square(7);
console.log('area sq',sq.area());

//console.log(Rectangle.prototype);
//console.log(Square.prototype)
//console.log(sq.height);