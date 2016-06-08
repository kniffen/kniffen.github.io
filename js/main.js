(function($){

	var knifftech = {
		init: function(){
			this.cacheDom();
			this.bindEvents();

			this.$html.removeClass('no-js').addClass('js');
			this.$headerMenuContainer.hide();
		},

		cacheDom: function(){
			this.$html = $('html');
			this.$htmlAndBody = $('html, body');
			this.$menuToggle = this.$html.find('.menu-toggle');
			this.$headerMenuContainer = this.$html.find('.header-menu-container');
			this.$scrollLink = this.$html.find('.scroll-link');
		},
		
		bindEvents: function(){
			this.$menuToggle.on( 'click', this.toggleMenu.bind(this) );
			this.$scrollLink.on( 'click', this.animateScroll.bind(this) );
		},

		toggleMenu: function(){
			this.$headerMenuContainer.toggle();
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