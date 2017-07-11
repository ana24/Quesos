var quesos = [
	{
		nombre :"Euro",
		tipos:[
			{
				nombre: "Normal",
				precio: 0
			}
		]
	},
    {
        nombre :"Criollo",
        tipos:[
        	{
				nombre:"Suave",
				precio: 0
			},
			{
				nombre:"Blando",
				precio:0
			}
			]
    },
    {
        nombre :"Andino",
        tipos:[
        	{
				nombre:"Blando",
				precio: 0
        	},
            {
                nombre:"Semiduro",
                precio:0
            }]
    },
    {
        nombre :"Paria",
        tipos:[{
            nombre: "Normal",
            precio: 0
        }]
    },
    {
        nombre :"Suizo",
        tipos:[{
            nombre: "Normal",
            precio: 0
        }]
    },
    {
        nombre :"Parmesano",
        tipos:[
        	{
            nombre:"Criollo",
            precio: 0
        	},
            {
                nombre:"Andino",
                precio: 0
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

$('#cheese').on('change', function() {
    var valor = this.value;
    if(valor!="") {
        llenarComboTiposQueso(valor);
    }
});

function llenarComboTiposQueso(queso) {
	var res = quesos.find(buscarQueso);
	var tipos = res.tipos;

	console.log(tipos)
    $("#typeCheese").html("");

    tipos.forEach( function(valor, indice) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
        var itemval= '<option value="'+valor.nombre+'">'+valor.nombre+'</option>';


        $("#typeCheese").append(itemval);
    });
}

function buscarQueso(queso) {
    var value = $('#cheese').val();
	return queso.nombre === value;
}