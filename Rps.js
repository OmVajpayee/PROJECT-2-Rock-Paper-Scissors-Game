let uscore = 0;
let cscore = 0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msgg");
const usp=document.querySelector("#user");
const csp=document.querySelector("#compscore");



const gencomp = ()=>{
  const options=["rock","paper","scissors"];
  const ra=Math.floor(Math.random()*3);
  return options[ra];
};
const draw=()=>{
  msg.innerText="Game was drawn!!";
  msg.style.backgroundColor="brown";
};
const show = (win,userchoice,compchoice)=>{
  if(win)
  {
    uscore++;
    usp.innerText = uscore;
    msg.innerText=`You Win!! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }
  else
  {
    cscore++;
    csp.innerText = cscore;
    msg.innerText=`You Lost!! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
  }
};
const playgame = (userchoice) =>{
  const compchoice = gencomp();
  if (userchoice === compchoice) {
    draw();
  }
  else
  {
    let win=true;
    if(userchoice==="rock")
    win=compchoice==="paper"?false:true;
    else if(userchoice==="paper")
    win=compchoice==="scissor"?false:true;
    else
    win=compchoice==="rock"?false:true;
    show(win,userchoice,compchoice);
  }
};
  
choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
  });
});
