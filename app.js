// const h1  = document.getElementById("h1")
// // document.h1 = "hi from JS";
// console.dir(h1);
// h1.innerText = "Got you !"



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



const h1 = document.querySelector("div.hello:first-child h1"); 


console.dir(h1);

function handleh1Click(){
  h1.classList.toggle("clicked")
   
    
   
}
h1.addEventListener("click", handleh1Click)

// function handleMouseEnter(){
//     h1.innerText =  "mouse is here";
    
// }

// function handleMouseLeave(){
//     h1.innerText = "mouse is gone";
// }

// h1.addEventListener("mouseenter", handleMouseEnter);

// h1.addEventListener("mouseleave",handleMouseLeave)


// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }


// function handleWindowCopy(){
//     alert("copied!")
// }

// function handleWindowOffline(){
//     alert("no wifi !!")
// }

// function handleWindowOnline(){
//     alert (" wifi  connnected!!")
// }

// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);