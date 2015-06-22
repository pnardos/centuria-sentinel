$('.sidebar--list li:nth-child(4) a').click(function(){
    $('ul.manage--list').slideToggle('normal',function(){ $(this).toggleClass('hidden show');});
})