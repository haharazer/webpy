$def with (xDesc,csData)
<h3 align="center">客户详细信息</h3>
<!-- javascript代码  -->
    <script type="text/javascript">
        $$(function () {
            var chart;
            $$(document).ready(function() {
                //定义一个HighCharts 
                chart = new Highcharts.Chart({
                    //配置chart选项
                    chart: {
                    renderTo: 'preWeekCS',  //容器名，和body部分的div id要一致
                    type: 'spline'                        //图表类型，这里选择折线图
                    },
                //配置链接及名称选项 
                credits: {
                    enabled : true,
                    href : "http://tc-dr-ems01.tc.baidu.com:8081",
                    text : "客户信息查询"
                },
                //配置标题
                title: {
                    text: '一周内信誉得分变化情况',
                    y:10  //默认对齐是顶部，所以这里代表距离顶部10px 
                },
                //配置副标题
                subtitle: {
                    text: '信誉得分',
                    y:30
                },
                //配置x轴
                xAxis: {
                    categories: [$:xDesc],
                    title: {
                        text: '日期'
                    }
                },
                // 配置y轴
                yAxis: {
                    title: {
                        text: '信誉得分'
                    }
                },
                //配置数据点提示框
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                //配置数据使其点显示信息
                plotOptions: {
                    spline : {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                //配置数据列 
                series: [{
                    name: '信誉得分',
                    marker: {
                        symbol: 'square'
                    },
                    data: [$:csData]
                }]
                });
            });
        });
    </script>
    <div id="preWeekCS" style="min-width:400px;height:400px;margin:0 auto;"></div>
