let gameSq=[];
let userSq=[];
let level=0;
let btns=["red","yellow","green","purple"];
let started=false;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false)////to check game is started or not
    {
        console.log("Game is Started");
        started=true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash"),250});
   }

   function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash"),250});
   }
function levelup(){
    userSq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSq.push(randColor);
 console.log(gameSq);
// console.log(randColor);
// console.log(randIdx);console.log(randColor);

gameFlash(randBtn);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute('id');
    userSq.push(userColor);
    checkAns(userSq.length-1);
}
  let allbtn=document.querySelectorAll(".btn");
  for(btn of allbtn){
    btn.addEventListener("click",btnPress);
  }
  function checkAns(idx){
    
    if(userSq[idx]===gameSq[idx]){
        if(userSq.length===gameSq.length)
            {
             setTimeout(levelup,1000);
             
            }
    }
 
   else{
  
    
    h2.innerHTML=`Game over !! <u >Your Score was ${level} </u>   <br>Press any key to start`;
    document.querySelector('body').style.backgroundColor="red";
 setTimeout(function(){
    document.querySelector('body').style.backgroundColor="grey";
 },150);

    reset();
    }
  }
  function reset(){
    started=false;
    gameSq=[];
userSq=[];
 level=0;

  }
  