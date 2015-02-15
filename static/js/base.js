var modality, person;

var byopsee = {
    init: function(){
        $('.continue').click(function(event){
            event.preventDefault();
            var href = $(this).attr('href');
            if(href == '#results'){
                $('.active').removeClass('active');
                $('#loading').addClass('active');
                setTimeout(function () {
                    $('.active').removeClass('active');
                    $(href).addClass('active');
                }, 2000);
            } else {
                $('.active').removeClass('active');
                $(href).addClass('active');
            }
        });
    }
};


$( document ).ready(function() {
    byopsee.init();
});


$('#getquery').click(function(){
    $query = $('#query').val();

    if($query){
        $('.active').removeClass('active');
        $('#loading').addClass('active');

        $.get('/modality/' + $query , function(data) {
            console.log(data);
            modality = +data;
            setTimeout(function() {
                $('.active').removeClass('active');
                $('#results').addClass('active');

                if(modality >= -1 && modality <= -0.33) {
                    console.log(1);
                    person = 1;
                }
                if(modality > -0.33 && modality <= 0.33) {
                    console.log(2);
                    person = 2;
                }
                if(modality > 0.33 && modality <= 1) {
                    console.log(3);
                    person = 3;
                }

                $('#person' + person).addClass('recommended');

            }, 1000);
        });
    } else {
        $('#query').css({
            'border': '2px solid red'
        });
    }

    return false;

});
