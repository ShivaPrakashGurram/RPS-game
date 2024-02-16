let picks=["rock","paper","scissors"]
let rock= document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissors= document.querySelector("#scissors");
let submit= document.querySelector("button");
let yourPickValue=null;
function botPick(){
    let pick=Math.floor(Math.random()*picks.length);
    return picks[pick];
}
rock.addEventListener("click",()=>{
    yourPickValue="rock";
    rock.classList.add("border");
    paper.classList.remove("border");
    scissors.classList.remove("border");
});
paper.addEventListener("click",()=>{
    yourPickValue="paper";
    paper.classList.add("border");
    rock.classList.remove("border");
    scissors.classList.remove("border");
});
scissors.addEventListener("click",()=>{
    yourPickValue="scissors";
    scissors.classList.add("border");
    rock.classList.remove("border");
    paper.classList.remove("border");
});
submit.addEventListener("click",()=>{
    rock.classList.remove("border");
    paper.classList.remove("border");
    scissors.classList.remove("border");
    let botPickValue=botPick();
    console.log(botPickValue);
    if(yourPickValue==null){
        document.querySelector(".resultBox").textContent="Please pick your move!"
        document.querySelector(".resultBox").classList.remove("red");
        document.querySelector(".resultBox").classList.remove("green");
    }
    else if((yourPickValue=="rock" && botPickValue=="scissors")||(yourPickValue=="paper" && botPickValue=="rock")||(yourPickValue=="scissors" && botPickValue=="paper")){
        let youCount=document.querySelector("#youCount").textContent;
        document.querySelector("#youCount").textContent=parseInt(youCount)+1;
        document.querySelector(".resultBox").textContent=`You won! it's was ${botPickValue}`;
        document.querySelector(".resultBox").classList.add("green");
        document.querySelector(".resultBox").classList.remove("red");
        yourPickValue=null;
    }
    else if(yourPickValue==botPickValue){
        document.querySelector(".resultBox").textContent="it's a draw";
        document.querySelector(".resultBox").classList.remove("red");
        document.querySelector(".resultBox").classList.remove("green");
    }
    else {
        let botCount=document.querySelector("#BotCount").textContent;
        document.querySelector("#BotCount").textContent=parseInt(botCount)+1;
        document.querySelector(".resultBox").textContent=`You lost! it's was ${botPickValue}`
        document.querySelector(".resultBox").classList.add("red");
        document.querySelector(".resultBox").classList.remove("green");
        yourPickValue=null;
    }
});
