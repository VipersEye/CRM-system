<?php
    $id = $_POST["part_id"];
    $param = $_POST["param"];
    $value = $_POST["value"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "UPDATE autopart SET $param='$value' WHERE part_id = $id");
    echo $id . '' . $param . '' . $value;
?>