function toggleHide(){
	let btn = document.getElementById('btn');
	let text = document.getElementById('p-text');
	if(text.style.display != 'none'){
		text.style.display = 'none';
	}
	else{
		text.style.display = 'block';
	}
}