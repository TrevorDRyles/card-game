<?php
	if(isset($_GET['w1']) && isset($_GET['w2']) && isset($_GET['w3'])){
			$nameo = trim($_GET['w1']);
			$time_total = ($_GET['w2']);
			$mode = ($_GET['w3']);
			require_once('C:\xampp\infoWars.php');
			$query = "INSERT INTO highScores (name, time_total, id, num_cards) VALUES (?,?, NULL,?)";
			$stmt = mysqli_prepare($dbc, $query);
			if (!$stmt) {
	die('mysqli error: '.mysqli_error($dbc));
}
			mysqli_stmt_bind_param($stmt, "sii", $nameo, $time_total, $mode);
			mysqli_stmt_execute($stmt);
			$affected_rows = mysqli_stmt_affected_rows($stmt);
			if ($affected_rows == 1){
				mysqli_stmt_close($stmt);
				mysqli_close($dbc);
			}else{
				mysqli_stmt_close($stmt);
				mysqli_close($dbc);
			}
				 header('location:index.php');
		}
	 ?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="script.js">
</script>
</head>
<body id="bg1" class="bg1">
		<div id="Title">Card Game</div> 
		<label id ="label1" for="name1Input">Player 1:</label>
		<input type="text" id="name1Input" name="name1Input" placeholder="Player 1" value="">
		<label id ="label2" for="name2Input">Player 2:</label>
		<input type="text" id="name2Input" name="name2Input" placeholder="Player 2" value="">
		<br>
		<br>
		<div id="HighScore" onclick="document.location.href = 'getInfo.php'">High Scores</div>
		<div id="Rules" onclick="rules()">Rules</div>
		<div id="OnePlayer" 
			onclick="getVal(1)">One Player
		</div>
		<div id="TwoPlayer" onclick="getVal(2)">Two Player</div>
		<div id="new"></div>
		<div id="instructions"></div>
		<div id="backRules" onclick="backRules()"></div>
</body>
</html>

