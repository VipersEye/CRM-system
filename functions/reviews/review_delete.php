<?php
    $id = $_POST["review_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "DELETE FROM review WHERE review_id = $id");
    echo  $id;
?>