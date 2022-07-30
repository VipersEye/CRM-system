<?php
    $id = $_POST["part_id"];
    $name = $_POST["part_name"];
    $desc = $_POST["part_desc"];
    $price = $_POST["part_price"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "INSERT INTO autopart (part_id, part_name, part_desc, part_price) VALUES ('$id', '$name', '$desc', '$price')");
    echo '<tr class="row"><td>' . $id . '</td><td>' . $name . '</td><td>' . $desc . '</td><td>' . $price . ' RUB</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
?>