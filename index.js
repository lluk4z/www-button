function addUrlParameters() {
	const button = fragmentElement.querySelector("a");

	button.setAttribute('href', button.getAttribute('href') + window.location.search);
}

if (configuration.propagateUrlParameters) {
	addUrlParameters();
}