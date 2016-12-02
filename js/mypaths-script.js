

$(document).ready(function () {


    window.onload = function () {
        init_classy();

    };


    function init_classy() {
        $('#goal-chart').ClassyLoader({
            speed: 20,
            diameter: 45,
            fontSize: '28px',
            height:100,
            width:100,
            //fontFamily: 'Open Sans',
            fontFamily: 'Helvetica',
            fontColor: '#fff',
            lineColor: "rgba(109,90,241,0.4)",
            percentage: 56,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });
    };

});


$(function () {

    if ($(".count-to").length) {

        $(".count-to").countTo({
            refreshInterval: 20
        });

    }


    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i").eq(1)     
            .toggleClass('fa fa-arrow-down pull-right fa fa-arrow-left pull-right');

        $(e.target)
            .prev('.panel-body')
            .find("div").eq(0)
            .toggleClass('fadeIn fadeOut');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);


});

