<!DOCTYPE html>
<html lang="fr">
	<head>
        <?php require_once "__admin/_admin.conteneurs/head.php" ?>
        <title>Pregovi MB | Connexion</title>
	    <style type="text/css">
	    	body{background-color: #000; background: url(images/slide02.jpg) no-repeat;background-size: cover; background-attachment: fixed; background-position: center;}
	    </style>
	</head>
	<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                
                <div class="login-panel panel panel-default">
                  
                    <?php if (isset($erreur) && !empty($erreur)): ?>
                          <div class="col-md-12 alert alert-danger">
                            <p><?= $erreur; ?></p>
                        </div>
                    <?php endif ?>

                    <div class="panel-body">
                        <form role="form" method="POST">
                            <fieldset><legend>Conexion</legend>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Email ou Pseudo" name="email" type="email" name="email" required="true" autofocus autocomplete="off">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Mot de passe" name="password" name="password" type="password" required="true">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" name="remember" value="Remember Me">Se souvenir de moi
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <div class="form-group">
                                	<input class="btn btn-block btn-default" type="submit" name="login" value="Se connecter">
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <?php require_once "__admin/_admin.conteneurs/footer.php" ?>

	</body>
</html>
