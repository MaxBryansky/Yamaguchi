const tl = gsap.timeline({ delay: 1, ease: "power2.inOut" });

const laptopScreen = window.matchMedia("(min-width: 700px)")
if (laptopScreen.matches) {
  // Portal
  tl.set(".yamaguchi__portal", {
    yPercent: 200,
    opacity: 0,
    scale: 0.5
  })
  // Girl
  tl.set(".animate__img", {
    yPercent: 50,
    opacity: 0,
    scale: 0.5
  })
  // Slogan
  tl.set(".blockquote", {
    xPercent: -150,
    opacity: 0
  })


  // Portal
  tl.to(".yamaguchi__portal", {
    yPercent: 0,
    duration: 1.5,
    opacity: 1,
    scale: 1.5
  })
  // Girl
  tl.to(".animate__img", {
    yPercent: 0,
    opacity: 0.2,
    scale: 1,
    duration: 1.5,
    rotation: -1
  }, "-=0.6")
  tl.to(".animate__img", {
    opacity: 1,
    x: -5
  })
  tl.to(".animate__img", {
    x: 5
  })
  tl.to(".animate__img", {
    x: -5
  })
  tl.to(".animate__img", {
    x: 5
  })

  // Portal
  tl.to(".yamaguchi__portal", {
    scale: 1.3
  }, "-=0.6")
  tl.to(".yamaguchi__portal", {
    scale: 1
  }, "-=0.6")

  // Girl
  tl.to(".animate__img", {
    x: -5
  })
  tl.to(".animate__img", {
    x: 5
  })

  // Slogan
  tl.to(".blockquote", {
    xPercent: -0,
    opacity: 1,
    ease: "bounce",
    duration: 1.8
  })

  tl.to(".animate__img", {
    x: -5
  },"-=2")
  tl.to(".animate__img", {
    x: 5
  }, "-=0.5")

  tl.to(".animate__img", {
    x: -5,
  }, )
  tl.to(".animate__img", {
    x: 5,
  })
  tl.to(".animate__img", {
    x: -5,
  })
  tl.to(".animate__img", {
    x: 5,
  })
  tl.to(".animate__img", {
    x: -5,
  })
  tl.to(".animate__img", {
    x: 0,
    y: -5
  })
  tl.to(".animate__img", {
    y: 0
  })
}





