$(function() {

    $('#btn1').click(function() {
        $('#msg1').messager({message: 'infoメッセージです'});
    });
    $('#btn2').click(function() {
        $('#msg2').messager({type: 'warn', message: 'warningメッセージです'});
    });
    $('#btn3').click(function() {
        $('#msg3').messager({type: 'error', message: 'errorメッセージです'});
    });
});


