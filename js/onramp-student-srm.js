

/**
 * Preloader
 */

$(window).load(function () {

    $('.preloader__img').fadeOut(2000);
    setTimeout(function () {
        $('.preloader').addClass('active').delay(300).fadeOut(1000);
    }, 1000);

});



$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['noteSection', 'emailSection', 'historySection'],
        slidesNavigation: false,
        controlArrows: false
    });


    $(function () {
        $('#emailBodyContent').slimScroll({
            height: '220px'
        });
    });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });

    //$('#taskList_wrapper').slimScroll({
    //    height: '450'
    //});

    $('#noteList , #emailList, #historyList').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tipr",
        "lengthMenu": [[10, 15, 25, 50, -1], [10, 15, 25, 50, "All"]],
        buttons: [],
        "columnDefs": [{ "visible": false, "targets": 0 }],
        scrollY: '50vh',
        scrollCollapse: true,
        responsive: true
        //paging: false
    });

    //-------------------------------
    // Preloading data in markup
    //-------------------------------       
    $('#email-to').tagit({
        availableTags: ['Alexandra Williams', 'Karl Jordan', 'Monica Smith', 'Michael Smith', 'Janet Cohen', 'Alice Staple', 'Monica Cale', 'Mark Jordan', 'Sara Reese'],
        itemName: 'item',
        fieldName: 'tags',
        removeConfirmation: true,
        //autocomplete: { delay: 0, minLength:  }
    });


    $("#newMessageContent").Editor();


});



// Collapse ibox function
$('.collapse-link').on('click', function () {
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i');
    var content = ibox.find('div.ibox-content');
    var title = ibox.find('div.ibox-title-text');

    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    title.toggleClass('hide')
    setTimeout(function () {
        ibox.resize();
        ibox.find('[id^=map-]').resize();
    }, 50);
});


// add note text
$('.add-note').on('click', function () {
    
    $('.edit-note').toggleClass('disabled')

    $('#noteCategory').addClass('hide');
    $('#noteCategoryEdit').removeClass('hide')

    $('#noteFollowUp').addClass('hide');
    $('#noteFollowUpEdit').removeClass('hide')

    $('#currentNote').addClass('hide');
    $('#editNote').removeClass('hide');

    $('#saveNoteButton').toggleClass('hide');
    $('#cancelNoteButton').toggleClass('hide')
    $('#closeNoteButton').addClass('hide')

    $('.nav-tabs a[href="#currentNoteTab"]').tab('show');
    ;
});


// switch note text
$('.edit-note').on('click', function () {
    var wellNote = $('#currentNote');
    var editNote = $('#editNote');

    $('.edit-note').addClass('disabled')

    wellNote.addClass('hide');
    editNote.removeClass('hide');
    $('#saveNoteButton').removeClass('hide');
    $('#cancelNoteButton').removeClass('hide')
    $('#closeNoteButton').addClass('hide')

    $('.nav-tabs a[href="#currentNoteTab"]').tab('show');
;
});

// toggle save note button
$('#saveNoteButton , #cancelNoteButton').on('click', function () {

    $('.edit-note').removeClass('disabled');

    $('#currentNote').removeClass('hide');
    $('#editNote').addClass('hide');

    $('#noteCategory').removeClass('hide');
    $('#noteCategoryEdit').addClass('hide')

    $('#noteFollowUp').removeClass('hide');
    $('#noteFollowUpEdit').addClass('hide')

    $('#saveNoteButton').addClass('hide');
    $('#cancelNoteButton').addClass('hide');

    $('#closeNoteButton').removeClass('hide');



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


