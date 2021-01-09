const characterRef = document.getElementById("character");
const blockRef = document.getElementById("block");

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
	const characterTop = parseInt(
		window.getComputedStyle(characterRef).getPropertyValue("top")
	);

	const blockLeft = parseInt(
		window.getComputedStyle(blockRef).getPropertyValue("left")
	);

	/*Величины прыжка 50 px вверх прыгает он вверх 
	то есть когда он начинает опускаться его top увеличивается
	поэтому когда он меньше 130 он соприкасается с блоком поэтому и проигрыш
	*/
	if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
		console.dir([characterTop, blockLeft]);
		blockRef.style.animation = "none";
		blockRef.style.display = "none";
		alert("Вы проиграли! Перезапустите игру! You Lose! Reload the game");
	}
}, 10);
