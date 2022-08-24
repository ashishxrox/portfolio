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
const skills = document.querySelector('.sec-info4')
const sCard1 = document.querySelector('.sCard1')
const sCard2 = document.querySelector('.sCard2')
const sCard3 = document.querySelector('.sCard3')
const sCard4 = document.querySelector('.sCard4')
const d1 = document.querySelector('.d1')
const d2 = document.querySelector('.d2')
const d3 = document.querySelector('.d3')
const d4 = document.querySelector('.d4')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')

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
		skills.classList.remove('appear')
		sCard1.classList.remove('appear')
		sCard2.classList.remove('appear')
		sCard3.classList.remove('appear')
		sCard4.classList.remove('appear')
		d1.classList.remove('add-animate1')
		d2.classList.remove('add-animate2')
		d3.classList.remove('add-animate3')
		d4.classList.remove('add-animate4')
		c1.classList.remove('line-animate')
		c2.classList.remove('line-animate')
		c3.classList.remove('line-animate')
		c4.classList.remove('line-animate')
	}
	else if (Math.ceil(scrolled) >= 1700 && Math.ceil(scrolled) <= 2240){
		works.classList.remove('appear')
		wCard1.classList.remove('appear')
		wCard2.classList.remove('appear')
		skills.classList.add('appear')
		sCard1.classList.add('appear')
		sCard2.classList.add('appear')
		sCard3.classList.add('appear')
		sCard4.classList.add('appear')
		d1.classList.add('add-animate1')
		d2.classList.add('add-animate2')
		d3.classList.add('add-animate3')
		d4.classList.add('add-animate4')
		c1.classList.add('line-animate')
		c2.classList.add('line-animate')
		c3.classList.add('line-animate')
		c4.classList.add('line-animate')
	}
	else if (Math.ceil(scrolled) >= 2240){
		skills.classList.remove('appear')
		sCard1.classList.remove('appear')
		sCard2.classList.remove('appear')
		sCard3.classList.remove('appear')
		sCard4.classList.remove('appear')
		d1.classList.remove('add-animate1')
		d2.classList.remove('add-animate2')
		d3.classList.remove('add-animate3')
		d4.classList.remove('add-animate4')
		c1.classList.remove('line-animate')
		c2.classList.remove('line-animate')
		c3.classList.remove('line-animate')
		c4.classList.remove('line-animate')
	}

});




