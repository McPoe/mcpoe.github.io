$(document).ready(function(){
    var dato = 1;
    $("#jqdiv").hide();
    });

$(document).ready(function(){
    var dato = 1; 
    $("#btnhide").click(function() {
        if (dato ==1) {
            $('.jqhide').fadeOut(150); 
            dato = 2; 
        }
        else {
            $('#jqdiv').fadeOut(150);
            $('.jqhide').fadeIn(800);
            dato = 1;
        }
    });
	
	
	
});

$(document).ready(function(){
    var dato = 1; 
    $("#btnhide").click(function() {
        if (dato ==1) {
            $("#jqdiv").fadeIn(800);
            $('#img1').fadeIn(800);
            $('#img2').hide();
            $('#img3').hide();
            $('#img4').hide();
            $('#img5').hide();
            $('#img6').hide();
            $('#panel').hide();
            dato = 2;
        }
        else {
            $('#jqdiv').fadeOut(150);
            $('.jqhide').fadeIn(800);
            dato = 1;
        }
    });
});

$(document).ready(function(){
    var dato = 2; 
    $("#btnhide").click(function() {
        if (dato ==2) {
            $('#btnhide').text("Ocultar"); 
            dato = 1; 
        }
        else {
            $('#btnhide').text("Mostrar");
            dato = 2;
        }
    });
});

$(document).ready(function(){
    var dato = 1; 
    $("#btnshow").click(function() {
        if (dato ==1) {
            $('#panel').show(500);
            dato = 2; 
        }
        else {
            $('#panel').hide(500)
            dato = 1;
        }
    });
});

$(document).ready(function(){
    var dato = 3; 
    $("#btnsx").click(function() {
        if (dato ==3) {
            $('#img1').hide();
            $('#img2').show();
            $('#img3').hide();
            $('#img4').hide();
            $('#img5').hide();
            $('#img6').hide();
            dato = 4; 
        }
        else {
            $('#img1').show();
            $('#img2').hide();
            $('#img3').hide();
            $('#img4').hide();
            $('#img5').hide();
            $('#img6').hide();
            dato = 3;
        }
    });
});

$(document).ready(function(){
    var dato = 5; 
    $("#btnstd").click(function() {
        if (dato ==5) {
            $('#img1').hide();
            $('#img2').hide();
            $('#img3').show();
            $('#img4').hide();
            $('#img5').hide();
            $('#img6').hide();
            dato = 6; 
        }
        else {
            $('#img1').hide();
            $('#img2').hide();
            $('#img3').hide();
            $('#img4').show();
            $('#img5').hide();
            $('#img6').hide();
            dato = 5;
        }
    });
});

$(document).ready(function(){
    var dato = 7; 
    $("#btncvl").click(function() {
        if (dato ==7) {
            $('#img1').hide();
            $('#img2').hide();
            $('#img3').hide();
            $('#img4').hide();
            $('#img5').show();
            $('#img6').hide();
            dato = 8; 
        }
        else {
            $('#img1').hide();
            $('#img2').hide();
            $('#img3').hide();
            $('#img4').hide();
            $('#img5').hide();
            $('#img6').show();
            dato = 7;
        }
    });
});

$(document).ready(function(){
	$(".item").click(function(){
		var lista = '<li>'+$(this).closest('.dropdown').children('a').text()+'</li><li>'+$(this).text()+'</li>';
		$("#barra").html(lista+
						'<li class="pull-right">'+
							'<div class="btn-group ">'+									  
								'<button type="button" class="btn dropdown-toggle button-padding" data-toggle="dropdown" aria-haspopup="true" aria expanded="false" id="btn-log">'+
								'<i class="fa fa-user"></i>'+
								'<span class="sr-only">Toggle Dropdown</span>'+
					            '</button>'+
						        '<ul class="dropdown-menu margin_negative">'+
							       '<li><a href="#">Cerrar Sesión</a></li>'+
						        '</ul>'+
					       '</div>'+
                        '</li>');
	});
});
