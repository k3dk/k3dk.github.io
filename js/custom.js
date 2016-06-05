$( document ).ready(function() {
    var soundsArray = ['kaval','supelka','duduk','zurla','gajda'];
    var rand = soundsArray[Math.floor(Math.random() * soundsArray.length)];
    var index = soundsArray.indexOf(rand);
        var kaval_button = document.getElementById('kaval');
        var duduk_button = document.getElementById('duduk');
        var supelka_button = document.getElementById('supelka');
        var zurla_button = document.getElementById('zurla');
        var gajda_button = document.getElementById('gajda');
        var kaval1= document.getElementById('kaval_zvuk');
        var duduk1= document.getElementById('duduk_zvuk');
        var gajda1= document.getElementById('gajda_zvuk');
        var supelka1= document.getElementById('supelka_zvuk');
        var zurla1= document.getElementById('zurla_zvuk');
    var oneS = soundsArray[0];
    var twoS = soundsArray[1];
    var threeS = soundsArray[2];
    var fourS = soundsArray[3];
    var fiveS = soundsArray[4];

    $( "#random" ).click(function() {
        var rand = soundsArray[Math.floor(Math.random() * soundsArray.length)];
        var index = soundsArray.indexOf(rand);

        if(index>-1){
            var list = document.getElementById('test');
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(rand));
            switch (rand) {
                case 'kaval':
                    kaval1.play();
                    kaval1.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                kaval1.play();
                    // $(".hereSounds").html('Play sound 1');
                    break;
                case 'supelka':
                    supelka1.play();
                    supelka1.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                supelka1.play();
                    // $(".hereSounds").html('Play sound 2');
                    break;
                case 'duduk':
                    duduk1.play();
                    duduk1.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                duduk1.play();
                    // $(".hereSounds").html('Play sound 3');
                    break;
                case 'zurla':
                    zurla1.play();
                    zurla1.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                zurla1.play();
                    // $(".hereSounds").html('Play sound 4');
                    break;
                case 'gajda':
                    gajda1.play();
                    gajda1.addEventListener('ended', function() {
                    this.currentTime = 0;
                    this.play();
                }, false);
                gajda1.play();
                    // $(".hereSounds").html('Play sound 5');
                    break;
                default:

            }
            list.appendChild(entry);
            soundsArray.splice(index,1);
        }
        // var click1=7;
        $("#kaval").click(function(){

            if(rand=='kaval'){
                kaval1.pause();
                kaval1.currentTime = 0;
                $('#kaval>i').addClass('fa fa-check');
                $('#kaval').attr("disabled", true);
            }

        });
        $("#supelka").click(function(){

            if(rand=='supelka'){
                supelka1.pause();
                supelka1.currentTime = 0;
                $('#supelka>i').addClass('fa fa-check');
                $('#supelka').attr("disabled", true);
            }

        });
        $("#duduk").click(function(){

            if(rand=='duduk'){
                duduk1.pause();
                duduk1.currentTime = 0;
                $('#duduk>i').addClass('fa fa-check');
                $('#duduk').attr("disabled", true);
            }

        });
        $("#zurla").click(function(){

            if(rand=='zurla'){
                zurla1.pause();
                zurla1.currentTime = 0;
                $('#zurla>i').addClass('fa fa-check');
                $('#zurla').attr("disabled", true)
            }
        });
        $("#gajda").click(function(){

            if(rand=='gajda'){
                gajda1.pause();
                gajda1.currentTime = 0;
                $('#gajda>i').addClass('fa fa-check');
                $('#gajda').attr("disabled", true)
            }
        });
    });


    // $( "#random" ).click(function() {
    //     var rand = soundsArray[Math.floor(Math.random() * soundsArray.length)];
    //     $(".hereSounds").html(rand);
    // });





});
