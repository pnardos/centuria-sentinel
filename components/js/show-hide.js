$('.sidebar--list div:nth-child(4) a').click(function(){
    $('.manage--list').slideToggle('normal',function(){ $(this).toggleClass('hidden show');});
})