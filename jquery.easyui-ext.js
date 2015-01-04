(function($){
    var boxes = ['searchbox', 'textbox', 'combo', 'combobox', 'datebox', 'filebox', 'combogrid', 'combotree',
        'datetimebox', 'datetimespinner', 'numberbox', 'numberspinner', 'timespinner'];
    for(var i in boxes){
        $.fn[boxes[i]].defaults.height = 34;
    }
    $.fn.tabs.defaults.tabHeight = 38;
    $.fn.datebox.defaults.panelWidth = $.fn.datetimebox.defaults.panelWidth = 210;
})(jQuery);