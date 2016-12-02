

$(document).ready(function () {


    window.onload = function () {
        init_calendar();
        //init_piechart();
        init_linechart();
        init_classy();
        //init_countTo();
    };




    function init_calendar() {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        /*
            Initialize fullCalendar and store into variable.
            Why in variable?
            Because doing so we can use it inside other function.
            In order to modify its option later.
        */

        var calendar = $('#calendar').fullCalendar(
        {
            /*
                header option will define our calendar header.
                left define what will be at left position in calendar
                center define what will be at center position in calendar
                right define what will be at right position in calendar
            */
            header:
            {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'

            },
            /*
                defaultView option used to define which view to show by default,
                for example we have used agendaWeek.
            */
            defaultView: 'month',
            eventColor: '#23c6c8',
            //eventBackgroundColor: '#23c6c8',
            /*
                selectable:true will enable user to select datetime slot
                selectHelper will add helpers for selectable.
            */
            selectable: true,
            selectHelper: true,
            /*
                when user select timeslot this option code will execute.
                It has three arguments. Start,end and allDay.
                Start means starting time of event.
                End means ending time of event.
                allDay means if events is for entire day or not.
            */
            select: function (start, end, allDay) {
                /*
                    after selection user will be promted for enter title for event.
                */
                var title = prompt('Event Title:');
                /*
                    if title is enterd calendar will add title and event into fullCalendar.
                */
                if (title) {
                    calendar.fullCalendar('renderEvent',
                        {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        },
                        true // make the event "stick"
                    );
                }
                calendar.fullCalendar('unselect');
            },
            /*
                editable: true allow user to edit events.
            */
            editable: true,
            /*
                events is the main option for calendar.
                for demo we have added predefined events in json object.
            */
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ]
        })
    };

    function init_linechart() {


   
        var ctx = $("#gpa-line-chart").get(0).getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(14,13,31,1)');
        gradient.addColorStop(1, 'rgba(109,90,241,0)');

        var data = {
            labels: ["Spring 2015", "Summer 2015", "Fall 2015", "Spring 2016", "Summer 2016", "Fall 2016", ],
            datasets: [
                {
                    label: "Your Data",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: gradient, //"rgba(35,198,200,0.4)",
                    borderColor: "#fff",//"rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    //borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    //fillColor: "rgba(35,198,200,0.5)",
                    //strokeColor: "rgba(35,198,200,1)",
                    //pointColor: "rgba(35,198,200,1)",
                    pointStrokeColor: "#fff",
                    data: [3.6, 3.2, 3.3, 3.5, 3.3, 3.1, 2.8]
                }
                //,
                //{
                //    label: "Percentile GPA",
                //    fill: true,
                //    lineTension: 0.1,
                //    backgroundColor: "rgba(109,90,241,0.4)",
                //    borderColor: "rgba(151,187,205,1)",
                //    borderCapStyle: 'butt',
                //    borderDash: [],
                //    borderDashOffset: 0.0,
                //    //borderJoinStyle: 'miter',
                //    pointBorderColor: "rgba(75,192,192,1)",
                //    pointBackgroundColor: "#fff",
                //    pointBorderWidth: 1,
                //    pointHoverRadius: 5,
                //    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                //    pointHoverBorderColor: "rgba(220,220,220,1)",
                //    pointHoverBorderWidth: 2,
                //    //pointRadius: 2,
                //    pointHitRadius: 10,
                //    //fillColor: "rgba(151,187,205,0.5)",
                //    //strokeColor: "rgba(151,187,205,1)",
                //    //pointColor: "rgba(151,187,205,1)",
                //    //pointStrokeColor: "#fff",
                //    data: [3.6, 3.8, 3.3, 2.7, 3.3, 3.6, 3.8]
                //}
            ]
        }

        var myNewChart = new Chart(ctx, {
            type: "line",
            data: data,
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: '#fff',
                        fontSize: 20
                    }
                },
                scales: {
            xAxes: [{
                ticks: {
                    fontColor:"#fff"
                    }
        }],
            yAxes: [{
                ticks: {
                    fontColor: "#fff"
                }
            }]
        }

            }
        });
    };

    //function init_piechart() {
    //    $('#goal-chart').easyPieChart({
    //        easing: 'easeIn',
    //        animate: 3500,
    //        lineWidth: 10,
    //        size: 200,
    //        barColor: '#23c6c8',
    //        trackColor: '#d1dade',
    //        onStep: function (from, to, percent) {
    //            $(this.el).find('.percent').text(Math.round(percent));
    //        }
    //    })

    //    var element = document.querySelector('.chart');

    //    new EasyPieChart(element, {
    //        barColor: function (percent) {
    //            var ctx = this.renderer.getCtx();
    //            var canvas = this.renderer.getCanvas();
    //            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    //            gradient.addColorStop(0, "#ffe57e");
    //            gradient.addColorStop(1, "#de5900");
    //            return gradient;
    //        }
    //    });

    //    $('#progress-chart').easyPieChart({
    //        easing: 'easeIn',
    //        animate: 3500,
    //        lineWidth: 10,
    //        barColor: '#23c6c8',
    //        trackColor: '#d1dade',
    //        onStep: function (from, to, percent) {
    //            $(this.el).find('.percent').text(Math.round(percent));
    //        }
    //    })


    //    $('.gauge-chart').each(function () {
    //        var $this = $(this);
    //        var lineWidth = 15,
    //            indicatorHeight = 20,
    //            scaleLength = indicatorHeight - lineWidth;
    //        var canvasWidth = $this.width();
    //        var rOutter = canvasWidth / 2 - scaleLength,
    //            rInner = rOutter - lineWidth - 3;
    //        var rotate = -90;

    //        $this.easyPieChart({
    //            trackColor: '#eee',
    //            lineWidth: lineWidth,
    //            scaleColor: '#333',
    //            scaleLength: scaleLength,
    //            size: canvasWidth,
    //            lineCap: 'square',
    //            animate: 2000,
    //            rotate: rotate,
    //            onStep: function (from, to, percent) {
    //                var ctx = this.renderer.getCtx();
    //                var canvas = this.renderer.getCanvas();

    //                // Draw indicator
    //                var angleTopPoint = (1 - (percent + 1) / 50) * Math.PI,
    //                    angleBottomPoint1 = angleTopPoint - Math.PI / 36,
    //                    angleBottomPoint2 = angleTopPoint + Math.PI / 36;
    //                var calculate = function (radius, radian) {
    //                    var rotatedRadian = radian + rotate / 180 * Math.PI;
    //                    var result = [radius * Math.sin(rotatedRadian), radius * Math.cos(rotatedRadian)];
    //                    return result;
    //                };
    //                ctx.fillStyle = '#333';
    //                ctx.beginPath();
    //                ctx.moveTo.apply(ctx, calculate(rOutter + scaleLength, angleTopPoint));
    //                ctx.lineTo.apply(ctx, calculate(rInner, angleBottomPoint1));
    //                ctx.lineTo.apply(ctx, calculate(rInner, angleBottomPoint2));
    //                ctx.closePath();
    //                ctx.fill();
    //            },
    //            barColor: function (percent) {
    //                // Add rainbow background
    //                var ctx = this.renderer.getCtx();
    //                var canvas = this.renderer.getCanvas();
    //                var gradient = ctx.createLinearGradient(canvasWidth / 2, 0, -canvasWidth / 2, 0);
    //                gradient.addColorStop(0, 'red');
    //                gradient.addColorStop(1 / 3, 'orange');
    //                gradient.addColorStop(2 / 3, 'yellow');
    //                gradient.addColorStop(1, 'green');
    //                return gradient;
    //            }
    //        });
    //    });

    //};

    function init_classy() {
        $('#goal-chart').ClassyLoader({
            speed: 20,
            diameter: 80,
            fontSize: '60px',
            //fontFamily: 'Open Sans',
            fontFamily: 'Helvetica',
            fontColor: '#fff',
            lineColor: "rgba(109,90,241,0.4)",
            percentage: 56,
            lineWidth: 10,
            start: 'top',
            remainingLineColor: 'rgba(200,200,200,0.1)'
        });

        $('#current-gpa-chart').ClassyLoader({
            speed: 20,
            diameter: 80,
            fontSize: '60px',
            fontFamily: 'Open Sans',
            fontColor: '#fff',
            percentage: 3.5,

        });

    };

    // Counto To

    //function init_countTo() {

    //    $('#current-gpa').countTo({
    //        speed: 1000,
    //        refreshInterval: 100,
    //        decimals: 2,
    //    });

    //};



    //var chart = window.chart = $('.chart').data('easyPieChart');
    //$('.js_update').on('click', function() {
    //    chart.update(Math.random()*200-100);
    //});

});


$(function () {

    if ($(".count-to").length) {

        $(".count-to").countTo({
            refreshInterval: 20
        });

    }

});

