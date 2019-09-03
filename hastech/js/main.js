$(document).ready(function(){
  $('.banner-list').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.single-banner',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.single-banner'
    }
  })
});