let scroller = document.querySelector('.container')
const img = document.querySelector('.about-col-left')
const section = document.querySelector('.sec-info')
const about = document.querySelector('.about-col-right')
const home = document.querySelector('.home')
const title = document.querySelector('.title')
const service = document.querySelector('.sec-info2')
const card1 = document.querySelector('.f-card')
const card2 = document.querySelector('.s-card')
const card3 = document.querySelector('.t-card')
const wCard1 = document.querySelector('.w-card1')
const wCard2 = document.querySelector('.w-card2')
const works = document.querySelector('.sec-info3')

scroller.addEventListener('scroll', ()=>{
	const scrolled = scroller.scrollTop;
	console.log(scrolled)
	if (Math.ceil(scrolled) <= 200){
		home.classList.remove('to-left')
		title.classList.remove('to-top')
	}
	else if (Math.ceil(scrolled) >= 200 && Math.ceil(scrolled)<=300){
		home.classList.add('to-left')
		title.classList.add('to-top')
		img.classList.remove('appear')
		section.classList.remove('appear')
		about.classList.remove('appear')
	}
	else if (Math.ceil(scrolled) > 300 && Math.ceil(scrolled)<=600){
		img.classList.add('appear')
		section.classList.add('appear')
		about.classList.add('appear')
		
	}
	else if (Math.ceil(scrolled) <= 650 && Math.ceil(scrolled) > 400){
		service.classList.remove('appear')
		card1.classList.remove('appear')
		card2.classList.remove('appear')
		card3.classList.remove('appear')
	}
	else if (Math.ceil(scrolled) >= 600 && Math.ceil(scrolled) <= 1100){
		img.classList.remove('appear')
		section.classList.remove('appear')
		about.classList.remove('appear')
		service.classList.add('appear')
		card1.classList.add('appear')
		card2.classList.add('appear')
		card3.classList.add('appear')
		wCard1.classList.remove('appear')
		wCard2.classList.remove('appear')
		works.classList.remove('appear')
	}
	else if (Math.ceil(scrolled) >= 1100 && Math.ceil(scrolled) <= 1700){
		service.classList.remove('appear')
		card1.classList.remove('appear')
		card2.classList.remove('appear')
		card3.classList.remove('appear')
		works.classList.add('appear')
		wCard1.classList.add('appear')
		wCard2.classList.add('appear')
	}
	else if (Math.ceil(scrolled) >= 1700){
		works.classList.remove('appear')
		wCard1.classList.remove('appear')
		wCard2.classList.remove('appear')
	}

});




