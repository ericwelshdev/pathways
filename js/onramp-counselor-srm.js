

    //$("input[type=\"checkbox\"]").not("[data-switch-no-init]").bootstrapSwitch();

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
        "lengthMenu": [[5, 10, 15, 25, 50, -1], [5, 10, 15, 25, 50, "All"]],
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

    $('#studentList').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tipr",
        "lengthMenu": [[5, 10, 15, 25, 50, -1], [5, 10, 15, 25, 50, "All"]],
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
        scrollY: '37vh',
        scrollCollapse: true,
        responsive: true,
        processing: true
        //paging: false
    });

});
