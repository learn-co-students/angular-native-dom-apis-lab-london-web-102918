function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.text }}</h3>',
				'<span>Click here to replace the text</span>',
			'</div>'
		].join(''),
		require: 'someDirective',
		controller: function() {
			this.text = 'Replace this text!';
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {
			let wholeSomeEl = elem[0]
			let someTextEl = wholeSomeEl.querySelector('span')
			someTextEl.addEventListener('click', () => {
				ctrl.text = 'Thank you for clicking!'
				scope.$apply()
			})

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
