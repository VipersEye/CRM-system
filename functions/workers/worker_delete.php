<?php
    $id = $_POST["worker_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "DELETE FROM worker WHERE worker_id = $id");
    echo  $id;
?>