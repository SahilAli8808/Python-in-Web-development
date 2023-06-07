document.addEventListener("DOMContentLoaded", function() {
  // Make a request to the server to get the message
  fetch("/message")
    .then(response => response.text())
    .then(message => {
      // Update the message in the HTML
      const messageElement = document.getElementById("message");
      messageElement.textContent = message;
    });
});
