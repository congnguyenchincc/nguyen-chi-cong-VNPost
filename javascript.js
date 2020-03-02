function move() {
	var elem = document.getElementById('sibar');
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == 10) {
			clearInterval(id);
			} else {
			pos++;
			elem.style.left = pos + "px";
			console.log(elem.style.left)
			};

	}
}