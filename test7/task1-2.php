<!DOCTYPE html>
<html>
<body>
<h1>A Dynamic PHP Page</h1>
<h3>Indexed Array</h3>

<?php

$friends = array("Nayem", "Juan", "Raul");
$arrlength = count($friends);

echo "Array length : ";
echo $arrlength;
echo "<br>";
echo next($friends)."<br>";
echo "Index of the current element of the array : ".key($friends)."<br>";
echo reset($friends)."<br>"."<br>";

for($x = 0; $x < $arrlength; $x++) {
  echo $friends[$x];
  echo "<br>";
}
echo "<br>";
?>
<h3>Associative Array</h3>
<?php
$age = array("Nayem"=>"35", "Juan"=>"37", "Raul"=>"43");
foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
<h3>IP Address</h3>
<?php
 $ipaddress = getenv("REMOTE_ADDR") ;
 echo "Your IP Address is " . $ipaddress;
 echo "<br>";
 echo "Your IP Address is ";
 $host = gethostbyaddr($_SERVER["REMOTE_ADDR"]);
 echo $host;
 ?>
</body>
</html>
