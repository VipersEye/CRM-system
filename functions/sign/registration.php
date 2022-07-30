<?php
    $fn = $_POST["user_fn"];
    $sn = $_POST["user_sn"];
    $fd = $_POST["user_fd"];
    $bd = $_POST["user_bd"];
    $phone = $_POST["user_phone"];
    $login = $_POST["user_login"];
    $password = $_POST["user_password"];


    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    $user_id = mysqli_query($connection, "SELECT MAX(user_id) as maxid FROM user");
    $u = mysqli_fetch_assoc($user_id);
    $max_id = $u['maxid'] + 1;
    mysqli_query($connection, "INSERT INTO user (user_id, user_fn, user_sn, user_fd, user_bd, user_phone, user_login, user_password, user_sale) VALUES ('$max_id', '$fn', '$sn', '$fd', '$bd', '$phone', '$login', '$password', '0')");
    setcookie('role', "user", time() + 3600, "/");
    setcookie('user', $max_id, time() + 3600, "/");
    echo $max_id . ' ' . $fn . ' ' . $sn . ' ' . $fd . ' ' . $bd . ' ' . $phone . ' ' . $login . ' ' . $password;
?>