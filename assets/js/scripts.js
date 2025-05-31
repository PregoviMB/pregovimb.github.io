
function refresh ()
{

	
	var script = '_mb.c/scripts.php';
	var callbackFunction = displayAnswer;
	sendAjaxData(script, callbackFunction);
}

function sendAjaxData (target, callbackFunction)
{
	var xhr = getXhr();
	xhr.open ('post', target, true);
	xhr.send(null);
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
	var answerDiv = document.getElementById('code_zone');
	var img = new Image();
	//img.src= 'h';
	//answerDiv.appendChild(img);
	//alert(serverAnswer);
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