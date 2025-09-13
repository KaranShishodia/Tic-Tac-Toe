# Tic-Tac-Toe Game

This repository contains the code for a simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

## Features

- **Classic Gameplay:** Play the traditional 3x3 Tic-Tac-Toe game.
- **Player Turns:** The game alternates turns between 'O' and 'X'.
- **Winner Detection:** Automatically detects and announces the winner.
- **New Game/Reset:** Buttons to start a new game or reset the current one.
- **Simple UI:** A clean and straightforward user interface.

## Files

- `index.html`: The main HTML file that structures the game.
- `style.css`: The CSS file that styles the game board and elements.
- `app.js`: The JavaScript file that handles the game logic, including turns, win conditions, and UI manipulation.

## How to Play

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Click on any empty box to make your move.
4. The game will announce the winner or if it's a draw (not implemented in this version).
5. Use the "New Game" or "Reset Game" buttons to start over.

## Code Structure

### `index.html`
Defines the basic structure of the game board, buttons, and the winner message container.

### `style.css`
Applies styling to the game board, boxes, and buttons to give it a clean and simple look.

### `app.js`
This file contains the core logic:
- **`boxes`**: Selects all the game board buttons.
- **`winPatterns`**: An array of arrays representing all possible winning combinations.
- **`turnO`**: A boolean variable to track whose turn it is.
- **`resetGame()`**: Resets the game state, including clearing the board and making the winner message disappear.
- **`checkWinner()`**: Iterates through `winPatterns` to check for a winning combination after each move.
- **`showWinner(winner)`**: Displays a congratulations message with the winner's symbol.
- **Event Listeners**: Listens for clicks on the game boxes and the reset buttons to trigger game actions.

## Future Improvements<img width="1243" height="814" alt="Screenshot 2025-09-13 093346" src="https://github.com/user-attachments/assets/d5035152-3e5c-48ef-aed7-5acd0b3d32c8" />


- Add a draw condition to handle games where no one wins.
- Implement a single-player mode against an AI opponent.
- Keep track of scores for multiple games.
<img width="768" height="879" alt="Screenshot 2025-09-13 093417" src="https://github.com/user-attachments/assets/954bc225-5348-44e4-b73c-b9e19848e01d" />


<img width="826" height="735" alt="Screenshot 2025-09-13 093455" src="https://github.com/user-attachments/assets/9aec84ad-e460-458d-8f43-61db6092293a" />
