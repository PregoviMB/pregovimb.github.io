<footer id="footer">
	<div class="container">
		<ul class="icons">
			<li><a href="https://twitter.com/pregovimb" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
			<li><a href="https://www.facebook.com/pregovimb" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
			<li><a href="https://www.instagram.com/pregovi_mb/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
			<li><a href="mailto:pregovimb@gmail.com" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
		</ul>
	</div>
	<div class="">
		<a href="?lang=fr" class="lang <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'fr' ){echo 'active'; } ?>">Français</a> | 
		<a href="?lang=en" class="lang <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'en' ){echo 'active'; } ?>">English</a> | 
		<a href="?lang=es" class="lang <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'es' ){echo 'active'; } ?>">Español</a> | 
		<a href="?lang=ru" class="lang <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ru' ){echo 'active'; } ?>">Русский</a> | 
		<a href="?lang=ki" class="lang <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] == 'ki' ){echo 'active'; } ?>">Kituba</a>
	</div>
	
	<div class="copyright">
		Copyright &copy; PregoviMB 2017 | <?= $footer["copyright"][$_SESSION["lang"]]; ?>
	</div>
</footer>