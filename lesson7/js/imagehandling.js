const images = document.querySelectorAll("img[data-scr]");

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0xp 50px 0px"
// };

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-scr'));
    image.onload = () => {
        image.removeAttribute('data-scr');};
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    images.forEach((img) => {
      observer.observe(img);
    });
} else {
    images.forEach((img) => {
      loadImages(img);
    });
}
 
