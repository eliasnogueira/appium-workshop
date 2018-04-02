$(document).ready(function () {
    $('.collapsible-header').collapsible();
});

function a_onClick() {
    $('#duvidas').click();
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

var greenItem = 'light-green lighten-5'

$('#check_instalacao_java').click(function () {
    this.checked === true ? $('#instalacao_java').addClass(greenItem) : $('#instalacao_java').removeClass(greenItem);
});

$('#check_configuracao_java').click(function () {
    this.checked === true ? $('#configuracao_java').addClass(greenItem) : $('#configuracao_java').removeClass(greenItem);
});

$('#check_ide').click(function () {
    this.checked === true ? $('#ide').addClass(greenItem) : $('#ide').removeClass(greenItem);
});

$('#check_android_studio').click(function () {
    this.checked === true ? $('#android_studio').addClass(greenItem) : $('#android_studio').removeClass(greenItem);
});

$('#check_atualizar_android_sdk').click(function () {
    this.checked === true ? $('#atualizar_android_sdk').addClass(greenItem) : $('#atualizar_android_sdk').removeClass(greenItem);
});

$('#check_configurar_android_sdk').click(function () {
    this.checked === true ? $('#configurar_android_sdk').addClass(greenItem) : $('#configurar_android_sdk').removeClass(greenItem);
});

$('#check_genymotion').click(function () {
    this.checked === true ? $('#genymotion').addClass(greenItem) : $('#genymotion').removeClass(greenItem);
});

$('#check_bibliotecas').click(function () {
    this.checked === true ? $('#bibliotecas').addClass(greenItem) : $('#bibliotecas').removeClass(greenItem);
});

$('#check_instalar_nodejs').click(function () {
    this.checked === true ? $('#instalar_nodejs').addClass(greenItem) : $('#instalar_nodejs').removeClass(greenItem);
});

$('#check_appium_nodejs').click(function () {
    this.checked === true ? $('#instalar_appium_nodejs').addClass(greenItem) : $('#instalar_appium_nodejs').removeClass(greenItem);
});

$('#check_appium_desktop').click(function () {
    this.checked === true ? $('#instalar_appium_desktop').addClass(greenItem) : $('#instalar_appium_desktop').removeClass(greenItem);
});