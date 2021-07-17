new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  slidesToScroll: 2,
  draggable: true,
  dots: '.dots',
  arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
  }
});