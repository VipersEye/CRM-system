<?php
    $id = $_POST["worker_id"];
    $param = $_POST["param"];
    $value = $_POST["value"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "UPDATE worker SET $param='$value' WHERE worker_id = $id");
    echo $id . '' . $param . '' . $value;
?>