function hasHover() {
  return window.matchMedia("(hover: hover)").matches;
}

if (hasHover()) {
  const stars = document.querySelectorAll(".parallax-stars");

  if (stars.length > 0) {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      stars.forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }
}
