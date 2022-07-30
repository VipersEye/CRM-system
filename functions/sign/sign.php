<?php
    $login = $_POST["login"];
    $password = $_POST["password"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    $worker = mysqli_query($connection, "SELECT * FROM worker WHERE worker_login = '$login' AND worker_password = '$password'");
    $w = mysqli_fetch_assoc($worker);
    $user = mysqli_query($connection, "SELECT * FROM user WHERE user_login = '$login' AND user_password = '$password'");
    $u = mysqli_fetch_assoc($user);

    if ($w['worker_login'] == $login && $w['worker_password'] == $password) {
        echo 'sotr';
        setcookie('role', $w['position'], time() + 3600, "/");
    }

    else if ($u['user_login'] == $login && $u['user_password'] == $password) {
        echo 'user';
        setcookie('role', "user", time() + 3600, "/");
        setcookie('user', $u['user_id'], time() + 3600, "/");
    }

    else {
        echo 'error';
    }
    
    
?>