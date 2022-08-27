
const btn = document.querySelector('.btn')
const nav = document.querySelector('.nav')
document.getElementById('btn').onclick = function() {hamBtn()};

function hamBtn(){
	if(btn.classList.contains('ham-btn')){
		btn.classList.remove('ham-btn');
		nav.classList.remove('sticky');
	}
	else{
		btn.classList.add('ham-btn');
		nav.classList.add('sticky');
	}
}