function move() {
	var stt;
	var x=document.getElementById("sibar").querySelectorAll("img");
	var y= document.getElementById("sibar").querySelectorAll("p");
	var i,j;
	if (document.getElementById('sibar').style.left!= 8+"px"){
		stt=false;
	}
	if(stt==false){
	document.getElementById('sibar').style.left= 8+"px";
	for ( i=0; i< x.length; i++){
		x[i].style.float = 'left';
	}
	for ( j = 0; j < y.length; j++) {
			y[j].style.visibility='visible';
	}
	stt = true;
	} else {
		document.getElementById('sibar').style.left= -200+"px";
		for ( i=0;i<x.length;i++){
			for (j = 0; j < y.length;j++) {
				y[j].style.visibility='hidden';
				x[i].style.float = 'right';
			}
		}
	}

}