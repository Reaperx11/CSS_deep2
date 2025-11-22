function disableScroll() {
  window.addEventListener("wheel", prevent, { passive: false });
  window.addEventListener("touchmove", prevent, { passive: false });
  window.addEventListener("keydown", preventKeys, { passive: false });
}

function prevent(event) {
	event.preventDefault();
    debugger
    const hand = document.querySelector(".playground .hand")
    hand.style.top = (hand.y + event.wheelDeltaY ) + 'px'
}

function preventKeys(e) {
	const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
	if (keys.includes(e.code)) e.preventDefault();
}

disableScroll();
