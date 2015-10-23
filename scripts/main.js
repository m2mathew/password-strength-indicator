'use strict';

var $ = require('jquery');

$(document).ready(function () {
	console.log('ready');

	var $password = $('#password');
	var $err = $('#error');
	var $output = $('.output');

	$('input').on('keyup', function() {
		var test = $password.val();

		// if(test )

		// return 0 1 2 3
	});

	$('form').on('submit' ,function(e) {
		e.preventDefault();



	});





});
