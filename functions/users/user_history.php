<?php
    $id = $_POST["user_id"];

    $connection = mysqli_connect('localhost', 'root', 'root', 'crmdb');

    $orders = mysqli_query($connection, "SELECT * FROM crm_order JOIN worker ON crm_order.worker_id = worker.worker_id JOIN user ON crm_order.user_id = user.user_id WHERE crm_order.user_id = '$id'");

    while (($ord = mysqli_fetch_assoc($orders))) {
        echo
            '<tr class="row"><td id="order_id">' . $ord['order_id'] .
            '</td><td id="order_status"><select disabled name="' . $ord['order_status'] . '" class="status"><option value="processing">В обработке</option><option value="producting">В производстве</option></select></td><td>'. $ord['order_date'] .
            '</td><td id="worker_id">' . $ord['worker_fn'] . ' ' . $ord['worker_sn'] .
            '</td><td id="order_desc">' . $ord['order_desc'] .
            '</td><td id="user_id">' . $ord['user_fn'] . ' ' . $ord['user_sn'] .
            '</td><td id="order_price">' . $ord['order_price'] . ' RUB</td><td><svg class="remove__icon"><use xlink:href="#remove"></use></svg></td></tr>';
    }
?>