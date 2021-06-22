<?php

//database access data
$servername = "localhost";
$username = "robot";
$password = "*slQacnhU]bE6[WZ";
$dbname = "robot_control_panel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}