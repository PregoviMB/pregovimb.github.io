<div class="6u 12u$(medium)">
	<!-- Form -->
	<h3><?= $form["msg"][$_SESSION["lang"]]; ?></h3>
	<hr>
	<form method="POST" action="">
		<div class="row uniform">
			<div class="6u 12u$(xsmall)">
				<input type="text" name="name" id="name" value="<?php if(isset($_POST['name'])) echo htmlspecialchars($_POST['name']); ?>" placeholder="<?= $form["nom"][$_SESSION["lang"]]; ?>" required readonly />
			</div>
			<div class="6u$ 12u$(xsmall)">
				<input type="email" name="email" id="email" value="<?php if(isset($_POST['email'])) echo htmlspecialchars($_POST['email']); ?>" placeholder="<?= $form["votre_email"][$_SESSION["lang"]]; ?>" required readonly/>
			</div>
			<!-- Break -->
			<div class="12u$">
				<input type="text" name="subject" id="subject" value="<?php if(isset($_POST['subject'])) echo htmlspecialchars($_POST['subject']); ?>" placeholder="<?= $form["objet"][$_SESSION["lang"]]; ?>" required readonly/>
			</div>
			<!-- Break -->
			<div class="12u$">
				<textarea name="message" id="message" placeholder="<?= $form["message"][$_SESSION["lang"]]; ?>" rows="6" required readonly><?php if(isset($_POST['message'])) echo htmlspecialchars($_POST['message']); ?></textarea>
			</div>
			<!-- Break -->
			<div class="6u 12u$(xsmall)">
				<input type="checkbox" id="" name="human" checked>
				<label for="human"><?= $form["robot"][$_SESSION["lang"]]; ?></label>
			</div>
			<div class="6u$ 12u$(xsmall)">
				<span id="code_zone"><img src="_my_captcha.php" id="img" alt="Code" title="<?= $form["robot"][$_SESSION["lang"]]; ?>"></span>
				<label for="refresh" class="lab"><span class="icon fa-refresh"></span></label>
				<input type="submit" id="refresh" class="ref">
			</div>
			<!-- Break -->
			<div class="6u 12u$(xsmall)">
				<input type="text" id="human" name="humanCode" placeholder="<?= $form["code"][$_SESSION["lang"]]; ?>">
			</div>
			<div id="message" class="6u$ 12u$(xsmall)">
				<span class="icon fa-warning"><strong><?= $messages["tous_les_champs"][$_SESSION["lang"]]; ?></strong></span>
			</div>
			<!-- Break -->
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" name="envoyer_msg" value="<?= $form["envoyer"][$_SESSION["lang"]]; ?>" disabled/></li>
					<li><input type="reset" value="<?= $form["annuler"][$_SESSION["lang"]]; ?>" class="alt" /></li>
				</ul>
			</div>
		</div>
	</form>
</div>