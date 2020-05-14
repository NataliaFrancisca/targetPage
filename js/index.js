var tituloPrincipal = document.querySelector(".titulo-principal");
var subtitulo = document.querySelector(".subtitulo-principal");


tituloPrincipal.onmouseover = function(){
	subtitulo.style.display = 'block';
}



$("#botao-inicio").click(mostraInicio);
$("#botao-sobre").click(mostraSobre);
$("#botao-servicos").click(mostraServicos);
$("#botao-contato").click(mostraContato);


function mostraInicio(){
var target_offset = $(".paginaInicial").offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 1000);
}

function mostraSobre(){
var target_offset = $(".sobreNos").offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 1000);
}

function mostraServicos(){
var target_offset = $(".servicos").offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 2000);

}

function mostraContato(){
var target_offset = $(".contato").offset();
var target_top = target_offset.top;
$('html, body').animate({ scrollTop: target_top }, 2000);

}



//animação da tela//
var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.anime'),
			animationClass = 'anime-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	
	animeScroll();
	
	$(document).scroll(function() {
		setTimeout(function() {
			animeScroll()
		}, 250);
	});
});