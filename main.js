"use strict"
// 2) Sum of age into the group
// 1) If even one of group have a ligther return "good sheet"
// 3) Divide group on three groups : "Who knows JS" , "Who dont's know JS" , "Who knows CSS"
const group = [
	{
	  firstName: "John",
	  age: 23,
	  skills: ["HTML", "CSS", "JS"],
	  pocket: {
		 left: ["keys", "food"],
		 right: ["docs", "snikers"],
	  },
	},
	{
	  firstName: "John",
	  age: 23,
	  skills: ["HTML", "CSS"],
	  pocket: {
		 left: ["docs", "food"],
		 right: ["keys", "snikers"],
	  },
	},
	{
	  firstName: "John",
	  age: 23,
	  skills: ["JS"],
	  pocket: {
		 left: ["lighter", "cigarettes"],
		 right: ["rat", "cheese"],
	  },
	},
 ];

 group[0].pocket.left.concat(group[0].pocket.right)

 group.includes('includes')



//let isLighter = group.filter(function(elem, i){

//	return elem.pocket[i] === "lighter"

// });
// console.log(isLighter);
//let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
//let searchTerm = 'г. Москва';
//let cityId = cities.find(city => city.name === searchTerm).id
//console.log(cityId);
//let isLighter = group.find(group => group.name === "lighter").pocket[]
//console.log(isLighter);
//!let x = "lighter"
//function isLighter(str){
//	return str === x;
//}
//console.log(group.some(isLighter));
//let NewGroup = group.flat(Infinity);
//console.log(NewGroup);
//let isFind = NewGroup.filter(function(val){
//	return "lighter";
//});
//console.log(isFind);
//console.log(group.indexOf("lighter"));
//let found = group.find(e =>e.name === "lighter");
//console.log(found);

let sumAge = group.reduce(
	(accumulator, currentValue) => accumulator + currentValue.age,
	0
);


let age = 0;
for(let i = 0; i < group.length; i++) {
	return age += group[i].age;
}

group.forEach(element => age += element.age);
group.forEach((element) => {
	return age += element.age
});

group.map(element => age += element.age)

(a,b, c) => {
	//
	return a+b+c;
}

function (a,b,c) {
	//
	this
	return a+b+c;
}