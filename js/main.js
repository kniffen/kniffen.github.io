(function($){

	var knifftech = {
		init: function(){
			this.cacheDom();
			this.bindEvents();

			this.$html.removeClass('no-js').addClass('js');
			this.$headerMenuContainer.hide();
			this.scrollHandler();
		},

		cacheDom: function(){
			this.$document = $(document);
			this.$html = this.$document.find('html');
			this.$htmlAndBody = this.$document.find('html, body');
			this.$menuToggle = this.$document.find('.menu-toggle');
			this.$headerMenuContainer = this.$document.find('.header-menu-container');
			this.$scrollLink = this.$document.find('.scroll-link');
			this.$scrollToTop = this.$document.find('#scroll-to-top');
		},
		
		bindEvents: function(){
			this.$menuToggle.on( 'click', this.toggleMenu.bind(this) );
			this.$scrollLink.on( 'click', this.animateScroll.bind(this) );
			this.$scrollToTop.on( 'click', this.scrollToTop.bind(this) );
			this.$document.on( 'scroll', this.scrollHandler.bind(this) );
		},

		scrollHandler: function(){
			if( this.$document.scrollTop() >= 500 ){
				this.$scrollToTop.show(100);
			}else{
				this.$scrollToTop.hide(100);
			}
		},

		toggleMenu: function(){
			this.$headerMenuContainer.toggle();
		},

		scrollToTop: function(){
			this.$htmlAndBody.animate({scrollTop:0}, 'slow');
			return false;
		},

		animateScroll: function(e){
			$target = $(e.target.hash);

			this.$htmlAndBody.animate({
				scrollTop: $target.offset().top
			}, 1000);

			return false;
		}
	}

	$(document).ready( knifftech.init.bind(knifftech) );

})(jQuery);