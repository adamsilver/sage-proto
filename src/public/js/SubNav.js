function SubNav(container) {
	this.container = container;
	this.items = this.container.find('.subNav-items');
	this.button = this.container.find('button');
	this.container.on('click', 'button', $.proxy(this, 'onButtonClick'));
}

SubNav.prototype.onButtonClick = function(e) {
	if(this.button.attr('aria-expanded') == 'true') {
		this.button.attr('aria-expanded', 'false');
	} else {
		this.button.attr('aria-expanded', 'true');
	}
};