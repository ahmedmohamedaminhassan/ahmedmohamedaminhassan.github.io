$(document).ready(function () 
{	

	$(window).on('scroll', function () 
	
	{
		
		var sc = $(window).scrollTop();
		
		if (sc > 200) {
			
			$('nav.bg-light').addClass('fix');
			
			$('nav.bg-light').css('border-bottom', '3px inset #DDD');
			
			$('i[class="fas fa-arrow-alt-circle-up fa-2x"]').fadeIn('slow');
			
		} else {
			
			$('nav.bg-light').removeClass('fix');
			
			$('nav.bg-light').css('border-bottom', 'medium none');
			
			$('i[class="fas fa-arrow-alt-circle-up fa-2x"]').fadeOut('slow');
			
		}
		
		if (sc > 50) {
			
			$('nav.bg-light').addClass('fix');
			
		} else {
			
			$('nav.bg-light').removeClass('fix');
			
		}
		
		$('i[class="fas fa-arrow-alt-circle-up fa-2x"]').on('click', function () 
		
		{
			
			$(window).scrollTop(0);
			
		});
		
	});
	
	$('input[id="first"]').on('blur', function () 
	{
		
		var firstName = $(this).val();
		
		if (isNaN(firstName)) {
			
			$(this).attr('class', 'form-control is-valid');
			
		} else {
			
			$(this).attr('class', 'form-control is-invalid');
			
		}
		
	});
	
	$('input[id="last"]').on('blur', function () 
	{
		
		var lastName = $(this).val();
		
		if (isNaN(lastName)) {
			
			$(this).attr('class', 'form-control is-valid');
			
		} else {
			
			$(this).attr('class', 'form-control is-invalid');
			
		}
		
	});
	
});