export const post = () => {
  const contents = document.querySelectorAll(".post .content");

  contents.forEach((content) => {
    const heading = content.querySelector(".content-header h3");
    content.style.maxWidth = `${heading.textContent.length * 0.4}rem`;
  });

  const images = document.querySelectorAll(".post .images");

  images.forEach((image) => {
    const img = image.querySelector("img");
    img.style.transition = "all ease-out 1s";
    image.addEventListener("mouseenter", () => {
      // image.scrollLeft = image.scrollLeftMax;
      img.style.transform = `translateX(-${image.scrollLeftMax}px)`;
    });
    image.addEventListener("mouseleave", () => {
      img.style.transform = `translateX(0)`;
    });
  });
};
