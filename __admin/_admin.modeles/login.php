<?php 
	
	/************************************************
				VERIFICATIONDU FORMULAIRE(BACKEND)
	*************************************************/
	if (isset($_POST['login'])) {

		$erreur = "";
		$cible = "";

		if (!isset($_POST['email']) OR empty($_POST['email'])) {
			
			$erreur = "Veuillez Saisir un email";
			$cible = "email";

		}elseif(!isset($_POST['password']) OR empty($_POST['password'])) {

			$erreur = "Veuillez saisir un mot de passe valide!";
			$cible = "password";

		}elseif(!empty($_POST['email']) && !preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['email'])){

			$erreur = "Veuillez saisir un email valide!";
			$cible = "email";

		}else{
			extract($_POST);
			$email = htmlspecialchars($email);
			$password = md5(htmlspecialchars($password));

			$isMB = false;

			$compteVerif = $BDD->prepare("SELECT * FROM mb_users WHERE user_mail = :email AND user_pass = :password");
			$compteVerif->execute([
				"email" => $email,
				"password" => $password
			]);

			if ($compteVerif->rowCount() != 1) {

				$isMB = false;
				$erreur = "Email ou Mot de passe Inorrecte";
				$cible = "email";
				

			} else {

				$isMB = true;
				$user_info = $compteVerif->fetch(PDO::FETCH_OBJ);
				$_SESSION['AUTH'] = [
					"name" =>  $user_info->user_name,
					"email" =>  $user_info->user_mail
				];
				//	Stockage local


				if (isset($_POST['remember'])) {
					//	nous allons créer un cookie
					$expire = time() + 7*24*3600;
                    setcookie('mb_user', $_SESSION['AUTH']['name'], $expire,null,null, false, true);
				}


			}

		}


	}
	if(isset($_SESSION['AUTH']) AND !empty($_SESSION['AUTH']['name'])
			OR isset($_COOKIE['mb_user']) AND !empty($_COOKIE["mb_user"])){
		header("Location: index.php?mon_compte=pregovi_mb&activity=index");
	}

	require_once "__admin/_admin.vues/login.vue.php" ;
 ?>