//function functionName(somePerameter){---}
//function myFunction(msg){
  //  console.log(msg);

//};
//myFunction("Hello");

//let val = sum(3,4);

//const arrsum = (a,b)=>{
   // console.log(a+b);
 //};

 //arrayName.forEach((val) =>{ statement })

 //console.dir(window.document);
//console.dir(document);

//let header = document.getElementById('head');
//console.log(header);

//let firstEl = document.querySelector("p");
//console.dir(firstEl);

// let firstEl = document.querySelector("p");
// console.dir(firstEl.tagName);

let btn1 = document.querySelector("#btn1");

// btn1.onclick = ()=>{
//     console.log("Button was clicked");
//     let a = 1;
//     a++;
//     console.log(a);
// }

// btn1.addEventListener("click",()=>{
//     console.log("button clicked");
// })
let modeBtn = document.querySelector("mode");
let currMode = "Light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "Light"){
        currMode= "Dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="Light";
        document.querySelector("body").style.backgroundColor="white"; 
    }
    console.log(currMode);
})