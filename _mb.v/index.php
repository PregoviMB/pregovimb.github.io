<!DOCTYPE HTML>
<html lang="<?= $_SESSION['lang']; ?>">

<head>
	<?php require_once "_mb.c/_head.php"; ?>
</head>

<body class="subpage">
	<!-- Load Facebook SDK for JavaScript -->
	<div id="fb-root"></div>
	<script>
		window.fbAsyncInit = function() {
			FB.init({
				xfbml: true,
				version: 'v9.0'
			});
		};

		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>

	<!-- Your Chat Plugin code -->
	<div class="fb-customerchat" attribution=setup_tool page_id="1202331766531558" theme_color="#ff7e29" logged_in_greeting="Salut! Bienvenue sur mon site web!" logged_out_greeting="Salut! Bienvenue sur mon site web!">
	</div>

	<?php //Header 
	?>
	<?php require_once "_mb.c/_header.php"; ?>

	<?php //Nav 
	?>

	<?php require_once "_mb.c/_menu.php"; ?>

	<!-- Un -->
	<?php require_once "_mb.c/_entete.php"; ?>

	<!-- Deux -->
	<section id="two" class="wrapper style2">
		<div class="inner">
			<?php require_once "_mb.c/_files.php"; //files 
			?>

			<?php require_once "_mb.c/_part.biographie.php"; //Pour la partie bio 
			?>
			<?php require_once "_mb.c/_part.services.php"; //Pour la partie services 
			?>
		</div>
	</section>

	<?php if (isset($erreur) || isset($success)) : ?>
		<div id="show_msg" class="" <?php if (isset($success)) echo 'style="background: #00FF00"; color="#FFF"'; ?>>
			<div id="message_text"><?php if (isset($erreur)) {
										echo $erreur;
									} elseif (isset($success)) {
										echo $success;
									}  ?></div><span onclick="closeMsg()" class="icon fa-close"></span>
		</div>
	<?php endif ?>


	<!-- Trois -->
	<section id="three" class="wrapper style3">
		<div class="inner">
			<div class="row 200%">
				<?php require_once "_mb.c/_contact.contacts.php"; //Pour le formulaire de contact 
				?>
				<?php require_once "_mb.c/_contact.form.php"; //Pour le formulaire de contact 
				?>
			</div>
		</div>
	</section>


	<!-- Footer -->
	<?php require_once "_mb.c/_footer.php"; ?>

	<!-- Scripts -->
	<script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/skel.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
	<script type="text/javascript">
		function closeMsg() {
			document.getElementById('show_msg').style.display = "none";
		}
	</script>

</body>

</html>