/* global bootstrap: false */

(function () {
	'use strict'

	// Tooltip and popover demos
	document.querySelectorAll('.tooltip-demo')
		.forEach(function (tooltip) {
			new bootstrap.Tooltip(tooltip, {
				selector: '[data-bs-toggle="tooltip"]'
			})
		})

	document.querySelectorAll('[data-bs-toggle="popover"]')
		.forEach(function (popover) {
			new bootstrap.Popover(popover)
		})

	document.querySelectorAll('.toast')
		.forEach(function (toastNode) {
			var toast = new bootstrap.Toast(toastNode, {
				autohide: false
			})

			toast.show()
		})

	// Disable empty links and submit buttons
	document.querySelectorAll('[href="#"], [type="submit"]')
		.forEach(function (link) {
			link.addEventListener('click', function (event) {
				event.preventDefault()
			})
		})

	function setActiveItem() {
		var hash = window.location.hash

		if (hash === '') {
			return
		}

		var link = document.querySelector('.bd-aside a[href="' + hash + '"]')

		if (!link) {
			return
		}

		var active = document.querySelector('.bd-aside .active')
		var parent = link.parentNode.parentNode.previousElementSibling

		link.classList.add('active')

		if (parent.classList.contains('collapsed')) {
			parent.click()
		}

		if (!active) {
			return
		}

		var expanded = active.parentNode.parentNode.previousElementSibling

		active.classList.remove('active')

		if (expanded && parent !== expanded) {
			expanded.click()
		}
	}

	setActiveItem()
	window.addEventListener('hashchange', setActiveItem)

	function ifScroll() {
		var toTop = document.querySelector('.to-top button');
		var nScroll = document.body.scrollTop;

		toTop.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		})

		if (nScroll == 0) {
			toTop.style.display = 'none';
		} else {
			toTop.style.display = 'block';
		}
	}

	window.addEventListener('scroll', () => ifScroll());
	ifScroll();
})()
