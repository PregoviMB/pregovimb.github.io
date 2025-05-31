<nav id="menu">
	<ul class="links">
		<li><a href="index.php#header"><?= $menu["accueil"][$_SESSION["lang"]]; ?></a></li>
		<li><a href="index.php#one"><?= $menu["mini_bio"][$_SESSION["lang"]]; ?></a></li>
		<li><a href="index.php#two"><?= $menu["services"][$_SESSION["lang"]]; ?></a></li>
		<li><a href="index.php#three"><?= $menu["contact"][$_SESSION["lang"]]; ?></a></li>
		<li><a href="index.php#footer"><?= $menu["langues"][$_SESSION["lang"]]; ?></a></li>
	</ul>
</nav>