var quesos = [
	{
		nombre :"Euro",
		tipos:[
			{
				nombre: "Normal",
				precio: 10
			}
		]
	},
    {
        nombre :"Criollo",
        tipos:[
        	{
				nombre:"Suave",
				precio: 20
			},
			{
				nombre:"Blando",
				precio: 80
			}
			]
    },
    {
        nombre :"Andino",
        tipos:[
        	{
				nombre:"Blando",
				precio: 35
        	},
            {
                nombre:"Semiduro",
                precio: 12
            }]
    },
    {
        nombre :"Paria",
        tipos:[{
            nombre: "Normal",
            precio: 19
        }]
    },
    {
        nombre :"Suizo",
        tipos:[{
            nombre: "Normal",
            precio: 12
        }]
    },
    {
        nombre :"Parmesano",
        tipos:[
        	{
            nombre:"Criollo",
            precio: 12
        	},
            {
                nombre:"Andino",
                precio: 17
            }
		]
    }
];


$(document).ready(function(){
	var altura = $('.menu').offset().top;
	$(window).on('scroll', function(){
		if ($(window).scrollTop()>altura) {
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});

$("#pedidosForm").on("submit",function  (e) {
	e.preventDefault();
	//emailjs.sendForm("gmail", "template_myZ8ZahM","pedidosForm");
    $("#pedidosForm")[0].reset();
    $("#myModal").modal();

});

/*
* Inicio eventos de comboBox en pedidos
*
*/
$('#cheese').on('change', function() {
    var valor = this.value;
    if(valor!="") {
        llenarComboTiposQueso(valor);
        calcularCosto();
    }
});
$('#weight').on('change', function() {
    var valor = this.value;
    if(valor!="") {
        calcularCosto();
    }
});
function llenarComboTiposQueso() {
	var res = getQuesoSel();
	var tipos = res.tipos;

	console.log(tipos);
    $("#typeCheese").html("");

    tipos.forEach( function(valor, indice) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
        var itemval= '<option value="'+valor.nombre+'">'+valor.nombre+'</option>';
        $("#typeCheese").append(itemval);
    });
}

function getQuesoSel() {
    return quesos.find(buscarQuesoSel);
}
function buscarQuesoSel(queso) {
    var value = $('#cheese').val();
	return queso.nombre === value;
}

function getTipoQuesoSel() {
    var quesoSel = getQuesoSel();
    if(quesoSel!=null){
        return quesoSel.tipos.find(buscarTipoQuesoSel)
    }
}

function buscarTipoQuesoSel(tipoQueso) {
    var value = $('#typeCheese').val();
    return tipoQueso.nombre === value;
}



/*
 * Fin eventos de comboBox en pedidos
 *
 */

$('#amount').keyup(function() {
    calcularCosto();
});
function calcularCosto() {
    if(sePuedeCalcularCosto()){
        var peso = parseFloat($('#weight').val());
        var cantidad =  parseFloat($('input[name=amount]').val());

        var precioXgramo = parseFloat(getTipoQuesoSel().precio) /1000;
        var precioTotal = precioXgramo*cantidad*peso;

        var res = esNumero(precioTotal)? precioTotal:"";
        $("#cost").val(precioTotal);
    }
    else {
        $("#cost").val("");
    }
}



function sePuedeCalcularCosto() {
    if(esNull(getQuesoSel()) ){
        return false;
    }
    if(esNull(getTipoQuesoSel())){
        return false;
    }
    if(!esNumero($('#weight').val())){
        return false;
    }
    if(!esNumero($("#amount").val())){
        return false;
    }
    return true;
}

function esNumero(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function esNull(value) {
    return value == null;
}