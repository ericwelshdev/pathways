
    //$('#calendar').fullCalendar({
    //    // put your options and callbacks here
//})

var fullviewcalendar;

var handleCalendar = function () {


    // full calendar

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();



    var hdr = {
        left: 'month,agendaWeek,agendaDay',
        center: 'title',
        right: 'prev,today,next'
    };

    var initDrag = function (e) {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end

        var eventObject = {
            title: $.trim(e.children().text()), // use the element's text as the event title
            description: $.trim(e.children('span').attr('data-description')),
            icon: $.trim(e.children('span').attr('data-icon')),
            className: $.trim(e.children('span').attr('class')) // use the element's children as the event class
        };
        // store the Event Object in the DOM element so we can get to it later
        e.data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        e.draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });
    };

    var addEvent = function (title, priority, description, icon) {
        title = title.length === 0 ? "Untitled Event" : title;
        description = description.length === 0 ? "No Description" : description;
        icon = icon.length === 0 ? " " : icon;
        priority = priority.length === 0 ? "label label-default" : priority;

        var html = $('<li><span class="' + priority + '" data-description="' + description + '" data-icon="' +
            icon + '">' + title + '</span></li>').prependTo('ul#external-events').hide().fadeIn();

        $("#event-container").effect("highlight", 800);

        initDrag(html);
    };

    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events > div').each(function () {
        initDrag($(this));
    });

    $('#add-event').click(function () {
        var title = $('#title').val(),
            priority = $('input:radio[name=priority]:checked').val(),
            description = $('#description').val(),
            icon = $('input:radio[name=iconselect]:checked').val();

        addEvent(title, priority, description, icon);
    });


   
        //$('#external-events .fc-event').each(function () {
        //    $(this).data('event', {
        //        title: $.trim($(this).text()),
        //        stick: !0,
        //        color: $(this).attr('data-color') ? $(this).attr('data-color') : ''
        //    }),
        //    $(this).draggable({
        //        zIndex: 999,
        //        revert: !0,
        //        revertDuration: 0
        //    });




    /* initialize the calendar
     -----------------------------------------------------------------*/

    fullviewcalendar = $('#calendar').fullCalendar({

        header: hdr,
        buttonText: {
            prev: '<i class="fa fa-chevron-left"></i>',
            next: '<i class="fa fa-chevron-right"></i>'
        },

        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!

        drop: function (date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },

        select: function (start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent', {
                    title: title,
                    start: start,
                    end: end,
                    allDay: allDay
                }, true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },

        events: [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            description: 'long description',
            className: ["event", "bg-color-greenLight"],
            icon: 'fa-check'
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            className: ["event", "bg-color-red"],
            icon: 'fa-lock'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            className: ["event", "bg-color-blue"],
            icon: 'fa-clock-o'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false,
            className: ["event", "bg-color-blue"],
            icon: 'fa-clock-o'
        }, {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            className: ["event", "bg-color-darken"]
        }, {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            className: ["event", "bg-color-darken"]
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: ["event", "bg-color-darken"]
        }, {
            title: 'Smartadmin Open Day',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: ["event", "bg-color-darken"]
        }],

        eventRender: function (event, element, icon) {
            if (!event.description == "") {
                element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description +
                    "</span>");
            }
            if (!event.icon == "") {
                element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon +
                    " '></i>");
            }
        },

        windowResize: function (event, ui) {
            $('#calendar').fullCalendar('render');
        }
    });

    /* hide default buttons */
    $('.fc-header-right, .fc-header-center').hide();



    $('#calendar-buttons #btn-prev').click(function () {
        $('.fc-button-prev').click();
        return false;
    });

    $('#calendar-buttons #btn-next').click(function () {
        $('.fc-button-next').click();
        return false;
    });

    $('#calendar-buttons #btn-today').click(function () {
        $('.fc-button-today').click();
        return false;
    });

    $('#mt').click(function () {
        $('#calendar').fullCalendar('changeView', 'month');
    });

    $('#ag').click(function () {
        $('#calendar').fullCalendar('changeView', 'agendaWeek');
    });

    $('#td').click(function () {
        $('#calendar').fullCalendar('changeView', 'agendaDay');
    });

};

// end pagefunction


    //var handleCalendar = function () {
    //    $('#external-events .fc-event').each(function () {
    //        $(this).data('event', {
    //            title: $.trim($(this).text()),
    //            stick: !0,
    //            color: $(this).attr('data-color') ? $(this).attr('data-color') : ''
    //        }),
    //        $(this).draggable({
    //            zIndex: 999,
    //            revert: !0,
    //            revertDuration: 0
    //        })
    //    });


    //    var t = new Date,
    //    e = t.getFullYear(),
    //    a = t.getMonth() + 1;
    //    a = 10 > a ? '0' + a : a,
    //    $('#calendar').fullCalendar({
    //        header: {
    //            left: 'month,agendaWeek,agendaDay',
    //            center: 'title',
    //            right: 'prev,today,next '
    //        },
    //        droppable: !0,
    //        drop: function () {
    //            $(this).remove()
    //        },
    //        selectable: !0,
    //        selectHelper: !0,
    //        //select: function (t, e) {
    //        //    var a,
    //        //    r = prompt('Event Title:');
    //        //    r && (a = {
    //        //        title: r,
    //        //        start: t,
    //        //        end: e
    //        //    }, $('#calendar').fullCalendar('renderEvent', a, !0)),
    //        //    $('#calendar').fullCalendar('unselect')
    //        //},


    //                select: function (start, end, allDay) {
    //                    var title = prompt('Event Title:');
    //                    if (title) {
    //                        calendar.fullCalendar('renderEvent', {
    //                            title: title,
    //                            start: start,
    //                            end: end,
    //                            allDay: allDay
    //                        }, true // make the event "stick"
    //                        );
    //                    }
    //                    calendar.fullCalendar('unselect');
    //                },


    //        editable: !0,
    //        eventLimit: !0,
    //        //events: [{
    //        //                title: 'All Day Event',
    //        //                start: new Date(y, m, 1),
    //        //                description: 'long description',
    //        //                className: ["event", "bg-color-greenLight"],
    //        //                icon: 'fa-check'
    //        //            }, {
    //        //                title: 'Long Event',
    //        //                start: new Date(y, m, d - 5),
    //        //                end: new Date(y, m, d - 2),
    //        //                className: ["event", "bg-color-red"],
    //        //                icon: 'fa-lock'
    //        //            }, {
    //        //                id: 999,
    //        //                title: 'Repeating Event',
    //        //                start: new Date(y, m, d - 3, 16, 0),
    //        //                allDay: false,
    //        //                className: ["event", "bg-color-blue"],
    //        //                icon: 'fa-clock-o'
    //        //            }, {
    //        //                id: 999,
    //        //                title: 'Repeating Event',
    //        //                start: new Date(y, m, d + 4, 16, 0),
    //        //                allDay: false,
    //        //                className: ["event", "bg-color-blue"],
    //        //                icon: 'fa-clock-o'
    //        //            }, {
    //        //                title: 'Meeting',
    //        //                start: new Date(y, m, d, 10, 30),
    //        //                allDay: false,
    //        //                className: ["event", "bg-color-darken"]
    //        //            }, {
    //        //                title: 'Lunch',
    //        //                start: new Date(y, m, d, 12, 0),
    //        //                end: new Date(y, m, d, 14, 0),
    //        //                allDay: false,
    //        //                className: ["event", "bg-color-darken"]
    //        //            }, {
    //        //                title: 'Birthday Party',
    //        //                start: new Date(y, m, d + 1, 19, 0),
    //        //                end: new Date(y, m, d + 1, 22, 30),
    //        //                allDay: false,
    //        //                className: ["event", "bg-color-darken"]
    //        //            }, {
    //        //                title: 'Smartadmin Open Day',
    //        //                start: new Date(y, m, 28),
    //        //                end: new Date(y, m, 29),
    //        //                className: ["event", "bg-color-darken"]
    //        //            }],

    //        //            eventRender: function (event, element, icon) {
    //        //                if (!event.description == "") {
    //        //                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description +
    //        //                        "</span>");
    //        //                }
    //        //                if (!event.icon == "") {
    //        //                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon +
    //        //                        " '></i>");
    //        //                }
    //        //            },

    //        //            windowResize: function (event, ui) {
    //        //                $('#calendar').fullCalendar('render');
    //        //            }
    //        //        });


    //        events: [
    //          {
    //              title: 'All Day Event',
    //              start: e + '-' + a + '-01',
    //              color: '#00acac'
    //          },
    //          {
    //              title: 'Long Event',
    //              start: e + '-' + a + '-07',
    //              end: e + '-' + a + '-10'
    //          },
    //          {
    //              id: 999,
    //              title: 'Repeating Event',
    //              start: e + '-' + a + '-09T16:00:00',
    //              color: '#00acac'
    //          },
    //          {
    //              id: 999,
    //              title: 'Repeating Event',
    //              start: e + '-' + a + '-16T16:00:00'
    //          },
    //          {
    //              title: 'Conference',
    //              start: e + '-' + a + '-11',
    //              end: e + '-' + a + '-13'
    //          },
    //          {
    //              title: 'Meeting',
    //              start: e + '-' + a + '-12T10:30:00',
    //              end: e + '-' + a + '-12T12:30:00',
    //              color: '#00acac'
    //          },
    //          {
    //              title: 'Lunch',
    //              start: e + '-' + a + '-12T12:00:00',
    //              color: '#348fe2'
    //          },
    //          {
    //              title: 'Meeting',
    //              start: e + '-' + a + '-12T14:30:00'
    //          },
    //          {
    //              title: 'Happy Hour',
    //              start: e + '-' + a + '-12T17:30:00'
    //          },
    //          {
    //              title: 'Dinner',
    //              start: e + '-' + a + '-12T20:00:00'
    //          },
    //          {
    //              title: 'Birthday Party',
    //              start: e + '-' + a + '-13T07:00:00'
    //          },
    //          {
    //              title: 'Click for Google',
    //              url: 'http://google.com/',
    //              start: e + '-' + a + '-28',
    //              color: '#ff5b57'
    //          }
    //        ]
    //    })
    //},
    Calendar = function () {
        'use strict';
        return {
            init: function () {
                handleCalendar()
            }
        }
    }();


