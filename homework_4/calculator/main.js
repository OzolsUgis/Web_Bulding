
 
    $('.num-bg').click(function() {
        var x = $(this).text();
        $('#screen').append(x);
        
    })   

    $('.opera-bg').on('click', function(){
            var operator = $(this).text();
            
            $('#screen').append(operator);
            return operator;
    })

    $('.num-bg').click(function() {
        var y = $(this).text();
        $('#screen').append(y);
        return y;
    })    



