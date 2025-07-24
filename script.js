<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 90,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00ffe0" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
</script>
