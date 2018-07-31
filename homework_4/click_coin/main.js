$(function(){
    var count = 0;
    var coins = 0;
    var smallUpgrade = 0;
    var bigUpgrade = 0;
    var smallUpgradeCounter = 0;
    var bigUpgradeConter = 0;
    var smallUpgradePrice = 10;
    

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

    
        if(coins >= smallUpgradePrice)
        {
            smallUpgrade += 1;
            coins -=smallUpgradePrice;
            var nextPrice = smallUpgradePrice+(smallUpgradePrice * 0.1);
            smallUpgradeCounter++;
            $('.small-upgrade-counter').html('1x upgrade bought : ' + nextPrice);
            

        }});

    $('#big-upgrade').click(function(){ 
        if(coins >= 90){
            bigUpgrade += 10;
             coins -=90;

             bigUpgradeConter++;
            
            $('.big-update-counter').html('10x upgrade bought : ' + bigUpgradeConter);
    
        }});
         
     

});
    
    

