$(document).ready(function () {

    $("#newMessageContent").Editor();

    //-------------------------------
    // Preloading data in markup
    //-------------------------------       
    $('#email-to').tagit({
        availableTags: [
          'samsmith',
          'tonystark@stark.com',
          'bob@randy.com',
          'sara',
          'someone@else.com',
          'janedoe',
          'larrypoppins'
        ],
        itemName: 'item',
        fieldName: 'tags',
        removeConfirmation: true
    });



    $('#newMessage').summernote({
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough', 'superscript', 'subscript']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ]
    });


    //var editor = new wysihtml5.Editor("wysihtml5-textarea", {
    //    toolbar: "wysihtml5-toolbar",
    //    stylesheets: ["../css/vendor/reset-min.css", "../css/vendor/editor.css"],
    //    parserRules: wysihtml5ParserRules

    //});


});


$('#sendMessage').click(function () {
    // Display a success toast, with a title

    var tomsg = "Your message was successfully.";
    toastr.success('Message Sent', tomsg),
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": false,
        "preventDuplicates": true,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }


});

