

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
        anchors: ['taskSection', 'programSection', 'searchSection'],
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



    $('#taskDueDate input').datepicker({
        todayBtn: true,
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom left"
    });

    $('#taskDueDate').datepicker()
    .on('changeDate', function (ev) {
        $('#taskDueDate').datepicker('hide');
    });



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
$('.add-task').on('click', function () {

    $('.edit-task').toggleClass('disabled')

   
    $('#taskName').addClass('hide');
    $('#taskNameEdit').removeClass('hide');

    $('#taskAssigned').addClass('hide');
    $('#taskAssignedEdit').removeClass('hide');

    $('#taskFollowUp').addClass('hide');
    $('#taskFollowUpEdit').removeClass('hide');

    $('#taskFollowUp').addClass('hide');
    $('#taskFollowUpEdit').removeClass('hide');

    $('#taskStatus').addClass('hide');
    $('#taskStatusEdit').removeClass('hide');

    $('#taskDueDate').addClass('hide');
    $('#taskDueDateEdit').removeClass('hide');

    $('#taskComment').addClass('hide');
    $('#taskCommentEdit').removeClass('hide');


    $('#saveTaskButton').removeClass('hide');
    $('#cancelTaskButton').removeClass('hide')
    $('#closeTaskButton').addClass('hide')

    $('.media-header').addClass('hide')

    $('.taskHeaderViewMode').addClass('hide')
    $('.taskHeaderAddMode').removeClass('hide')
    

    $('.nav-tabs a[href="#currentTaskTab"]').tab('show');
    ;
});


// switch note text
$('.edit-task').on('click', function () {
    var wellNote = $('#currentNote');
    var editNote = $('#editNote');

    $('.edit-note').addClass('disabled');

    wellNote.addClass('hide');
    editNote.removeClass('hide');

    $('#saveTaskButton').removeClass('hide');
    $('#cancelTaskButton').removeClass('hide');
    $('#closeTaskButton').addClass('hide');

    $('#taskAssigned').addClass('hide');
    $('#taskAssignedEdit').removeClass('hide');

    $('#taskFollowUp').addClass('hide');
    $('#taskFollowUpEdit').removeClass('hide');

    $('#taskFollowUp').addClass('hide');
    $('#taskFollowUpEdit').removeClass('hide');

    $('#taskStatus').addClass('hide');
    $('#taskStatusEdit').removeClass('hide');

    $('#taskDueDate').addClass('hide');
    $('#taskDueDateEdit').removeClass('hide');

    $('#taskComment').addClass('hide');
    $('#taskCommentEdit').removeClass('hide');


    $('.nav-tabs a[href="#currentTaskTab"]').tab('show');
    ;
});

// toggle save note button
$('#saveTaskButton , #cancelTaskButton').on('click', function () {

    $('.edit-task').removeClass('disabled');

    $('#taskName').removeClass('hide');
    $('#taskNameEdit').addClass('hide');

    $('#taskAssigned').removeClass('hide');
    $('#taskAssignedEdit').addClass('hide');

    $('#taskFollowUp').removeClass('hide');
    $('#taskFollowUpEdit').addClass('hide');

    $('#taskFollowUp').removeClass('hide');
    $('#taskFollowUpEdit').addClass('hide');

    $('#taskStatus').removeClass('hide');
    $('#taskStatusEdit').addClass('hide');

    $('#taskDueDate').removeClass('hide');
    $('#taskDueDateEdit').addClass('hide');

    $('#taskComment').removeClass('hide');
    $('#taskCommentEdit').addClass('hide');

    $('.media-header').removeClass('hide')
    $('.taskHeaderViewMode').removeClass('hide')
    $('.taskHeaderAddMode').addClass('hide')


    $('#saveTaskButton').addClass('hide');
    $('#cancelTaskButton').addClass('hide');

    $('#closeTaskButton').removeClass('hide');


 

});




$(function () {

    if ($(".count-to").length) {

        $(".count-to").countTo({
            refreshInterval: 20
        });

    }

});



$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });

    //$('#taskList_wrapper').slimScroll({
    //    height: '450'
    //});

    $('#taskList').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tipr",
        "lengthMenu": [[10, 15, 25, 50, -1], [10, 15, 25, 50, "All"]],

        // button for grid
        buttons: [
    {
        extend: 'copyHtml5',
        text: '<i class="fa fa-files-o "></i>',
        titleAttr: 'Copy'
    },
    {
        extend: 'excelHtml5',
        text: '<i class="fa fa-file-excel-o "></i>',
        titleAttr: 'Excel'
    },
    {
        extend: 'csvHtml5',
        text: '<i class="fa fa-file-text-o "></i>',
        titleAttr: 'CSV'
    },
    {
        extend: 'pdfHtml5',
        text: '<i class="fa fa-file-pdf-o "></i>',
        titleAttr: 'PDF'
    },
    {
        extend: 'print',
        text: '<i class="fa fa-print "></i>',
        titleAttr: 'Print'
    }
        ],
        scrollY: '50vh',
        scrollCollapse: true,
        responsive: true
        //paging: false
    });

    $('#studentProgramList').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tipr",
        "lengthMenu": [[ 10, 15, 25, 50, -1], [ 10, 15, 25, 50, "All"]],
        // button for grid
        buttons: [
    {
        extend: 'copyHtml5',
        text: '<i class="fa fa-files-o "></i>',
        titleAttr: 'Copy'
    },
    {
        extend: 'excelHtml5',
        text: '<i class="fa fa-file-excel-o "></i>',
        titleAttr: 'Excel'
    },
    {
        extend: 'csvHtml5',
        text: '<i class="fa fa-file-text-o "></i>',
        titleAttr: 'CSV'
    },
    {
        extend: 'pdfHtml5',
        text: '<i class="fa fa-file-pdf-o "></i>',
        titleAttr: 'PDF'
    },
    {
        extend: 'print',
        text: '<i class="fa fa-print "></i>',
        titleAttr: 'Print'
    }
        ],
        scrollY: '30vh',
        scrollCollapse: true,
        responsive: true
        //paging: false
    });
       


    $('#studentSearchList').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tipr",
        "lengthMenu": [[10, 15, 25, 50, -1], [10, 15, 25, 50, "All"]],
        // button for grid
        buttons: [
    {
        extend: 'copyHtml5',
        text: '<i class="fa fa-files-o "></i>',
        titleAttr: 'Copy'
    },
    {
        extend: 'excelHtml5',
        text: '<i class="fa fa-file-excel-o "></i>',
        titleAttr: 'Excel'
    },
    {
        extend: 'csvHtml5',
        text: '<i class="fa fa-file-text-o "></i>',
        titleAttr: 'CSV'
    },
    {
        extend: 'pdfHtml5',
        text: '<i class="fa fa-file-pdf-o "></i>',
        titleAttr: 'PDF'
    },
    {
        extend: 'print',
        text: '<i class="fa fa-print "></i>',
        titleAttr: 'Print'
    }
        ],
        scrollY: '50vh',
        scrollCollapse: true,
        responsive: true,
        processing: true
        //paging: false
    });

});
