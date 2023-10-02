const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#sync");

document.body.setAttribute("data-dark-mode", true);
BUTTON.setAttribute("aria-pressed", true);

const TOGGLE = () => {
	const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
	document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
	BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
