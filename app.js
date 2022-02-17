const btnSendRequest = document.querySelector('#sendRequest');

btnSendRequest.addEventListener('click', sendRequest);

function sendRequest()
{
	/* XMLHttpRequest permite enviar, recibir y pedir datos desde el backend (archivo php) */
	const http = new XMLHttpRequest();

	/* GET - solicitar o pedir datos */
	/* POST - enviar datos, y se envían por medio de la función send() */
	http.open('GET', 'backend.php', true);

	/* Una cabecera es dar más información a la solicitud. En este caso dando el tipo de contenido de solo datos. */
	http.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

	/* onreadystatechange - es un método que ve el estado de la petición al servidor si se esta realizando. */
	http.onreadystatechange = function() {
		/* Ver la respuesta de la solicitud en texto. */
		document.querySelector('#response').innerHTML = http.responseText;
	}

	/* Enviar la petición. */
	http.send();
}