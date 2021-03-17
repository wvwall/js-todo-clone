$(document).ready(function() {

//Clonare al click su add la struttura del template col testo

$("#add").click(function () {

    //Seleziono value input e pulisco post aggiunta
    var todoTitolo = $("#todoTitolo").val();
    $("#todoTitolo").val("");

    //Clono struttra template e stampo testo input 
    var template = $("#template li").clone();
    template.children("span.titolo").text(todoTitolo);

    //Clicco e rimuovo testo aggiunto
    template.children("span.delete").click(function () { 
        $(this).parent().remove();
     });

     //Clicco per modificare testo
     template.children("span.edit").click(function () { 
         var titoloDOM = $(this).siblings("span.titolo");
         var titolo = titoloDOM.text();
         titoloDOM.hide();

        //show input template
         $(this).siblings("#text").val(titolo).show();
      })

        //Usare invio per aggiungere modifica

      template.children("#text").keyup(function (e) { 
        if(e.which == 13) {
            var titolo = $(this).val();
            $(this).hide();
            $(this).siblings("span.titolo").text(titolo).show();
        }
       });



     $("#todolist").append(template);
});





});