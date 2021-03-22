<?php
//session_start();
//error_reporting(0);

$difficultyErr = "";
$difficulty = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (empty($_POST["difficulty"])) {
        $difficultyErr = "Brak poziomu trudnosci";
    } else {
        $difficulty = $_POST["difficulty"];
    }

    if ($difficultyErr == "") {
        postInput($difficulty);
    }
}


function postInput($difficulty){

    require 'DBLogin.php';

    $scoreboardTable = "<table id='scoreBoard'><thead><tr><th>Nickname</th><th>Score</th></tr></thead><tbody>";
    $sql = "SELECT nickname, score FROM tiwpmemorygame.scoreboard WHERE difficulty = '$difficulty' ORDER BY score ASC LIMIT 10";

    $resultdb = mysqli_query($conn, $sql);

    if (mysqli_num_rows($resultdb) > 0) {
        while($row = mysqli_fetch_assoc($resultdb)) {

            $scoreboardTable .= "<tr>";
            $scoreboardTable .= "<td>" . $row["nickname"] . "</td>";
            $scoreboardTable .= "<td>" . $row["score"] . "</td>";
            $scoreboardTable .= "</tr>";

        }
    }
    mysqli_close($conn);
    $scoreboardTable .= "</tbody></table>";

    //$return_arr[] = array("rettable" => $scoreboardTable);
    //echo json_encode($return_arr);


    echo json_encode($scoreboardTable);
    //return $scoreboardTable;
}

























?>