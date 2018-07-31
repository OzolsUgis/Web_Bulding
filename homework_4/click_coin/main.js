$(function(){
    var count = 0;
    var coins = 0;
    var smallUpgrade = 0;
    var bigUpgrade = 0;
    

    setInterval(function(){
        $('.click-coin').html("Your Coins : " +count)} ,1);
    setInterval(function(){ 
        $('.click-coin-for-using').html("Coins for spending : " +coins )} , 1);
    setInterval(function(){ count += smallUpgrade }, 1000);
    setInterval(function(){ coins += smallUpgrade }, 1000);
    setInterval(function(){ count += bigUpgrade }, 1000);
    setInterval(function(){ coins += bigUpgrade }, 1000);


    $('#click-me').click(function(){ count += 1 });
    $('#click-me').click(function(){ coins += 1 });

    $('#small-upgrade').click(function(){ 
        if(coins >= 10){
            smallUpgrade += 1;
            coins -=10;
        

        }});

    $('#big-upgrade').click(function(){ 
        if(coins >= 90){
            bigUpgrade += 10;
             coins -=90;
            
    
        }});
         
     

});
    
    

