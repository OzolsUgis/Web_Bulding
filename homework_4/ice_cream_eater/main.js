document
        .querySelector('button')
        .addEventListener('click', function(){
            var elements = document.querySelectorAll('.ice-cream-text');
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                console.log(element);
                element.innerText = 'saldejums';
                element.style.background = '#0000FF';
                
            }
        });


        // jQuery
$('#add-ice-cream')
        .click (function(){
            var element =$("<img>");
            element.attr('src','https://www.freeiconspng.com/uploads/ice-cream-png-transparent-9.png');
            element.css('height', '100px')
            $('#freezer').append(element);  
            element.draggable({revert: "invalid"}); 
               
        });

        var count = 0;
        var eaten = 0;
        
        $("#add-ice-cream").click(function() {
            count++;
            $("#ice-cream-in-freezer").html("Ice creams in freezer: "+count);
            $('#hand img').droppable({
                drop: function(event, ui){
                    ui.draggable.fadeOut(1000);
                    eaten++;
                    count--;
                    $("#ice-cream-in-freezer").html("Ice creams in freezer: "+count);
                    
                    $("#ice-cream-eaten").html("Ice creams eaten: "+eaten);
              }
            });
        });

  
      

       

// $('freezer img').draggable();        
// $(document)
//         .on('click','#freezer img',function(){
//             $(this).fadeOut(1000);
//         })

