
// JavaScript contact form Document
$(document).ready(function() {
	$('form#contact-form, form.form[name="contactForm"]').submit(function(event) {
	event.preventDefault();
	$(this).find('.error').remove();
	var hasError = false;
	$(this).find('input, textarea').each(function() {
	if(jQuery.trim($(this).val()) == '' && $(this).prop('required')) {
    var labelText = $(this).attr('placeholder') || 'field';
    $(this).after('<span class="error">Please enter your '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).attr('type') == 'email') {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).attr('placeholder') || 'email';
    $(this).after('<span class="error">You entered an invalid '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    
    if(!hasError) {
    var submitBtn = $(this).find('button[type="submit"]');
    var originalBtnText = submitBtn.html();
    submitBtn.html('Sending...').prop('disabled', true);
    
    $("#loader").show();
        $.ajax({
            url: "contact-handler.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            success: function(data) {
                try {
                    var response = typeof data === 'string' ? JSON.parse(data) : data;
                    
                    if(response.status === 'success' || response.status === 'partial') {
                        // Redirect to thank you page
                        window.location.href = 'thank-you.html';
                    } else {
                        // Show error and try Formspree fallback
                        tryFormspreeSubmission();
                    }
                } catch(e) {
                    console.error("Error parsing response:", e);
                    tryFormspreeSubmission();
                }
                
                $("#loader").hide();
                submitBtn.html(originalBtnText).prop('disabled', false);
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", error);
                submitBtn.html(originalBtnText).prop('disabled', false);
                $("#loader").hide();
                
                // Try Formspree as fallback
                tryFormspreeSubmission();
            }           
       });
	   
	   return false;
    }
   });
     // Formspree fallback function
   function tryFormspreeSubmission() {
       var formData = new FormData($('form[name="contactForm"]')[0]);
       
       // Create a hidden form for Formspree submission
       var fallbackForm = $('<form>', {
           'method': 'POST',
           'action': 'https://formspree.io/f/mnnvpabo',
           'style': 'display: none'
       });
       
       // Add all form fields
       for (var pair of formData.entries()) {
           $('<input>', {
               'type': 'hidden',
               'name': pair[0],
               'value': pair[1]
           }).appendTo(fallbackForm);
       }
       
       // Add success page redirect
       $('<input>', {
           'type': 'hidden',
           'name': '_next',
           'value': window.location.origin + '/thank-you.html'
       }).appendTo(fallbackForm);
       
       // Add the form to the body and submit it
       fallbackForm.appendTo('body').submit();
   }
});