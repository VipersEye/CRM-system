<?php
    $id = $_POST["order_id"];
    $param = $_POST["param"];
    $value = $_POST["value"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "UPDATE crm_order SET $param='$value' WHERE order_id = $id");
    echo $id . '' . $param . '' . $value;
?>