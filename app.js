let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};
boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if(box.textContent === ''){
            if(turnO){
                box.textContent = 'O';
                turnO = false;
            } else {
                box.textContent = 'X';
                turnO = true;
            }
        }
        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is: ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;
        if(pos1 != "" && pos2 != "" && pos3 != "" && pos1 === pos2 && pos2 === pos3){
            console.log("Winner is: " + pos1);
            showWinner(pos1);
        }
    }
};
newGameBtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);