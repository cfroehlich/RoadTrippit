$.fn.setDefaultValue = function(options)
{
    var options = $.extend(
    						{ 
								css : 'txt_default'
							}, options);
    
    return this.each(function()
    {
        var $this = $(this);
        
        var value = $this.attr('title');
        
        $(this).attr('autocomplete','off');
        
        if($this.val().length <= 0 || $this.val() == value)
        {
            $this.addClass(options.css);
            $this.val(value);
        }
        
        $this.click(clear);
        
        $this.blur(fill);
        
        $this.focus(clear).blur();
        
        function clear()
        {
            if($this.hasClass(options.css) || $this.val() == value)
            {
                $this.val('');
                $this.removeClass(options.css);
            }
        }
        
        function fill()
        {
            if($this.val().length <= 0)
            {
                $this.addClass(options.css);
                $this.val(value);
            }
        }
        $(window).unload(clear); // Firefox-Autocomplete
    });  
};