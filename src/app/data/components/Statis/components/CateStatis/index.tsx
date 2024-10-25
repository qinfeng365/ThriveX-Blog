"use client"

import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';

echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);


export default () => {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: 'auto', // 取消顶部定位
                    bottom: '0%', // 设置底部定位
                    left: 'center',
                    itemGap: 20, // 图例项之间的间距
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['5%', '70%'],
                        avoidLabelOverlap: false,
                        padAngle: 5,
                        itemStyle: {
                            borderRadius: 10
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: false, // 设置为 false 取消强调标签
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            };

            myChart.setOption(option);

            return () => {
                myChart.dispose();
            };
        }
    }, []);

    return (
        <div ref={chartRef} className='w-[500px] h-[300px]'></div>
    );
}