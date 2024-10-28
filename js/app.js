// Скрол для паралакс эфекта
window.addEventListener("scroll", e=> {
    document.body.style.cssText +=`--scrollTop: ${this.scrollY}px`
})

// Плавный скрол мышки
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
