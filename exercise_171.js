function area(angle, radius, PI = 3.14){
return (angle/360)*PI*radius*radius;
}

console.log(area(60, 5, 3.14));
console.log(area(30, 7, 22/7));
console.log(area(45, 2));
