// Initialize the GSAP timeline
var tl = gsap.timeline();

// Set initial properties of elements with class "a"
gsap.set(".a", { opacity: 0, y: 10 });

// Define the animation sequence
tl
  .from("#left", {
    width: 0,
    ease: "expo.inOut",
    duration: 2,
  })
  .from("#right", {
    width: 0,
    ease: "expo.inOut",
    duration: 2,
  }, "-=1.5") // Optionally, overlap the second animation
  .to(".a", {
    stagger: 0.1,
    opacity: 1,
    y: 0,
    ease: "expo.inOut",
    duration: 2,
  })
  .from("#right > img", {
    scale: 0.8,
    opacity: 0,
    ease: "expo.inOut",
    duration: 2,
    transformOrigin: "center", // Ensures rotation from the center
  }, "-=1.5"); // Animate the shoe image
