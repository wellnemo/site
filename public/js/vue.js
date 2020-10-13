var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
        isSound: true,
        isLoad: false,
        hoverBlue: false,
        hoverRed: false,
        Step: 0
    }
});

function sound() {

    var audio = new Audio();
    audio.src = 'sound/00477.mp3';
    if (this.app.isSound) {
        audio.autoplay = true;
    }
};

var knopka = {
    el: null,

    init: function() {
        knopka.el = $('.btn');

        $(knopka.el).hover(function() {
            var el = $(this);

            if (el.hasClass('btn-red')) {
                kubik.state.two();
            } else {
                kubik.state.one();
            }
        }, function() {
            kubik.state.default();
        });
    }
};

var kubik = {
    _el: null,
    _default: {
        class: null,
    },

    vrashenie: function() {},
    show: function() {
        kubik._el.addClass('visible');
        kubik._el.show();
    },
    hide: function() {
        kubik._el.removeClass("hidden");

        kubik._el.hide();
    },

    state: {
        default: function() {
            kubik._el.attr('class', kubik._default.class);
        },
        one: function() {
            kubik._el.addClass('cubblue');
        },
        two: function() {
            kubik._el.addClass('cubred');
        },
    },

    init: function() {
        kubik._el = $('.jsKubik');

        kubik._default.class = kubik._el.attr('class');
    }
};