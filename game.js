var cardsImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg",
    "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"];
var cardsInGame = [];
var cardsOutOfTheGame = [];

var numberOfCards = 16;
var scorePoints = 0;
var firstCardRev = false;
var playerNickname = "Player";
var previousRevealedElementID;
var lockedToPlay = false;

$('#board').on('click', function(e) { reveal(e); } );

function startGame(difficultyCardsNumber)
{
    numberOfCards = difficultyCardsNumber;
    document.getElementById("easyButton").disabled = true;
    document.getElementById("mediumButton").disabled = true;
    document.getElementById("hardButton").disabled = true;
    document.getElementById("score").textContent = "Total turns: 0";

    document.getElementById("easyScoresButton").disabled = true;
    document.getElementById("mediumScoresButton").disabled = true;
    document.getElementById("hardScoresButton").disabled = true;

    document.getElementById("resetButton").disabled = false;
    selectCardsAndRandom();
}

function resetGame()
{
    scorePoints = 0;
    firstCardRev = false;
    lockedToPlay = false;
    previousRevealedElementID = "";
    cardsInGame = [];
    cardsOutOfTheGame = [];
    document.getElementById("board").innerHTML = "";
    document.getElementById("easyButton").disabled = false;
    document.getElementById("mediumButton").disabled = false;
    document.getElementById("hardButton").disabled = false;
    document.getElementById("resetButton").disabled = true;
    document.getElementById("easyScoresButton").disabled = false;
    document.getElementById("mediumScoresButton").disabled = false;
    document.getElementById("hardScoresButton").disabled = false;

}

function selectCardsAndRandom()
{
    for(let i = 0; i<numberOfCards; i++)
    {
        let random = Math.floor(Math.random()*cardsImages.length);
        if(cardsInGame.includes(random+".jpg") === false)
        {
            cardsInGame[i] = random+".jpg";
            i++;
            cardsInGame[i] = random+".jpg";
        }else
        {
            i--;
        }
    }
    for(let i = 0; i<cardsInGame.length; i++)
    {
        let random = Math.floor(Math.random()*cardsInGame.length);
        let temp = cardsInGame[i];
        cardsInGame[i] = cardsInGame[random];
        cardsInGame[random] = temp;
    }
    createBoard();
    //console.log(cardsInGame);
}

function createBoard()
{
    let divCreatorStr ="";
    let numberOfRows = Math.sqrt(numberOfCards);
    for (let i = 1; i <= numberOfCards; i++)
    {
        divCreatorStr += '<div class="card" id="'+(i-1)+'"></div>';
        if(i % numberOfRows === 0)
        {
            divCreatorStr += '<br>';
        }
    }
    document.getElementById("board").innerHTML = divCreatorStr;
}

function reveal(element)
{
    if(element.target.id >= 0 && element.target.id <= 36 )
    {
    if(lockedToPlay === false && $('#'+element.target.id).css('opacity') > 0) {
        //console.log(element.target.id);
        let elementID = element.target.id;

        console.log("img/" + cardsInGame[elementID]);

        $("#" + elementID).addClass('cardRev');
        document.getElementById(elementID).style.backgroundImage = "url('img/" + cardsInGame[elementID] + "')";
        $("#" + elementID).css({'transform' : 'rotateX('+ 360 +'deg)'});

        if (firstCardRev === false) {
            firstCardRev = true;
            previousRevealedElementID = elementID;
        } else {
            if(previousRevealedElementID === elementID)
            {
                //do nothing
            }else {
                lockedToPlay = true;
                if (document.getElementById(previousRevealedElementID).style.backgroundImage === document.getElementById(elementID).style.backgroundImage) {
                    setTimeout(function () {
                        hideCards(elementID)
                    }, 1000);
                } else {
                    setTimeout(function () {
                        hideCardsBackIntoTheGame(elementID)
                    }, 1000);
                }
                firstCardRev = false;
                scorePoints++;
                document.getElementById("score").textContent = "Total turns: " + scorePoints;
            }
        }
    }
    }
}

function hideCards(elementID)
{
    $("#"+elementID).addClass('hidden');
    $("#"+previousRevealedElementID).addClass('hidden');

    $("#" + elementID).removeClass('cardRev');
    $("#" + previousRevealedElementID).removeClass('cardRev');

    //$("#"+elementID).css('opacity', 0);
    //$("#"+previousRevealedElementID).css('opacity', 0);
    cardsOutOfTheGame.push(elementID);
    cardsOutOfTheGame.push(previousRevealedElementID);
    if(cardsOutOfTheGame.length >= numberOfCards)
    {
        playerNickname = prompt("Your score is: "+scorePoints+". Please enter your name:", "Player");
        saveScoreToFile();
        saveScoreToDB();
        setTimeout(function () {
            resetGame()
        }, 2000);
    }else {
        lockedToPlay = false;
    }
}

function hideCardsBackIntoTheGame(elementID)
{
    $("#"+elementID).removeClass('cardRev');
    $("#"+previousRevealedElementID).removeClass('cardRev');
    $("#" + elementID).css({'transform' : 'rotateX('+ -360 +'deg)'});
    $("#" + previousRevealedElementID).css({'transform' : 'rotateX('+ -360 +'deg)'});
    document.getElementById(previousRevealedElementID).style.backgroundImage = "url('img/hiddenCard.jpg')"
    document.getElementById(elementID).style.backgroundImage = "url('img/hiddenCard.jpg')"
    lockedToPlay = false;
}

///////////////////////



function saveScoreToFile()
{
    $.ajax({
        url: "saveToFile.php",
        method: "POST",
        dataType: "text/plain",
        ContentType: "charset=utf-8",
        data: {
            "nickname": playerNickname,
            "points":scorePoints.toString(),
            "difficulty": numberOfCards,
        },
    })
}

function saveScoreToDB()
{
    $.ajax({
        url: "saveToDB.php",
        method: "POST",
        dataType: "text/plain",
        ContentType: "charset=utf-8",
        data: {
            "nickname": playerNickname,
            "points": scorePoints,
            "difficulty": numberOfCards,
        },
    })
}

function showTopScoresFromDB(difficultyLVL)
{
    $.ajax({
        url: "getScoreBoardFromDB.php",
        method: "POST",
        //dataType: "text/plain",
        dataType: "JSON",
        ContentType: "charset=utf-8",
        data: {
            "difficulty": difficultyLVL,
        },
        success: (function(result) {
            document.getElementById('board').innerHTML = result;
        }),
    });

}




