const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    // Toggle hamburger animation
    hamburger.classList.toggle("active")
  })
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    if (hamburger) {
      hamburger.classList.remove("active")
    }
  })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = this.querySelector('input[type="text"]').value.trim()
    const email = this.querySelector('input[type="email"]').value.trim()
    const message = this.querySelector("textarea").value.trim()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name) {
      alert("Please enter your name")
      return
    }

    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    if (!message) {
      alert("Please enter a message")
      return
    }

    // Success message
    alert("Thank you for your message! We will get back to you soon.")
    this.reset()
  })
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards for fade-in animation
const cardsToObserve = document.querySelectorAll(".feature-card, .class-card, .pricing-card, .testimonial-card")

cardsToObserve.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  scrollObserver.observe(card)
})

window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

document.querySelectorAll(".class-card .btn-secondary").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    const className = this.closest(".class-card").querySelector("h3").textContent
    alert(`Great! You're interested in ${className}. Please complete your membership first.`)
  })
})

document.querySelectorAll(".pricing-card .btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    const planName = this.closest(".pricing-card").querySelector("h3").textContent
    alert(`You selected the ${planName} plan! Redirecting to checkout...`)
  })
})

if (hamburger) {
  const originalClick = hamburger.onclick
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active")
  })
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5, 8, 16, 0.95)"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 212, 255, 0.1)"
  } else {
    navbar.style.background = "linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%)"
    navbar.style.boxShadow = "none"
  }
})

window.addEventListener("load", () => {
  document.body.style.opacity = "1"
})

// Console message
console.log("%cFitForce Gym Website Loaded Successfully!", "color: #00d4ff; font-size: 16px; font-weight: bold;")
