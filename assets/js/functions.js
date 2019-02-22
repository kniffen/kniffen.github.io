( function( window, document ) {
  
  const html        = document.querySelector( 'html' )
  const scrollToTop = html.querySelector( '#scroll-to-top' )

  // Scroll to top
  window.addEventListener( 'scroll', function() {
    scrollToTop.style.bottom = window.scrollY > 500 ? '20px' : '-2000px'
  } )

  scrollToTop.addEventListener( 'click', function(event) {
    event.preventDefault()
    window.scrollTo( { top: 0, behavior: 'smooth' } )
  } )

} ) ( typeof window != 'undefined' ? window : this, document )