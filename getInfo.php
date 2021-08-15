<?php
require_once('C:\xampp\infoWars.php');
$query = "SELECT name, time_total, num_cards FROM highScores";
$response = @mysqli_query($dbc, $query);
if($response){
	echo "<div id='Title'>Highscores</div>";
echo "<table height=300 border= 4px solid>
	<tr id='one' align='left'>
		<th><p><b>Time (Seconds)</b></p></th>
		<th><p><b>Num Cards</b></p></th>
		<th><p><b>Name</b></p></th>
	</tr>";
$arr = Array();
$mode = Array();
while($row = mysqli_fetch_array($response)){
$arr[] = [$row['time_total'], $row['num_cards'], $row['name']];
}
sort($arr);
$count = 0;
foreach ($arr as $a){
   echo "<tr>";
   foreach($a as $b ){ 
   	echo "<td <p>$b</p></td>";
	}
	echo '</tr>';
}
echo '</table>';
} else {
  echo "Couldn't issue database query";
  echo mysqli_error($dbc);
}
mysqli_close($dbc);
 ?>
 <!DOCTYPE html>
<html>
<head>
	<script type='text/javascript' src='jquery-3.3.1.js'></script>
	<script>
		$(document).ready(function(){
	$('button').click(function(event){
		window.location="index.php";
	})
});
	</script>
	<style>
/*tr:nth-child(even){
	background-color: #f2f2f2
}*/
#one{

}
table{
	width:1000;
	background-color: #222222;
	margin:auto;
	/*margin-left:150px;
	margin-top:75px;*/
}
tr > td{
	font-size:20px;
	color:white;
	text-align: center;
}
#Title{
	text-align:center;
	color:red;
	font-size:45px;
	position:relative;
}
#button{
	height:100px;width:100px;position:relative;left:650px;
	cursor:pointer;
}
button > p{
 	color:black;font-size:30px;
}
th{
	height:50;
	color:white;
	text-align: center;
}
body{
	background-image: url("cards.jpg");
}
</style>
</head>
<body>
	<button type='button' id='button'>
			<p><b>Back</b></p>
		</button>
</body>
</html>


