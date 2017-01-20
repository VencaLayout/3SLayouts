// ==== Choisir taille et quantité logique ==== //
$(function(){
    $('ul#choisirQuantite > li').on('click', function(e){
        e.preventDefault();
        var quantite = $(this).text();
        $('#selectedQuantite').text(quantite);

        $('#addToBasket').css('background', '#008A38');
    });
});

// ==== THumbnails Zoom and images logique ==== //
$(function(){
    $('div#productThumbnails2 > img').on('click', function(){

        $('[id^=selector-]').removeClass('selected');
        $(this).addClass('selected');

        var newImage = $(this).attr('src');
        $('a.big > img').attr('src', newImage);
    });

    $('#Div1 > a > img').on('click', function(){

        $('[id^=selectorz-]').removeClass('selected');
        $(this).addClass('selected');

        var newImage = $(this).attr('src');
        $('div.item > img').attr('src', newImage);
    });
});
