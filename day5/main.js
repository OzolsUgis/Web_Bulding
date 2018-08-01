$('#save-task').click(function () {
    var data = { content: $('#task-title').val(), done: false };
    $.ajax({
        url: 'http://localhost:8080/todo',
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            loadData();
        }
    })
});

$(document).on('click', '#tasks li .delete-item', function () {
    var id=$(this).attr('data-id');
    $(this).parent().remove();
    $.ajax({
        url: 'http://localhost:8080/todo/' +id,
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
    })
});


$(document).on('click', '#tasks li span', function () {
    var $parent = $(this).parent();
    if ($parent.hasClass('line-throught')) {
        $parent.removeClass('line-throught');
    } else {
        $parent.addClass('line-throught');
    }


var id = $parent.find('button').attr('data-id');
var data = { 
    content: $parent.find('span').text(),
     done: $parent.hasClass('line-throught')
    };


$.ajax({
    url: 'http://localhost:8080/todo/' +id,
    type: "PATCH",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function () {
        loadData();
    }
})

});

$(document).ready(function () {
    loadData();
});

function loadData() {
    $.getJSON('http://localhost:8080/todo/all', function (data) {
        $('#tasks').html("");
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            var $el = $('<li>');
            if(element.done == true){
                $el.addClass('line-througt');
            }
            
            $el.html('<span>' + element.content + '</span>');
            var $delete = $('<button>');
            $delete.addClass('delete-item');
            $delete.text('Dzēst');
            $delete.attr('data-id', element.id);
            $el.append($delete);

            $('#task-title').val('');
            $('#tasks').append($el);
        }
    });
}