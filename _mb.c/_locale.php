<?php 
	$lang_array = ["fr", "en", "ru", "es", "ki"];

	if (isset($_GET['lang']) && in_array($_GET['lang'], $lang_array)) 
	{
		$_SESSION['lang'] = $_GET['lang'];
	}
	else 
	{
		if (empty($_SESSION['lang'])) {
			$_SESSION['lang'] = $lang_array[0];
		}
		
	}


	require_once "_mb.lang/_lang.menu.php";
	require_once "_mb.lang/_lang.bio.php";
	require_once "_mb.lang/_lang.contact.php";
	require_once "_mb.lang/_lang.text.php";
 ?>