let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset-btn")
let newGamebtn = document.querySelector("#newgame")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true //player x , playr o

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
        const resetGame =()=>{
               turnO = true;
               enableBoxes()
               msgContainer.classList.add("hide")
        }
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnO){     //player o turn
             box.innerText = "O";
             turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        } 
        box.disabled = true;
        checkWinner();
    });
});
        const disabledBoxes = ()=>{
             for(let box of boxes){
                box.disabled = true;
             }
        }

        const enableBoxes = ()=>{
            for(let box of boxes){
               box.disabled = false;
               box.innerText = "";
            }
       }
       const showWinner =(winner)=>{
            msg.innerText = `congratulations,winner is ${winner}`;
            msgContainer.classList.remove("hide");
            disabledBoxes()
       }

const checkWinner = () => {
       for(let patterns of winPatterns ){
        let pstn1val = boxes[patterns[0]].innerText;
        let pstn2val = boxes[patterns[1]].innerText;
        let pstn3val = boxes[patterns[2]].innerText;

        if(pstn1val!="" && pstn2val!="" && pstn3val!=""){
            if(pstn1val==pstn2val && pstn2val==pstn3val){
                // console.log("winner" , pstn1val)
                showWinner(pstn1val)
            }
        }
       }

       
}
newGamebtn.addEventListener("click",resetGame)
reset_btn.addEventListener("click",resetGame)
