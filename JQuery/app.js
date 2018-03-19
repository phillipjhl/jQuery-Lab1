$(document).ready(function () {
    //Number 1
    let $firstBtn = $('<button>Alert!</button>');
    $($firstBtn).appendTo('#div1');
    $($firstBtn).attr('id', 'first-btn');
    $('button#first-btn').click(function () {
        alert('Hello there!');
    });

    //Number 2
    let $secBtn = $('#sec-btn');
    let $textArea = $('#text-area');
    $($secBtn).click(function () {
        alert('General Kenobi!');
    });

    //Number 3
    let $box = $('#box');
    $('#box').css({
        'background-color': 'black',
        'height': '30px',
        'width': '30px',
        'margin': '1em'
    });
    $('#box').mouseenter(function () {
        $('#box').css('background-color', 'orange');
        $('#box').mouseleave(function () {
            $('#box').css('background-color', 'black');
        });
    });

    //Number 4
    
    let $text = $('#text');
    $('#text').click(function () {
        let color = "#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6);
        $('#text').css('color', '' + color + '');
    });

    //Number 5

    let $thirdBtn = $('<button>Add Span</button>');
    $($thirdBtn).appendTo('#div5');
    let $newDiv = $('<div id = "div5-1"></div>');
    $($newDiv).appendTo("#div5");
    let $span = $('<span>Phillip Langland</span>');
    $($thirdBtn).click(function() {
        $($span).appendTo('#div5-1');
    });

    //Number 6

    let $ulBtn = $("#ul-btn");
    let $ul = $("#ul");
    let friends = ['Katrina', 'Walt', 'Denis', 'Hank', 'Jacob', 'Martin', 'Eric', 'Andrew', 'Hayden', 'Reagan'];
    $($ulBtn).click(function () {
        for (i=0;i<friends.length;i++) {
            let $item = $('<li>' + friends[i] + '</li>');
            $($item).appendTo('#ul');
        }
    });
});