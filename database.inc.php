<?php
  $mysql_host="localhost";
  $mysql_name="root";
  $mysql_password="";
  $mysql_db="registration";
  $conn =  mysqli_connect($mysql_host,$mysql_name,$mysql_password,$mysql_db);
  if(!$conn){
    $json  =array('code' => 'i3');
    die("Couldn't Connect to Localhost");
  }
  // if (!mysql_select_db($mysql_db)) {
  //   // $json  =array('code' => 'i4');
  //   die("Couldn't Connect to Database");
  // }
?>
