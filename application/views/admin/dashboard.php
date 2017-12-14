<?php
	echo $_SESSION['id'];
	if(!isset($_SESSION['id']))
		header("location:http://localhost/git/lead/index.php/login/login");
?>