function sendComment(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const message = document.getElementById("form-message");

  if (!name || !comment) {
    message.textContent = "Por favor completa los campos.";
    return;
  }

  // Esta versión muestra una confirmación local.
  // Para guardar comentarios realmente, conecta este formulario
  // a un servicio/backend desde Webnode.
  message.textContent = `¡Gracias, ${name}! Tu comentario fue preparado para enviarse.`;
  event.target.reset();
}
