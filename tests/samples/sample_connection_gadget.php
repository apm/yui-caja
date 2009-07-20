<?php
header('Content-Type: text/plain');

$url = $_POST['url'];
$query = $_POST['q'];
$yqlReq = $url . '?q=' . urlencode($query) . '&format=json';

$yqlData = json_decode(file_get_contents($yqlReq));
echo json_encode($yqlData);
?>
