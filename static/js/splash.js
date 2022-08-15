let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', ()=>{
	setTimeout(()=>{
		logSpan.forEach((span,idx)=>{
			setTimeout(()=>{
				span.classList.add('active');
			}, (idx+1)*400)
		})

		setTimeout(()=>{
			logSpan.forEach((span,idx)=>{
				setTimeout(()=>{
					span.classList.remove('active')
					span.classList.add('fade')
				}, (idx+1)*50)
			})
		}, 2000)

		setTimeout(()=>{
			intro.style.top = '-100vh'
		}, 2302)
	})
})
