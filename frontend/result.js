const resultElement = document.getElementById("result");

// Get the function response from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const functionResponse = urlParams.get("response");

// Display the function response on the page
resultElement.textContent = `Function response: ${functionResponse}`;
