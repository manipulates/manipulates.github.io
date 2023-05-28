document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById("logo-image");
    logoImage.addEventListener("click", function() {
      logoImage.style.animation = "none";
      void logoImage.offsetWidth;
      logoImage.style.animation = "gradientAnimation 5s infinite";
    });
  });