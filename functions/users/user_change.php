<?php
    $id = $_POST["user_id"];
    $param = $_POST["param"];
    $value = $_POST["value"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "UPDATE user SET $param='$value' WHERE user_id = $id");
    echo $id . '' . $param . '' . $value;
?>