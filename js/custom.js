$(document).ready(function () {
    let soundsArray = ['kaval', 'supelka', 'duduk', 'zurla', 'gajda'];
    let rand = soundsArray[Math.floor(Math.random() * soundsArray.length)];
    let index = soundsArray.indexOf(rand);
    let kaval1 = document.getElementById('kaval_zvuk');
    let duduk1 = document.getElementById('duduk_zvuk');
    let gajda1 = document.getElementById('gajda_zvuk');
    let supelka1 = document.getElementById('supelka_zvuk');
    let zurla1 = document.getElementById('zurla_zvuk');
    let disabledbutton = 0;
    let numberElem = soundsArray.length;

    /**
     *
     * @param instrument
     */
    function playInstrument(instrument) {
        instrument.play();
        instrument.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        instrument.play();
    }

    $("#random").click(function () {
        let rand = soundsArray[Math.floor(Math.random() * soundsArray.length)];
        let index = soundsArray.indexOf(rand);

        if (index > -1) {
            let list = document.getElementById('test');
            let entry = document.createElement('li');
            entry.appendChild(document.createTextNode(rand));
            switch (rand) {
                case 'kaval':
                    playInstrument(kaval1);
                    break;
                case 'supelka':
                    playInstrument(supelka1);
                    break;
                case 'duduk':
                    playInstrument(duduk1);
                    break;
                case 'zurla':
                    playInstrument(zurla1);
                    break;
                case 'gajda':
                    playInstrument(gajda1);
                    break;
                default:

            }
            list.appendChild(entry);
            soundsArray.splice(index, 1);
        }

        function checkAndAlert() {
            if (disabledbutton === numberElem) {
                swal({
                    title: "Победник!",
                    text: "Ги погодивте сите инструменти!",
                    type: "success",
                    confirmButtonText: "ВО РЕД"
                });
            }
        }

        /**
         *
         * @param instrumentString
         * @param instrumentSelectorVar
         * @param instrumentSelector
         */
        function checkClick(instrumentString, instrumentSelectorVar, instrumentSelector) {
            if (rand === instrumentString) {
                instrumentSelectorVar.pause();
                instrumentSelectorVar.currentTime = 0;
                $(instrumentSelector + '>i').addClass('fa fa-check');
                $(instrumentSelector + '_check').show();
                $(instrumentSelector).attr("disabled", true);
                if ($(instrumentSelector).prop('disabled')) {
                    disabledbutton++;
                    checkAndAlert();
                }
            }
        }

        $("#kaval").click(function () {
            checkClick('kaval', kaval1, '#kaval');
        });
        $("#supelka").click(function () {
            checkClick('supelka', supelka1, '#supelka');
        });
        $("#duduk").click(function () {
            checkClick('duduk', duduk1, '#duduk');

        });
        $("#zurla").click(function () {
            checkClick('zurla', zurla1, '#zurla');
        });
        $("#gajda").click(function () {
            checkClick('gajda', gajda1, '#gajda');
        });
    });
});
