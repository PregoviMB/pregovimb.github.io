<?php 
// ini_set("display_errors", 1);

session_start();

$BDD = new PDO('sqlite:_bdd/__mb.db', '', '', array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
));

//require_once "_mb.c/_mazone.php";
require_once "_mb.c/_locale.php";

if (isset($_GET['mon_compte']) && !empty($_GET['mon_compte']) && $_GET['mon_compte'] === "pregovi_mb" && isset($_GET['activity']) && !empty($_GET['activity']) ) 
{
	if (is_file("__admin/_admin.modeles/".strtolower(htmlspecialchars($_GET['activity'])).".php")) 
	{
		require("__admin/_admin.modeles/".strtolower(htmlspecialchars($_GET['activity'])).'.php');
	}
	else
	{

		//header("Location: index.php?mb=erreur&n=404");
	}
}
elseif (isset($_GET['mb']) && !empty($_GET['mb'])) 
{
	if (is_file("_mb.m/".strtolower(htmlspecialchars($_GET['mb'])).".php")) 
	{
		require("_mb.m/".strtolower(htmlspecialchars($_GET['mb'])).'.php');
	}
	else
	{
		header("Location: index.php?mb=erreur&n=404");
	}
}
else
{
	$_GET['dc'] = "accueil";
	// require dirname(__FILE__)."/_mb.m/accueil.php";
	require dirname(__FILE__)."/v2/index.php";
}

 ?>