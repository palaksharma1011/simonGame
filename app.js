let gameSeq=[];
let userseq=[];

let started=false;
let level=0;

let body=document.querySelector("body");

let btns=["red", "yellow", "blue", "yellowgreen"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started!");
        started=true;
        levelUp();
    }
})
function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}

let h3=document.querySelector("h3");
h3.classList.add("textlevel");
function levelUp(){
    userseq=[];
    level++;
    h3.innerText=`LEVEL ${level}`;

    let ranIdx=Math.floor(Math.random()*4);
    let ranColor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${ranColor}`);
    console.log(ranIdx);
    console.log(ranColor);
    console.log(ranbtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnflash(ranbtn);
    // body.style.backgroundColor="green";
    // setTimeout(function(){
    //     body.style.backgroundColor="rgb(46, 3, 3)";
    // },100)

}
function checkans(idx){
    if(userseq[idx]==gameSeq[idx]){
        console.log("same value");
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        console.log("wrong");
        h3.innerHTML=`Game Over! <b>your score was ${level}</b> <br>
        press any key to start again....`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="rgb(46, 3, 3)";
        },500)
        reset();
    }
}

function btnpress(event){
    console.log("button was pressed");
    console.log(this);
    let btn=this;
    let col=btn.getAttribute("id");
    userseq.push(col);
    console.log(userseq);
    btnflash(btn);
    checkans(userseq.length-1);
}

let buttons=document.querySelectorAll(".box");

for(bt of buttons){
    bt.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}