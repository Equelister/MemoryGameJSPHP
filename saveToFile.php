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
    $text = "Gracz - ";
    $text .= $newUserNickname;
    $text .= ", Wynik: " . $newUserScore;
    $text .= ", Trudnosc: " . $newUserDifficulty . "\r\n";

    $myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
    fwrite($myfile, $text);
    fclose($myfile);
}

?>