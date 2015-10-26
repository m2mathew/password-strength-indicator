'use strict';

var $ = require('jquery');

$(document).ready(function () {

	var $password = $('#password');
	var $err = $('#error');
	var $output = $('#output');

	var numCount = 0;
	var letterCount = 0;
	var charCount = 0;

	$('input').on('keyup', function() {

		var test = $password.val();
		$output.text('');
		$err.text('');

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
		}

		if (letterCount === test.length && test.length > 0) {
			$output.text('weak password');
		}

		if (test.length >= 8 && numCount > 0 && letterCount > 0) {
			$output.text('strong password');
		}

		if (test.length >= 8 && numCount > 0 && letterCount > 0 && charCount > 0) {
			$output.text('very strong password');
		}


	});

});
