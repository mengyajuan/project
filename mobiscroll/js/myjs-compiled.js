$(function () {
    ////获取当前时间  年  月
    //var now = new Date(),
    //    year = now.getFullYear(),
    //    date=now.getDate(),
    //    month = now.getMonth();
    ////适用于选择单个和多个日期
    // $('#demo').mobiscroll().calendar({
    //     theme:'ios', //主题 是什么主题的 ios代表苹果风格主题 android代表是安卓风格主题，还是一种是mobiscroll自己的风格
    //     display:'bottom',  // 代表在哪个位置 有top center 还有inline inline是代表直接显示
    //     counter:true,  // 用于多选  默认是false 当你选择了所有的日期 确定之后 会在文本框中都显示 可以不写 不会报错
    //     dateFormat: 'yy/mm', //返回结果格式化为年月格式
    //     multiSelect: true, //  选择的倍数 默认是 false 为true 可以多选
    //     selectedValues:[new Date(year, month, date),new Date(year, month, date+1)], //默认值 默认是undefined 如果没有选中或者指定的值 默认是当钱时间 如果有多个选中的值 放在数组中
    // })


    ////选择一个星期日期
    // var now = new Date(),
    //     year = now.getFullYear(),
    //     month = now.getMonth(),
    //     date = now.getDate(),
    //     day = now.getDay(), //获取星期天数 一个星期不是有七天吗 这获取的下标
    //     diff = day - 6 < 0 ? 1 + day : day - 6, //判断 从下标0开始 那么就是从星期日开始 这个插件自己封装的就是从星期日开始 V3.0中改了，从星期一开始
    //     currWeekDays = [],
    //     i = 0;
    // for (i; i < 7; i++) {
    //     currWeekDays.push(new Date(year, month, date - diff + i));
    // }
    // console.log(date)
    // console.log(diff)
    // console.log(i)
    // console.log(date - diff + i)
    // $('#demo').mobiscroll().calendar({
    //     theme: 'ios',
    //     display: 'bottom',
    //     headerText: false,
    //     selectType: 'week', //一周中只要有其中一天被选中 那么就是这个星期
    //     firstSelectDay: 6, //设置所选择周的第一天 如果selecType的属性值是 week 星期日为0
    //     selectedValues: currWeekDays
    // });

    //选中日期加 当前的时间

    //$('#demo').mobiscroll().calendar({
    //    theme: 'ios',
    //    display: 'bottom',
    //    //controls: ['calendar','time'], //它是一个数组  要获取日期加时间
    //    controls: ['time'], //它是一个数组  如果只是要获取当前时间就传一个time
    //    mode: 'mixed', //选择模式 是滚动模式 还是 clickpick 点击+ - 模式 滚轮可以滚动，“+”和“-”按钮是可见的。
    //    //mode:'clickpick'  //选择模式  clickpick 点击+ - 模式
    //});

    //  invalid days

    $('#demo').mobiscroll().calendar({
        theme: 'ios',
        display: 'bottom',
        lang: 'zh',
        controls: ['calendar'],
        //buttons: ['set','clear','cancel','now'],
        buttons: [], //按钮  可以是设置 清除 取消  现在的时间
        closeOnSelect: true, //选完日期后去  关闭日历
        invalid: ['w0', 'w6', '5/1', '12/24', '12/25'] //它必须是一个数组 w0 w6 一周的天数 ! 5/1 5月1
    });
});

//# sourceMappingURL=myjs-compiled.js.map