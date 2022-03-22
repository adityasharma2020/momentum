// const title  = document.getElementById("title")
// // document.title = "hi from JS";
// console.dir(title);
// title.innerText = "Got you !"



// // const age = parseInt(prompt("what is your age ? "));
// // // console.log(age)
// // if(isNaN(age) || age <0){
// //     console.log("wrie a real positve number");
// // }else if(age <18){
// //     console.log("you are too young");
// // }else if(age >18 && age <50){
// //     console.lot("you can drink");
// // }else{
// //     console.log("cant drink");
// // }



// // const calculator ={

// //     add : function(a,b){
// //       alert(a+b);
// //     },
// //     minus : function(a,b){
// //       alert(a-b);
// //     },
// //     mult: function(a,b){
// //       alert(a*b);
// //     },
// //     divide: function(a,b){
// //       alert(a/b);
// //     },
// //     power: function(a,b){
// //       alert(a**b);
// //     }
// // }; 

// // console.log(calculator.add(10,2));
// // calculator.minus(10,2);
// // calculator.mult(10,2);
// // calculator.divide(10,2);
// // calculator.power(10,2);



const title = document.querySelector(".hello:first-child h1"); 


console.dir(title);

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "Blue";
}

function handleMouseEnter(){
    title.innerText =  "mouse is here"
}

function handleMouseLeave(){
    title.innerText = "mouse is gone";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);

title.addEventListener("mouseleave",handleMouseLeave)