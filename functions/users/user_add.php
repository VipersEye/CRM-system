<?php
    $id = $_POST["user_id"];
    $fn = $_POST["user_fn"];
    $sn = $_POST["user_sn"];
    $fd = $_POST["user_fd"];
    $bd = $_POST["user_bd"];
    $phone = $_POST["user_phone"];
    $login = $_POST["user_login"];
    $password = $_POST["user_password"];
    $sale = $_POST["user_sale"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "INSERT INTO user (user_id, user_fn, user_sn, user_fd, user_bd, user_phone, user_login, user_password, user_sale) VALUES ('$id', '$fn', '$sn', '$fd', '$bd', '$phone', '$login', '$password', '$sale')");
    echo '<tr class="row"><td>' . $id . '</td><td>' . $fn . '</td><td>' . $sn . '</td><td>' . $fd . '</td><td>' . $bd . '</td><td>' . $phone . '</td><td>' . $login . '</td><td>' . $password . '</td><td>' . $sale . '%</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
?>