(function ($) {
    var boxes = ['searchbox', 'textbox', 'combo', 'combobox', 'datebox', 'filebox', 'combogrid', 'combotree',
        'datetimebox', 'datetimespinner', 'numberbox', 'numberspinner', 'timespinner'];
    for (var i in boxes) {
        $.fn[boxes[i]].defaults.height = 34;
        if ($.fn[boxes[i]].defaults && boxes[i].indexOf('spinner') == -1) {
            $.fn[boxes[i]].defaults.iconWidth = 24;
        }
    }
    $.fn.tabs.defaults.tabHeight = 38;
    $.fn.datebox.defaults.panelWidth = $.fn.datetimebox.defaults.panelWidth = 210;
    $.extend($.fn.switchbutton.defaults, {
        height: 32,
        width: 85,
        value: 0,
        onChange: function (checked) {
            $(this).val(checked ? 1 : 0);
        }
    });
    //去默认验证文本框的出错tooltip
    $.fn.validatebox.defaults.tipOptions.onShow = function () {
        $(this).tooltip('tip').addClass('validate-tooltip');
    };
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