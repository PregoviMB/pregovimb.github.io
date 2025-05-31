<?php 
	session_start();
	header("Content-Type: image/jpeg");
	// Initialisation des variables
		$code = strtoupper(substr(md5(uniqid(rand())), 0, 5));
		$width = 100;
		$height = 25;


		// On stock le code généré dans une variable de session
		$_SESSION['captchaCode'] = $code;

		$image = imagecreate($width, $height);
		$white = imagecolorallocatealpha($image, 255, 255, 255, 0.8);
		$black = imagecolorallocatealpha($image, 0, 0, 0, 1);
		$fontsize = 1500;
		$text = imagestring($image, $fontsize, 25, 5, $code, $black);
		imagejpeg($image, null, 28);


 ?>