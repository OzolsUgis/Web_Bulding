

$('#save-task')
        .click(function(){  
            var data = {};   
            $.post('http://localhost:8080/todo', data, function(){
                
            })     
            loadData() ;       
 });


$(document).on('click', '#tasks li .delete-item', function(){
    $(this).parent().remove();
});      


$(document).on('click', '#tasks li', function(){
    if($(this).hasClass('line-throught')){
        $(this).removeClass('line-throught');
    }else{
        $(this).addClass('line-throught');
    }
});

$(document).ready(function(){
    loadData();
});

function loadData() {
    $.getJSON('http://localhost:8080/todo/all', function(data){
        console.log(data);
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            var $el = $('<li>');
            console.log(element);
            $el.text(element.content);
            var $delete = $('<button>');
            $delete.addClass('delete-item');
            $delete.text('Dzēst');
            $el.append($delete);

            $('#task-title').val('');
            $('#tasks').append($el);      
        }
    });
}