import React, { useContext, useEffect, useState } from "react";
import { Wrapper, StyledLineChart } from './Chart.styles';
import { DataContext } from "../../../context/DataProvider";
import { Chart as ChartJS}from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Your activity'
        },
    },
}

const Chart: React.FC = () => {
    ChartJS.register(CategoryScale);
    const { trainings } = useContext(DataContext);
    const [chartData, setChartData] = useState({
        labels: trainings.map(training => ''),
        datasets: [
            {
                id: 1,
                label: 'training intensity in %',
                data: trainings.map(training => training.intensity),
            }
        ]
    });

    useEffect(() => {
        setChartData({
            ...chartData,
            datasets: [
                {
                    ...chartData.datasets[0],
                    data: trainings.map(training => training.intensity)
                }
            ]
        })
    }, [ trainings ]);

    return (
        <Wrapper>
            <StyledLineChart>
                <Line data={chartData} options={options} />
            </StyledLineChart>
        </Wrapper>
    )
}

export default Chart;