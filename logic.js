$(document).ready(function () {
    var value = ''
    var flavour = ''
    var layer = ''
    $('.list').click(function () {
        value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        }
        else {
            $(`.itemBox`).not(`.${value}`).hide('1000');
            $(`.itemBox`).filter(`.${value}`).show('1000');
        }
    })
    $('.list2').click(function () {
        flavour = $(this).attr('data-flavour');
        // console.log(`${value} ${flavour}`);
        if (flavour == 'allFlavours') {
            $(`.itemBox`).not(`.${value}`).hide('1000');
            $(`.itemBox`).filter(`.${value}`).show('1000');
        }
        else {
            $(`.itemBox`).filter(`.${value}.${flavour}`).show('1000');
            $(`.itemBox`).not(`.${value}.${flavour}`).hide('1000');
        }

    })
    $('.list3').click(function () {
        layer = $(this).attr('data-layer');
        // console.log(`${value} ${flavour} ${layer}`);
        if (layer == 'allLayers') {
            $(`.itemBox`).filter(`.${value}.${flavour}`).show('1000');
            $(`.itemBox`).not(`.${value}.${flavour}`).hide('1000');
        }
        else {
            $(`.itemBox`).filter(`.${value}.${flavour}.${layer}`).show('1000');
            $(`.itemBox`).not(`.${value}.${flavour}.${layer}`).hide('1000');
        }
    })

    //only to change color of selected
    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.list2').removeClass('active').first().addClass('active');
        $('.list3').removeClass('active').first().addClass('active');

    })
    $('.list2').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.list3').removeClass('active').first().addClass('active');
    })
    $('.list3').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

})
