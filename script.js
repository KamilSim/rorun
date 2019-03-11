
const config = {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        400: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
        },
      }
  };
  
const mySwiper = new Swiper ('.swiper-container', config)



let katowiceLat=50.265000;
let katowiceLong=19.000020;

if($('#map').length != 0)
{
  let mymap = L.map('map').setView([katowiceLat, katowiceLong], 14);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);

  let myIcon = L.divIcon({className: 'my-div-icon',
  iconAnchor: [85,98],
  });
  L.marker([katowiceLat, katowiceLong], {icon: myIcon}).addTo(mymap);

}


$(".up-arrow").on('click',function(event) {
  
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  
});


let myNavbar=$('.navbar').clone();

let navbarToggler = $('.toggler');

$('.nav').append('<div class="collapsed-menu"></div>');
let collapsedMenu= $('.collapsed-menu');


myNavbar.clone().appendTo(collapsedMenu);

let collapsedNav=$('.collapsed-menu .navbar ');

navbarToggler.on('click', function(event){

  event.preventDefault();
  collapsedMenu.toggleClass('displayed-menu');
  collapsedNav.addClass('displayed-list');

});

