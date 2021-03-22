<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <link rel="stylesheet" href="styles.css">



</head>
<body>
<div id="top">
    <div id="score">Total turns: 0</div>
    <br>
    <div id="scoreBoardButtons">
        <button id="easyScoresButton" class="customButton" onclick="showTopScoresFromDB(4)">Top Scores Easy!</button>
        <button id="mediumScoresButton" class="customButton" onclick="showTopScoresFromDB(16)">Top Scores Medium!</button>
        <button id="hardScoresButton" class="customButton" onclick="showTopScoresFromDB(36)">Top Scores Hard!</button>
    </div>
    <div id="difficulty">
        <button id="easyButton" class="customButton" onclick="startGame(4)">EASY</button>
        <button id="mediumButton" class="customButton" onclick="startGame(16)">MEDIUM</button>
        <button id="hardButton" class="customButton" onclick="startGame(36)">HARD</button>
    </div>
    <button id="resetButton" class="customButton" onclick="resetGame()" disabled>Reset Game</button>
</div>
<div id="center">
    <div id="board">

    </div>
</div>
<script src="game.js"></script>










</body>
</html>