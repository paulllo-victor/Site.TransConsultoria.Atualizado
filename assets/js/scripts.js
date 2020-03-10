/*
 * Autor: Jefferson Ricardo / Paulo Victor
 * Versão: 1.0
 * Data de crialçao: 01/01/2020 18:00hs
 * Referência: Folha de estilos (CSS)
 * Conteúdo: Geral
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Facebook: https:// www.facebook.com/jeffersonrmsilva
 * Celular: 81 99668-0318
 *
 *Facebook: https://www.facebook.com/profile.php?id=100004332602666
 * Celular: 81 98657-8987
*/


/*
	! PREPARA O DOCUMENTO
*/
$(window).on('load',function(){
	$(".container-spin").hide();
	$("body").css("overflow","auto");
});
	$(document).ready(function() {
	
	/*
		! MENU DE NAVEGAÇÃO
	*/
	$(document).on("click", ".botao-menu", function () {
		$(".menu-navegacao").show();
		$(".menu-navegacao > ul").addClass("show animated slideInRight");
		$("body").css("overflow", "hidden");
	});
	$(document).on("click", ".botao-fecha-menu", function () {
		$(".menu-navegacao").hide();
		$(".menu-navegacao > ul").removeClass("show");
		$("body").css("overflow", "auto");
	});
	$(document).on("click", ".menu-navegacao a", function () {
		$(".menu-navegacao").removeAttr("style");
		$("body").css("overflow", "auto");
	});
	
	//Remove as ações do menu
	$(window).resize(function () {
		if($(window).width() > 900) {
			$(".menu-navegacao").removeAttr("style");
			$(".menu-navegacao > ul").removeAttr("style");
			$(".menu-navegacao > ul").removeClass("animated slideInRight");
			$("body").css("overflow", "auto");
		}
	});
	/**/
	
	
	
	/*
	 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
	*/



	/*
		! BOTÃO DROPDOWN
	*/

	//Efeito para animação
	$(".dropdown-conteudo").addClass("animated");

	//Abre dropdown
	$(document).on("click", ".botao.dropdown-toggle, a.dropdown-toggle, span.dropdown-toggle", function(e) {
		
	  $(document).on("click", ".dropdown-conteudo a", function () {
		  $('.dropdown-conteudo').removeClass('show');
		  $('li.dropdown a').removeClass('ativo');
	  });
	  $(this).siblings('.dropdown-conteudo').toggleClass('show');
	  $(this).toggleClass('ativo');
	});

	//Fecha os dropdowns abertos
	$(document).click(function(e) {
	  $(".dropdown").not($(".dropdown").has($(e.target))).children(".dropdown-conteudo").removeClass("show");
	  $(".dropdown").not($(".dropdown").has($(e.target))).children(".botao.dropdown-toggle, a.dropdown-toggle, span.dropdown-toggle").removeClass("ativo");
	});

	//Stop Propagação
	$(".dropdown-conteudo.stop").click(function(e) {
	  e.stopPropagation();
	});
	/**/



	/*
	 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
	*/



	/*
		! MENU SCROLLBAR
	*/
	
	//Menu scrollbar
	$(".navegacao li a").on('click', function(e) {

	   // Evento da ancoragem ao clicar
	   e.preventDefault();

	   // Hash
	   var target = $(this).attr("href");

	   // Animação
	   $('html, body').animate({
		   scrollTop: $(target).offset().top
		}, 400, function() {
				location.hash = target;
		});
		 //
		 
	});	
	//Button saiba mais scrollbar
	$(".cabecalho a").on('click', function(e) {

	   // Evento da ancoragem ao clicar
	   e.preventDefault();

	   // Hash
	   var target = $(this).attr("href");

	   // Animação
	   $('html, body').animate({
		   scrollTop: $(target).offset().top
		}, 400, function() {
				location.hash = target;
		});
		 //
		 
	});	
	//
	
	$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Ativa o link da seção na barra de rolagem
		$(".pagina-secao").each(function(i) {
			if ($(this).position().top <= scrollDistance) {
				$('.navegacao li').removeClass('ativo');
				$('.navegacao li').eq(i).addClass('ativo');
			}
		});
	});
	/**/
	
	
	
	/*
	 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
	*/


	
	/*
		! MENU FIXADO AO ROLAR A BARRA
	*/
	
	window.onscroll = function() {myFunction()}
	
	var header = document.getElementById("navegacao");
	var fixado = header.offsetTop;
	
	function myFunction() {
	  if (window.pageYOffset > fixado) {
		header.classList.add("fixado");
	  } else {
		header.classList.remove("fixado");
	  }
	} 
	/**/
	
	
});
// end functions


	
	/*
	 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
	*/


	
	/*
		! CARROSSEL CLIENTES
	*/

	$(document).ready(function(){
		$('.secao-secundaria .slick-slider').slick({
		  infinite: true,	  
	   	  autoplay:true,
		  autoplaySpeed: 3000,
		  slidesToShow: 3,
		  slidesToScroll: 1
		});		
	});

	// end functions

	/*
	 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=
	*/


	
	/*
		! CARROSSEL TESTEMUNHAS
	*/

	$(document).ready(function(){
		$('.secao-secundaria .slick-slider-testumunhas').slick({
		  infinite: true,	  
	   	  autoplay:true,
		  autoplaySpeed: 3000,
		  slidesToShow: 1,
		  slidesToScroll: 1
		});		
	});
	// end functions
