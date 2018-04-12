function RemoveBanner() {
    $('.tm-gate').remove();
    $('html').css('overflow', 'scroll');
    console.log("CRIADO POR KAUE MENDES 3");
}

$(document).ready(function(){
    setTimeout(function(){
        RemoveBanner()
    }, 15000);
});