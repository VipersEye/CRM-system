<?php
    $id = $_POST["order_id"];
    $dt = $_POST["order_date"];
    $wi = $_POST["worker_id"];
    $n = $_POST["num_parts"];
    
    for ($i=1; $i<=$n; $i++)
    {
        $part[$i] = $_POST["part$i"];
        $num[$i] = $_POST["num$i"];
    }

    $ui = $_POST["user_id"];

    $sum = 0;

    $desc = "";

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');
    mysqli_query($connection, "INSERT INTO crm_order (order_id, order_date, worker_id, user_id) VALUES ('$id', '$dt', '$wi', '$ui')");
    for ($i=1; $i<=$n; $i++)
    {
        $pr = mysqli_query($connection, "SELECT part_name, part_price FROM autopart WHERE part_id = '$part[$i]'");
        $x = mysqli_fetch_assoc($pr);
        $rpr[$i] = $num[$i] * $x['part_price'];
        $sum = $sum + $rpr[$i];
        $desc = $desc . ' ' .  $x['part_name'] . ' ' . $num[$i] . " шт. ";
        mysqli_query($connection, "INSERT INTO order_parts (order_id, part_id, num, retprice) VALUES ('$id', '$part[$i]', '$num[$i]', '$rpr[$i]')");
    }

    $worker = mysqli_query($connection, "SELECT * FROM worker WHERE worker_id = '$wi'");

    $w = mysqli_fetch_assoc($worker);

    $user = mysqli_query($connection, "SELECT * FROM user WHERE user_id = '$ui'");

    $u = mysqli_fetch_assoc($user);

    $sum = $sum - $sum*$u['user_sale']/100;

    mysqli_query($connection, "UPDATE crm_order SET order_desc = '$desc', order_price = '$sum' WHERE order_id = $id");

    echo
        '<tr class="row"><td id="order_id">' . $id .
        '</td><td id="order_status"><select name="Новый" class="status" style="width: 80px; background-color: rgb(135, 193, 79);"><option value="new" selected>Новый</option><option value="processing">В обработке</option><option value="producting">В производстве</option><option value="send">Ожидает отправки</option><option value="complete">Выполнен</option></select></td><td id="order_date">'. $dt .
        '</td><td id="worker_id">' . $w['worker_fn'] . ' ' . $w['worker_sn'] .
        '</td><td id="order_desc">' . $desc .
        '</td><td id="user_id">' . $u['user_fn'] . ' ' . $u['user_sn'] .
        '</td><td id="order_price">' . $sum . ' RUB</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
    
?>

