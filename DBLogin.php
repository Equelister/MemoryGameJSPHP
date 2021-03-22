<?php
error_reporting(0);

$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password, "tiwpmemorygame");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>