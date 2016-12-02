function hideAllTooltips(exceptItems) {
    exceptItems = exceptItems || [];

    exceptItems.indexOf('.b-notifications__list') === -1 && $('.b-notifications__list').hide();
    exceptItems.indexOf('.b-user-panel__menu') === -1 && $('.b-user-panel__menu').hide();

    $('.b-submenu__list').hide();
}

function handleTodoListItemClick($item) {
    var $checkbox = $item.find('input[type=checkbox]');

    if ($item.hasClass('_completed')) {
        $checkbox.prop('checked', false);
        $item.removeClass('_completed');
    }
    else {
        $checkbox.prop('checked', true);
        $item.addClass('_completed');
    }
}



$(function () {

    $('html').on('click', function () {
        hideAllTooltips();
    });


    // Notifications
    $('.b-notifications__icon').on('click', function (e) {
        hideAllTooltips(['.b-notifications__list']);
        e.preventDefault();
        e.stopPropagation();

        $('.b-notifications__list').toggle();
    });


    // User panel
    $('.b-user-panel__name').on('click', function (e) {
        hideAllTooltips(['.b-user-panel__menu']);
        e.preventDefault();
        e.stopPropagation();

        $('.b-user-panel__menu').toggle();
    });


    // Search form
    $('.b-search-form').on('submit', function () {
        hideAllTooltips();
        if (!$(this).hasClass('b-search-form_focused')) {
            $(this).addClass('b-search-form_focused');
            $('.b-search-form__input').focus();
            return false;
        }
    });
    $('.b-search-form__input').on('focus', function () {
        hideAllTooltips();
        $('.b-search-form').addClass('b-search-form_focused');
    });
    $('.b-search-form__input').on('blur', function () {
        hideAllTooltips();
        if (!$(this).val()) {
            $('.b-search-form').removeClass('b-search-form_focused');
        }
    });


    // Menu
    $('.b-menu__list-item a + .b-submenu__list').each(function (index, submenu) {
        var $submenu = $(submenu)
          , $link = $submenu.prev();

        console.log($link);

        $link.on('click', function (e) {
            hideAllTooltips();
            e.preventDefault();
            e.stopPropagation();

            $submenu.show();
        });
    });


    // Sidebar
    $('.b-sidebar__toggler').on('click', function (e) {
        hideAllTooltips();
        e.preventDefault();
        e.stopPropagation();

        $('.b-sidebar').toggleClass('b-sidebar_opened');
    });

    $('.b-sidebar__overlay').on('click', function (e) {
        hideAllTooltips();
        e.preventDefault();
        e.stopPropagation();

        $('.b-sidebar').removeClass('b-sidebar_opened');
    });


});

     // change skins     
    $('body').on('click', '.template-skins > a', function(e){
        e.preventDefault();
        var skin = $(this).attr('data-skin');
        $('body').attr('id', skin);
        $('#changeSkin').modal('hide');
        $('body').removeClass();
        $('body').addClass(skin)
    });