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
		firstName: "Dave",
		age: 23,
		skills: ["HTML", "CSS"],
		pocket: {
			left: ["docs", "food"],
			right: ["keys", "snikers"],
		},
	},
	{
		firstName: "Jack",
		age: 23,
		skills: ["JS"],
		pocket: {
			left: ["lighter", "cigarettes"],
			right: ["rat", "cheese"],
		},
	},
];

//! group[0].pocket.left.concat(group[0].pocket.right)

//! group.includes('includes')



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
//! *************    2     ************

//! Рабочая
let age = 0;
let sumAge = group.reduce(
	(accumulator, currentValue) => accumulator + currentValue.age,
	0
);
console.log(sumAge);

//! Рабочая

function addAge(group) {
	for (let i = 0; i < group.length; i++) {
		age += group[i].age;
	}
	return age;
}
console.log(addAge(group));

//! *************************************

//function knowsJS(group) {
//	let knowledge = [];
//	for(let i =0; i < group.length; i++){
//		let studentJS = group[i].skills 
//		let studentsName = group[i].firstName
//		if(group[i].skills == "JS") {
//					knowledge += studentsName; 
//				}
//		console.log(studentJS);
//		for(let n = 0; n < studentJS; n++) {
//			if(studentJS[n] == "JS") {
//				console.log(studentJS);
//				knowledge += studentsName; 
//			}

//		}
//	}
//	console.log([knowledge] ,knowledge); ;
//}
//console.log(knowsJS(group));


//let results = arr.filter(function(item, index, group) {
//let knowsJS = [];
//let item = group[index];
//if(item.skills == "JS"){
//	knowsJS.concat(item.firstName);
//}
//return item.skills == "JS";
//});
//console.log(results(group));




// function dkkej(arr){

//		let usersJS = arr.filter(item => item.skills == "JS" );
// return usersJS;
// }
//	console.log(dkkej(group));
//function popular(par) {
//	let n = 0;
//	for(let i = 0; i <par.skills.length; i++) {
//		if(group.skills[i] == "JS"){
//			n += 1;
//		}
//		return n;
//	}
//}
//	console.log(popular(group));



// let usersKnowsJS = group.filter (function(group) {
//	return group.skills[i] == "JS";
// });

//?

//console.log(group.includes(group[2].skills = "CSS"));
//let anotherGroup = group.flat(Infinity);
//console.log(anotherGroup);

//! *****************     3       *********************
//!   Рабочая
let result = group.map(({ firstName, skills }) => `${firstName}, ${skills}`)
console.log(result);
let knowsJS = '';
let doesNotKnowJS = '';
for (let i = 0; i < result.length; i++) {
	if (result[i].indexOf("JS") >= 0) {
		knowsJS += result[i].slice(0, 4) + "  knows JS, ";
	} else {
		doesNotKnowJS += result[i].slice(0, 4) + " doesn't know JS, ";
	}

}

let knowsCSS = '';
for (let i = 0; i < result.length; i++) {
	if (result[i].indexOf("CSS") >= 0) {
		knowsCSS += result[i].slice(0, 4) + "  knows CSS, ";
	}

}
console.log(knowsJS);
console.log(doesNotKnowJS);
console.log(knowsCSS);

//! ********************************************************
//let whoKnowsJS = [];
//for (let i = 0; i < result.length; i++) {
//	for (let j = 1; j < result[i].length; j++) {
//		if (result[i][j] = "JS") {
//			whoKnowsJS[i] = result[i][0];
//		}
//	}

//}
//console.log(whoKnowsJS);

//let usersKnowsJS = result.filter((element, i) => {
//	console.log(element[i] == "JS")
//})
//console.log(usersKnowsJS);
//console.log(Array.isArray(result));
//console.log(result.length);


//let whereIsLighter =group.map(({firstName, left, right})=>`${firstName} + ${left} + ${right}`);
//console.log(whereIsLighter);
//! ******************     1          *****************
let leftPocket = [];
for (let i = 0; i < group.length; i++) {
	leftPocket = leftPocket.concat(group[i].pocket.left.slice(0, 2));
}
console.log(leftPocket);
let rightPocket = [];
for (let i = 0; i < group.length; i++) {
	rightPocket = rightPocket.concat(group[i].pocket.right.slice(0, 2));
}
console.log(rightPocket);
let bigPocket = leftPocket.concat(rightPocket);
console.log(bigPocket);
for (let i = 0; i < bigPocket.length; i++) {
	if (bigPocket[i].indexOf("lighter") >= 0) {
		console.log("good sheet");
	}
}