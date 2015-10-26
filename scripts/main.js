'use strict';

var $ = require('jquery');

$(document).ready(function () {

	var $password = $('#password');
	var $strength = $('#strength');
	var $output = $('#output');

	var numCount = 0;
	var letterCount = 0;
	var charCount = 0;
	var strength = 0;

	// checking password strength every time a key is pressed and let go
	$('input').on('keyup', function() {

		var test = $password.val();
		$output.text('');
		$strength.text('');

		for(var i = 0; i < test.length; i++) {
			if(test.charCodeAt(i) >= 48 && test.charCodeAt(i) <= 57) {
				numCount++;
			}

			if( (test.charCodeAt(i) >= 65 && test.charCodeAt(i) <= 90) || (test.charCodeAt(i) >= 97 && test.charCodeAt(i) <= 122) ) {
				letterCount++;
			}

			if( (test.charCodeAt(i) >= 33 && test.charCodeAt(i) <= 47) || (test.charCodeAt(i) >= 58 && test.charCodeAt(i) <= 64) || (test.charCodeAt(i) >= 91 && test.charCodeAt(i) <= 96) ) {
				charCount++;
			}
		}

		if (numCount === test.length && test.length > 0) {
			$output.text('very weak password');
			strength = 0;
		}

		if (letterCount === test.length && test.length > 0) {
			$output.text('weak password');
			strength = 1;
		}

		if (test.length >= 8 && numCount > 0 && letterCount > 0) {
			$output.text('strong password');
			strength = 2;
		}

		if (test.length >= 8 && numCount > 0 && letterCount > 0 && charCount > 0) {
			$output.text('very strong password');
			strength = 3;
		}

	});

	// Give final verdict on password strength
	$('form').on('submit', function(e) {
		e.preventDefault();

		$output.text('');

		if(strength === 0) {
			$strength.html("<p id='very-weak'>The password '" + $password.val() + "' is a very weak password.")
		}

		if(strength === 1) {
			$strength.html("<p id='weak'>The password '" + $password.val() + "' is a weak password.")
		}

		if(strength === 2) {
			$strength.html("<p id='strong'>The password '" + $password.val() + "' is a strong password.")
		}

		if(strength === 3) {
			$strength.html("<p id='very-strong'>The password '" + $password.val() + "' is a very strong password.")
		}
	});
});
