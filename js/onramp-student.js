$(document).ready(function(){

    //*******************************************
    /*	EASY PIE CHART
	/********************************************/


    //if( $('.easy-pie-chart').length > 0 ) {

    //    var cOptions = {
    //        animate: 3000,
    //        trackColor: "#ccc",
    //        scaleColor: "#ddd",
    //        lineCap: "square",
    //        lineWidth: 5,
    //        barColor: "#ef1e25",
    //        onStep: function(from, to, percent) {
    //            $(this.el).find('.percent').text(Math.round(percent));
    //        }
    //    }

    //    cOptions.barColor = "#3E9C1A"; // green
    //    $('.easy-pie-chart.green').easyPieChart(cOptions);
    //    cOptions.barColor = "#FFB800"; // yellow
    //    $('.easy-pie-chart.yellow').easyPieChart(cOptions);
    //    cOptions.barColor = "#E60404"; // red
    //    $('.easy-pie-chart.red').easyPieChart(cOptions);
    //}



    function init_piechart() {
        $('#chart1').easyPieChart({
            easing: 'easeIn',
            animate: 3500,
            //lineWidth: 10,
            //size: 200,
            barColor: '#23c6c8',
            trackColor: '#d1dade',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        })
    };


});

