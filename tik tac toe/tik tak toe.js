let boxes=document.querySelectorAll(".box"); //targetting box class
let resetgamebtn=document.querySelector("#resetbtn"); //targetting resetbtn id
let newgamebtn =document.querySelector("#newgame"); //targetting newgame id
let msgcontainer =document.querySelector(".msg-container"); //targetting msg-container class
let msg = document.querySelector("#msg"); //targetting #msg id
let gamecontainer = document.querySelector(".game");
let selectX = document.querySelector("#X");
let selectO = document.querySelector("#O");
let turnO = null;

// console.log(turnO);
selectX.addEventListener("click",()=> {
    turnO = false;
    selectX.disabled = true;
    selectO.disabled = true;
    gamecontainer.classList.remove("hide");
    // console.log(turnO);
})
selectO.addEventListener("click",()=> {
    turnO = true;
    selectO.disabled = true;
    selectX.disabled = true;
    gamecontainer.classList.remove("hide");
    // console.log(turnO);
})

  // setting O as default
let count = 0; //apply for draw game

let winpatterns =[ // 3 dimensional array 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = ()=>{   //creating reset function by arrow function
    // trueO = true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
    gamecontainer.classList.add("hide")
    selectO.disabled = false;
    selectX.disabled = false;
}

boxes.forEach((box) =>{                     // applying for each loop
    box.addEventListener("click",() =>{     //adding event listener
        console.log("box was clicked")
        if(turnO){                          // if else condition 
            box.innerText= "O"
            box.style.color = "931F1D"
            turnO = false
            
        }
        else{
            box.innerText = "X"
            box.style.color = "black"
            turnO = true
        }
        box.disabled = true;
        count++;
        console.log(count)

        let iswinner = checkwinner();

        if (count === 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw= () => {                         //creating gamedraw function by arrow function
    trueO = true;
    msg.innerText = " game  is Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const disableboxes = () =>{                     //creating disabledboxes function by arrow function
    trueO = true;
    for (let box of boxes){ 
        box.disabled = true ;
    }
}

const enableboxes = () =>{                      //creating enaabledboxes function by arrow function
    for (let box of boxes){ 
        box.disabled = false ;
        box.innerText = "";
    }
}

const showwinner = (winner) => {                //creating showwinner function by arrow function
    msg.innerText = `Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner=()=>{                         //creating checkwinner function by arrow function                      
    for(let pattern of winpatterns){            // usage of for of loop
        let pos1val = boxes[pattern[0]].innerText;     //giving variable to each pattern of array
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val !=""){      // checking the condition if it is true then winner will be shown
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
                return true;
            }  
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);