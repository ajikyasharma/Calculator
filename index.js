

 var length= document.querySelectorAll(".button").length;
 var display= document.querySelector(".display");

 for(var i=0;i<length;i++){

    document.querySelectorAll(".button")[i].addEventListener("click", function(){
                 
        
        var InnerHTML = this.innerHTML;
        calculation(InnerHTML);
        buttonAnimation(InnerHTML);
      
     });
 }


 document.addEventListener("keypress", function(event){

     calculation(event.key);
     buttonAnimation(event.key);


 });

 function calculation(text) {

    switch(text){
         case "C":
            display.innerHTML="";
           break;

           case "c":
            display.innerHTML="";
            break;

           case "←":
               if(display.innerText){
               display.innerText = display.innerText.slice(0,-1);
              }
             break;

            

             case "=":
                  try{
                       display.innerText = eval(display.innerText);
                     }
                    catch{
                      display.innerText= "Invalid Expression!";
                     }
             break;

             case "Enter":
                  try{
                       display.innerText = eval(display.innerText);
                     }
                    catch{
                      display.innerText= "Invalid Expression!";
                     }
             break;
        default:
           display.innerHTML += text;


     }

 }

function buttonAnimation(currentkey){

   // var activeButton= querySelector("#"+ currentkey);

   //   activeButton.classList.add("pressed");

   //   setTimeout( function(){
   //      activeButton.classList.remove("pressed");
   //   }, 200);

   var activeButton= document.getElementById("currentkey");

   activeButton.classList.add("pressed");
    
   setTimeout(function () {
       activeButton.classList.remove("pressed");
   }, 200);
}


 document.querySelector(".dark").addEventListener("click", function(){
     
   document.querySelector("body").classList.toggle("bodydark");
   document.querySelector(".container").classList.toggle("containerdark");

   for(var i=0;i<document.querySelectorAll(".button").length ; i++){
            document.querySelectorAll(".button")[i].classList.toggle("buttondark");

 }
     document.querySelector(".display").classList.toggle("displaydark");

     document.querySelector(".heading").classList.toggle("headingdark");
 });




// var display = document.getElementById('display');

// var button = Array.from(document.getElementsByClassName('button'));

// button.map(button=>{
//     button.addEventListener('click', (e) =>{
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText='';
//             break;

//             case '<-':
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0,-1);
//                 }
//             break;

//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 }
//                 catch{
//                     display.innerText='Error!';
//                 }
//             break;

//             default:
//                 display.innerText += e.target.innertext;
//         }
//     });
// });