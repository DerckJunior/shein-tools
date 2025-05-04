
$(document).ready(function () {

    $('#caixa').load('https://www.millenniumbim.co.mz/pt/mass-market .investments--box--rates-content--card-one');

});

let form = $('#formulario');

form.submit(function (e) {

    e.preventDefault();




});


function OnClick() {

    var preco = window.document.getElementById('preco').value;

    var cambio = window.document.getElementById('cambio').value;

    preco = preco.replace(',','.');
    cambio = cambio.replace(',','.');

    var resultado = preco * cambio;

    var resultado_cliente = resultado + (resultado * 0.45);

    window.document.getElementById('resultado').innerText = 'O valor a pagar dentro do aplicativo e ' + resultado.toFixed(2) + 'MT';

    window.document.getElementById('resultado_cliente').innerText = 'O valor a cobrar ao cliente e ' + resultado_cliente.toFixed(2) + 'MT';
    
}


// .investments--box--rates-content .investments--box--rates-content--card-one .rates--body .rates--body--values .buy