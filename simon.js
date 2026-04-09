let gameSeq = [];
let userSeq = [];
let rand = ["b1","b2","b3","b4"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keydown", function(event){
    if(started == false){
        started = true ;
        console.log("game has started");

        levelUp();
    }
   
})
function levelUp(){
    level++;
    h2.innerText = "Level "+ level;

    //random choose
    let random = Math.floor(Math.random()*4);
    let clr = rand[random];
    let randBtn = document.querySelector("#" + clr);
    gameSeq.push(clr);
   
    flash(randBtn);
    
}
function flash(btn){
btn.classList.add("flash");
setTimeout( function(){
    btn.classList.remove("flash")
},200)
}
function btnPress() {
    userSeq.push(this.id);   // FIX
    flash(this);
    check();
}

let allBtns = document.querySelectorAll(".btn");
for(let i = 0 ; i < allBtns.length ; i++){
    allBtns[i].addEventListener("click",btnPress);
} 
function check (){
    let idx = userSeq.length - 1;

    if(userSeq[idx] === gameSeq[idx]){
        
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 500);
            userSeq = [];
        }

    } else {
        redo();
        h2.innerText = "Game Over! Your Score was " + level + " press any key to start";
        reset();
        
    }
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
function redo(){
    let body = document.querySelector("body");
    body.classList.add("redo")
    setTimeout( function(){
        
        body.classList.remove("redo");
    },500);
}
