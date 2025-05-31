<?php 
if (isset($_POST['envoyer_msg']))
 {
	if (!isset($_POST['name']) || empty($_POST['name']) || !isset($_POST['email']) ||empty($_POST['email']) ||  !isset($_POST['subject']) ||empty($_POST['subject']) ||  !isset($_POST['message']) || empty($_POST['message'])) {
		$erreur = $messages['tous_les_champs'][$_SESSION['lang']] ;
	}
	elseif (!isset($_POST['human'])) {
		$erreur = "Cliquez sur le  checkbox si vous êtes un humain";
	}
	 elseif(isset($_POST['humanCode']) && strtolower($_POST['humanCode']) !== strtolower($_SESSION['captchaCode'])) {
		$erreur = $messages['code_erreur'][$_SESSION['lang']] ;
	}
	elseif (!isset($_POST['humanCode']) || empty($_POST['humanCode'])) {
		$erreur = "Veuillez entrer le code sur l'image";
	}
	elseif (isset($_POST['email']) && !empty($_POST['email']) && !preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['email'])) {
		$erreur = $messages['email_erreur'][$_SESSION['lang']];
	}
	else{
		$success = $messages['success'][$_SESSION['lang']];
	}
}


 ?>