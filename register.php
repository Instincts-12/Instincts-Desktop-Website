<?php
  require 'database.inc.php';
    if (isset($_GET['empid'])&&(!empty($_GET['empid']))&&isset($_GET['salary'])&&(!empty($_GET['salary']))) {
      $empid=$_GET['empid'];
      $salary=$_GET['salary'];
      $query="SELECT `EmpID` FROM `emp_salary` WHERE `EmpID`='$empid'";
      $query_run=mysql_query($query);
      if (mysql_num_rows($query_run)==0) {
        $query="INSERT INTO `emp_salary` VALUES ('$empid','$salary')";
        mysql_query($query);
        echo "<script>alert('Employee Id added')</script>";
      }else{
        echo "<script>alert('Employee ID already exists.Can\'t add user')</script>";
      }
      // header("Location:admin.php?username=admin");
    }
 ?>
