$(document).ready(function() {

	$('form').on('submit', function(event) {
        if(event.currentTarget.id === 'upload-hc'){
            var filename = $('#hc').val()
            var names = filename.split('.')
            var fileType = names[names.length -1]
            if(fileType === 'txt'){
                var param = {}
                var form = $('#upload-hc')[0]
                var fd = new FormData(form);
                param.fd = fd;
                param.otp = $('#otp').val();
                $.ajax({
                    type : 'POST',
                    url : '/uploadhc',
                    data : fd,
                    processData: false,  // tell jQuery not to process the data
                    contentType: false
                }).done(function(data) {
                    if (data.error) {
                        $('#errorAlert').text(data.error).show();
                        $('#successAlert').hide();
                    }
                    else {
                        $('#successAlert').text(data.file).show();
                        $('#errorAlert').hide();
                    }

                });
            }else{
                $('#fileformaterror').show();
            // $('#errorAlert').text(data.error).show();
            }
        }else if(event.currentTarget.id === 'download-hc'){
            $.ajax({
                type : 'POST',
                url : '/downloadhc',
                data : fd
            }).done(function(data) {
                
            });
        }
        
		event.preventDefault();

    });

});