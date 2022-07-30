<?php
    $id = $_POST["worker_id"];
    $fn = $_POST["worker_fn"];
    $sn = $_POST["worker_sn"];
    $fd = $_POST["worker_fd"];
    $bd = $_POST["worker_bd"];
    $phone = $_POST["worker_phone"];
    $position = $_POST["position"];
    $login = $_POST["worker_login"];
    $password = $_POST["worker_password"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "INSERT INTO worker (worker_id, worker_fn, worker_sn, worker_fd, worker_bd, worker_phone, position, worker_login, worker_password) VALUES ('$id', '$fn', '$sn', '$fd', '$bd', '$phone', '$position', '$login', '$password')");
    echo '<tr class="row"><td>' . $id . '</td><td>' . $fn . '</td><td>' . $sn . '</td><td>' . $fd . '</td><td>' . $bd . '</td><td>' . $phone . '</td><td>' . $position . '</td><td>' . $login . '</td><td>' . $password . '</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
?>