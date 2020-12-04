$(document).ready(function(){
    var cadena="";
    for(var i=1; i<10;i++){
        cadena+="Valor de i = " + i + "<br />";
    }
    cadena+='<button id="btnpresion"> Presioina...</button>';
    $("#numeros").html(cadena);

    // falta codugo para agregar las casillas restantes
    let inputs="";
    $("#txtcalif").change(function(){
        let valor = $("#txtcalif").val();

        $("#mcasillas").click(function(){
        

            for (let i= 0; i<valor; i++) {

          
               inputs+= '<input  placeholder="Ingresa valor" required> <br>'
               $("#inputses").html(inputs);
               valor=0;
            }
        });

    });

    $("form").submit(function(event){
        event.preventDefault();
        var cjson = $(this).serializeArray();
        alert("se detuvo el envio..." + cjson);
        console.log(cjson);
    });
});