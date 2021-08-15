  <?php
  require('index.php');
  if(isset($_POST['submit'])){
    $data_missing = array();
    if(empty($_POST['name1Input'])){
      $data_missing[] = 'Name';
    }else{
      $nameo = trim($_POST['name1Input']);
    }
    if(empty($data_missing)){
      require_once('C:\xampp\infoWars.php');
      $query = "INSERT INTO highScores (name, time_total, id) VALUES (?,15, NULL)";
      $stmt = mysqli_prepare($dbc, $query);
      mysqli_stmt_bind_param($stmt, "s", $nameo);
      mysqli_stmt_execute($stmt);
      $affected_rows = mysqli_stmt_affected_rows($stmt);
      if ($affected_rows == 1){
        mysqli_stmt_close($stmt);
        mysqli_close($dbc);
      }else{
        mysqli_stmt_close($stmt);
        mysqli_close($dbc);
      }
    }
  }
   ?>
