<?php
    $date = $_POST["review_date"];
    $id = $_POST["user_id"];
    $desc = $_POST["review_desc"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    $review_id = mysqli_query($connection, "SELECT MAX(review_id) as maxid FROM review");
    $r = mysqli_fetch_assoc($review_id);
    $max_id = $r['maxid'] + 1;
    mysqli_query($connection, "INSERT INTO review (review_id, user_id, review_date, review_desc) VALUES ('$max_id', '$id', '$date', '$desc')");
    echo '<tr class="row"><td>' . $max_id . '</td><td>' . $id . '</td><td>' . $date . '</td><td>' . $desc . '</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
?>