<?php
//session_start();
//error_reporting(0);

$newUserNicknameErr = $newUserScoreErr = $newUserDifficultyErr = "";
$newUserNickname = $newUserScore = $newUserDifficulty = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (empty($_POST["nickname"])) {
        $newUserNicknameErr = "Tytuł jest wymagany";
    } else {
        $newUserNickname = $_POST["nickname"];
    }
    if (empty($_POST["points"])) {
        $newUserScoreErr = "Tytuł jest wymagany";
    } else {
        $newUserScore = $_POST["points"];
    }
    if (empty($_POST["difficulty"])) {
        $newUserDifficultyErr = "";
    } else {
        $newUserDifficulty = $_POST["difficulty"];
    }





    if ($newUserNicknameErr == "" && $newUserScoreErr == "" && $newUserDifficultyErr == "") {
        postInput($newUserNickname, $newUserScore, $newUserDifficulty);
    }
}

function postInput($newUserNickname, $newUserScore, $newUserDifficulty)
{
    require 'DBLogin.php';

    $sql = "INSERT INTO tiwpmemorygame.scoreboard (nickname, score, difficulty) VALUES ('$newUserNickname', '$newUserScore', '$newUserDifficulty')";

    if (mysqli_query($conn, $sql)) {
        mysqli_close($conn);
        //header("location: ../../mainElements/postSuccess.php");
    } else {
        //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        mysqli_close($conn);
        //header("location: ../../mainElements/postFailure.php");
    }
    mysqli_close($conn);


}







?>
