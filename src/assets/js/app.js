console.log('file 1');
const modalOppen = document.querySelector('.header__top-burger')
const modalClose = document.querySelector('.modal-burger')
const modal = document.querySelector('.modal-header')

modalOppen.addEventListener('click', () => {
    modal.style.display = "block"
})
modalClose.addEventListener('click', () => {
    modal.style.display = "none"
})
function sliderHandler(price) {
    // calculate
    if (price === undefined) {
      price = srvPrices;
    }
 
    var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;
    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
    document.querySelector(".polzunok__value").innerHTML = price.totalS1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'руб.';
    document.querySelector(".polzunok__value-one").innerHTML = price.totalS2 + ' ' + 'месяцев';
}
 
var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");

$(".range1").ionRangeSlider({
    from: 3,
    grid: false,
    values: [500000,1000000,1500000,2000000,2500000,3000000,3500000,4000000,4500000,5000000,5500000,6000000,6500000,7000000,7500000,8000000,8500000,9000000,9500000,10000000,10500000,11000000,11500000,12000000,12500000,13000000,13500000,14000000,14500000,15000000],
    onChange: function (data) {
        srvPrices.totalS1 = data.from_value;
        sliderHandler(srvPrices)
    },
    onStart: function(data) {
        srvPrices.totalS1 = data.from_value;
        sliderHandler(srvPrices)
    }
 });
 $(".range2").ionRangeSlider({
    from: 2,
    grid: false,
    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
    onChange: function (data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS2 = data.from_value;
      sliderHandler(srvPrices)
    }
 });
 $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});