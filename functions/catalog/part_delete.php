<?php
    $id = $_POST["part_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "DELETE FROM autopart WHERE part_id = $id");
    echo  $id;
?>