$(document).ready(function() {
	// removing the dotted lines from active/focused links
	$('a, button').focus(function() {
	this.blur();
	});
	//making things clickable
	$('.logo').click(function() {
	window.location = "http://www.brandon-merritt.com";
	});
	//adding a learn more highlight...honestly...stop() doesn't do much, but it seems to cut down on flicker...
	$("#my-projects div img").hover(
	function () {
	    $(this).stop().after($("<span id='learn-hover'>project details</span>"));
	  }, 
	  function () {
	    $("#learn-hover").stop().remove();
	  }
	);
	//cycling all my project photos and having fun with psuedo arrays
	$('div.project-cycle').each(function(i){
		$(this).after('<div class="align-right cycle-nav'+i+'">').cycle({ 
		    fx:     'fade',
		 	next: this,
		    speed:  'fast', 
		    timeout: 0, 
		    pager:  '.cycle-nav'+i
		});
	});
	//more time than i would like to admit went into figuring out how to resize #block to fit the scrolled content
	$('#home #content a').click(function(){
			var myId = $(this).attr('href');
			var newHeight= $(myId).height();
			$('#block').css('height',newHeight)
		});
	//let's scroll baby!
	$('#content').localScroll({
		target:'#block'
	});
	//because IE can't play well with pseudo classes i'm doing it with jquery, not practical, but fun.
	$('#resume #block ul:odd').addClass('bullets');
	$('#resume #block ul:even').addClass('bold');
});