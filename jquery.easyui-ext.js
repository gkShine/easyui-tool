(function ($) {
    var boxes = ['searchbox', 'textbox', 'combo', 'combobox', 'datebox', 'filebox', 'combogrid', 'combotree',
        'datetimebox', 'datetimespinner', 'numberbox', 'numberspinner', 'timespinner'];
    for (var i in boxes) {
        $.fn[boxes[i]].defaults.height = 34;
    }
    $.fn.tabs.defaults.tabHeight = 38;
    $.fn.datebox.defaults.panelWidth = $.fn.datetimebox.defaults.panelWidth = 210;
    //新增按钮组插件
    $.fn.buttonGroup = function (options) {
        $(this).each(function (i) {
            $(this).addClass('l-btn-group').children().each(function () {
                $(this).linkbutton($.extend({
                    group: 'g' + i,
                    toggle: true
                }, options));
            });
        });
    };
    //修改空数据样式
    $.fn.datagrid.defaults.view.renderEmptyRow = function (target) {
        var data = $.data(target, 'datagrid');
        if (data.dc.empty) {
            data.dc.body2.append(data.dc.empty);
        } else {
            data.dc.empty = $('<div class="datagrid-empty">' + (data.options.empty || '') + '</div>');
            var top = data.dc.header2.height();
            if (top) {
                data.dc.empty.css('margin-top', top);
            }
        }
    };
})(jQuery);
$(function () {
    $('.easyui-button-group').buttonGroup();
});