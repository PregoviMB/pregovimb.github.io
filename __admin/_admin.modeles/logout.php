<?php 
	
	if (!isset($_SESSION['AUTH']) OR !isset($_COOKIE['mb_user'])) {

		header("Location: index.php?mon_compte=pregovi_mb&activity=login");
	}

	$_SESSION = array();
	session_destroy();

	setcookie('mb_user', '');
	
	header("Location: index.php?mon_compte=pregovi_mb&activity=login");


?>