<!DOCTYPE html>
<html>
<head>
	<title>essaie</title>
	<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="assets/css/main.css" />

<link href="css/owl.carousel.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/magnific-popup.css">
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/requettes.js"></script>
<script src="js/owl.carousel.js"></script>
<script>
	$(document).ready(function() {
		$("#owl-demo").owlCarousel({
			items : 4,
			lazyLoad : true,
			autoPlay : true,
			navigation : true,
			navigationText : ["", ""],
			rewindNav : false,
			scrollPerPage : false,
			pagination : false,
			paginationNumbers : false,
		});
	});
</script>
</head>
<body>
	Mot de passe :
	<input id='password_input' type= 'password'/>
	<input type='button' onClick='checkPassword()' value="j" />
	<div id='reponse_serveur'>
	</div>


			<!-- Scripts -->
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
<script type="text/javascript">

	function checkPassword ()
		{
		var password = document.getElementById('password_input').value;
		var script = 'essaie.v.php';
		var callbackFunction = displayAnswer;
		sendAjaxData(password, script, callbackFunction);
		}

		function sendAjaxData (data, target, callbackFunction)
		{
		var xhr = getXhr();
		xhr.open ('post', target, true);
		xhr.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded;charset=ISO-8859-15');
		xhr.send('ajaxData=' + encodeURIComponent(data));
		xhr.onreadystatechange = function onReceiveData()
		{
		if (xhr.readyState == 4)
		{
		callbackFunction (xhr.responseText);
		}
		}
		}
		function displayAnswer (serverAnswer)
{
var answerDiv = document.getElementById('reponse_serveur');
var msg = '';
switch (serverAnswer)
{
case '0':
msg = 'Password invalide, veuillez recommencer !';
break;
case '1':
msg = 'Password valide ! Bienvenue :)';
break;
}
answerDiv.innerHTML = msg;
}



		/**
* Permet de récupérer un objet XHR selon tout type de navigateur
* @return : XHR object ou null en cas d'échec
*/
function getXhr()
{
if (window.XMLHttpRequest)
return new XMLHttpRequest();
if (window.ActiveXObject)
{
var IeXhr =
[
"Msxml2.XMLHTTP.6.0",
"Msxml2.XMLHTTP.3.0",
"Msxml2.XMLHTTP",
"Microsoft.XMLHTTP"
];
for (var i in IeXhr)
{
try
{
return new ActiveXObject(IeXhr[i]);
}
catch(e)
{}
}
}
// XHR non supporté
return null;
}
xhr = getXhr();
</script>

</body>
</html>