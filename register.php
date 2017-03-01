<?php
  require 'database.inc.php';
  $_POST = json_decode(file_get_contents('php://input'), true);
      $name=$_POST['name'];
      $college=$_POST['college'];
      $dept=$_POST['dept'];
      $yr=$_POST['year'];
      $email=$_POST['email'];
      $phone=$_POST['phone'];
      $equery="SELECT * FROM `register` WHERE `email`='$email'";
      $pquery="SELECT * FROM `register` WHERE `phone`='$phone'";
      $equery_run = mysqli_query($conn,$equery);
      $pquery_run = mysqli_query($conn,$pquery);
      if (mysqli_num_rows($equery_run)==0 && mysqli_num_rows($pquery_run)==0 ) {
        $query="INSERT INTO `register` VALUES ('$name','$college','$dept','$yr','$email','$phone')";
        mysqli_query($conn,$query);
        $json  =array('code' => 'i1');
      }else{
        $json  =array('code' => 'i2');
      }
      $jsonstring = json_encode($json);
      echo $jsonstring;
 ?>
