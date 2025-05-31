<?php 

	if(!isset($_SESSION['AUTH']) && isset($_COOKIE['mb_user']) && !empty($_COOKIE['mb_user'])){

		$compteVerif = $BDD->prepare("SELECT * FROM mb_users WHERE user_name = ?");

		$compteVerif->execute([htmlspecialchars($_COOKIE['mb_user'])]);

		if ($compteVerif->rowCount() != 1 ) {
			
			header("Location: index.php?mon_compte=pregovi_mb&activity=login");
		}else{

			$user_info = $compteVerif->fetch(PDO::FETCH_OBJ);
			$_SESSION['AUTH'] = [
				"name" =>  $user_info->user_name,
				"email" =>  $user_info->user_mail
			];
		}

	}elseif(!isset($_SESSION['AUTH']) OR empty($_SESSION['AUTH']['name'])){

		header("Location: index.php?mon_compte=pregovi_mb&activity=login");
	}

	require_once "__admin/_admin.vues/acceuil.php";
 ?>