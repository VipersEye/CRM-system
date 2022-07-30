<?php
    $id = $_POST["order_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "DELETE FROM order_parts WHERE order_id = $id");
    mysqli_query($connection, "DELETE FROM crm_order WHERE order_id = $id");
    echo  $id;
?>