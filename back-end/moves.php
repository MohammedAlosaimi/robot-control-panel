<?php

include_once "config.php";

$move = $_POST["moves"];

//check if the database have data befor 
$sql = "SELECT * FROM moves WHERE id = 1";
//performe the query
$result = mysqli_query($conn,$sql);
//check the number of rows in the table, if zero, this this the first data insert
$count = mysqli_num_rows($result);


//if database have data before then update. otherwise insert     
if($count == 1) {
    $sql = "UPDATE moves SET move='$move' WHERE id=1";

    if (mysqli_query($conn, $sql)) {
        echo "Record updated successfully (move = " . $move .")";
    } else {
        echo "Error updating record: " . mysqli_error($conn) . " ";
    }
} else{
    $sql = "INSERT INTO moves(move) VALUES ('$move')";

    if(mysqli_query($conn, $sql)){
        echo "Data has been successfully insert into the record (move = " . $move .")";
    } else {
        echo "Error inserting record: ". mysqli_error($conn) . ")";
    }
}
?>