var characterRef = document.getElementById("character");
var blockRef = document.getElementById("block");

/**
 * Прыгать персонажем
 */
function jump() {
	if (characterRef.classList != "animate") {
		characterRef.classList.add("animate");
	}
	setTimeout(() => {
		characterRef.classList.remove("animate");
	}, 500);
}

var checkDead = setInterval(() => {
	window.getComputedStyle(characterRef).getPropertyValue("top");
}, 10);
