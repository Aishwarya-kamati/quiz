const question =[
    {
      que:"which of the following is a markup language?",
      a:'HTML',
      b:"CSS",
      c:"Javascript" ,
       d:"php",
      correct: "a",
    } ,
    {
      que: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      que: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
]
let index=0;
let totle=question.length;
let right=0;
let wrong=0;
let que_boxEl=document.getElementById("que_box");
let inputboxEl=document.querySelectorAll(".inputbox");
const loadscript=()=>{
 if(index==totle){
  return endquiz();
 }
  
  let data=question[index];

  que_boxEl.innerHTML=` ${index+1}) ${data.que}`;
  inputboxEl[0].nextElementSibling.innerHTML=data.a;
  inputboxEl[1].nextElementSibling.innerHTML=data.b;
  inputboxEl[2].nextElementSibling.innerHTML=data.c;
  inputboxEl[3].nextElementSibling.innerHTML=data.d;
 

}
loadscript();

let submition=()=>{
  let data=question[index];
     let ans=getans();
       if(ans==data.correct){
           right++;
       }
       else{
        wrong++;
       }
       index++;
     
      loadscript();
      reset();
      return;
}

let answer;
const getans=()=>{
  inputboxEl.forEach((input)=>{
     if(input.checked){
      answer= input.value;
     }
  });
  return answer;
}
const reset=()=>{
  inputboxEl.forEach((input)=>{
     input.checked=false;
 });
}
const endquiz=()=>{
  document.getElementById("box").innerHTML=`
   <div style=text-align:center>
  <h3>Thank you playing the Quiz.</h3>
  <h2>${right}/${totle}</h2>
  </div>
  `
  
   
}




