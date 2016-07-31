var accordeon = (function () {
	function init () {
		_setUpListeners();
	};
	function _setUpListeners () {
		$('.accordeon__link').on('click', function(e) {
			e.preventDefault();
			var $this = $(this),
				thisItem = $this.closest('.accordeon__item'),
				otherItems = thisItem.siblings('.accordeon__item'),
				content = thisItem.find('.accordeon__inner-list'),
				otherContent = otherItems.find('.accordeon__inner-list'),
				duration = 300;

			if (!thisItem.hasClass('active')) {
				otherItems.removeClass('active');
				thisItem.addClass('active');
				otherContent
					.stop(true, true)
					.slideUp(duration);
				content
					.stop(true, true)
					.slideDown(duration);
			} else {
				thisItem.removeClass('active');
				content
					.stop(true, true)
					.slideUp(duration);
			}

		});
	};

	return {
		init:init
	}


})();

accordeon.init();
