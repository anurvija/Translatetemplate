$(document).ready(function() {  

	$('#upload-hc').on('submit', function(event) {
        var filename = $('#hc').val()
        var names = filename.split('.')
        var fileType = names[names.length -1]
        $('#download').hide();
        $('#fileformaterror').hide();
        if(fileType === 'xlsx'){
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
                    $('#download').show();
                }
                else {
                    $('#successAlert').text(data.file).show();
                    $('#errorAlert').hide();
                }

            });
            event.preventDefault();
        }else{
            $('#fileformaterror').show();
        }
    });
});