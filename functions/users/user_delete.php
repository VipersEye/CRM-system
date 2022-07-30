<?php
    $id = $_POST["user_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "DELETE FROM user WHERE user_id = $id");
    echo  $id;
?>