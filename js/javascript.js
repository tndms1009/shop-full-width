$(function(){
    $("#search").attr('placeholder','Enter Search...');
        
        var placeholder = $("input[placeholder]");

            function makePlaceHolder(){
                placeholder.each(function(i) {
                    var parHeight = placeholder.eq(i).css("height");
                    var parLineHeight = placeholder.eq(i).css("lineHeight");
                    var parPadd = placeholder.eq(i).css("padding");
                    var parWidth = placeholder.eq(i).css("width");
                    var parTxtIn = placeholder.eq(i).css("textIndent");
                    var parColor = placeholder.eq(i).css("color");
                    var parFontSize = placeholder.eq(i).css("fontSize");
                    placeholder.eq(i).wrap("<div class='placehold' style='position:relative;color:#555;'></div>");
                    $(".placehold").eq(i).append("<span>"+placeholder.eq(i).attr("placeholder")+"</span>");
                    placeholder.eq(i).next().css({
                            "height":parHeight,
                            "lineHeight":parLineHeight,
                            "padding":parPadd,
                            "width":parWidth,
                            "textIndent":parTxtIn,
                            "color":parColor,
                            "fontSize":parFontSize,
                            "position":"absolute",
                            "left":1,
                            "top":1,
                            "display":"block"
                        });
                });
            };
            makePlaceHolder();

            placeholder.each(function(i) {
                var holderVal=placeholder.eq(i).val().length;
                if(holderVal==0){
                    $(this).next("span").show();
                }
                placeholder.bind("focusin",function(){
                    $(this).next("span").hide();
                    placeholder.not(this).filter(function(index){return $(this).val().length==0}).next("span").show();
                });
            });

            $(".placehold span").click(function(){
                $(this).prev().focus();
            });

        
    $(window).load(function() {
       if (window.PIE) {
          $('.flex-control-paging li a').each(function() {
             PIE.attach(this);
           });
           $('.round1').each(function() {
             PIE.attach(this);
           });
           $('.round2').each(function() {
             PIE.attach(this);
           });
           $('.round3').each(function() {
             PIE.attach(this);
           });
      }
    });

    
    
});