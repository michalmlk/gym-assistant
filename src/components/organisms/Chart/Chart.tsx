import React, { useContext, useEffect, useState } from "react";
import { Wrapper, StyledLineChart } from './Chart.styles';
import { DataContext } from "../../../context/DataProvider";
import { Chart as ChartJS}from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import { ActivityChartState } from '../../../model';

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Your activity'
        },
    },
}

const initialChartState: ActivityChartState = {
    labels: [],
    datasets: [
        {
            id: 1,
            label: '',
            data: []
        }
    ]
}

const Chart: React.FC = () => {
    ChartJS.register(CategoryScale);
    const { trainings } = useContext(DataContext);
    const [chartData, setChartData] = useState(initialChartState);

    useEffect(() => {
        setChartData({
            labels: trainings.map(training => training.intensity),
            datasets: [
                {
                    id: 1,
                    label: 'training intensity in %',
                    data: trainings.map(training => training.intensity),
                }
            ]
        })
    }, [ trainings ]);

    return (
        <Wrapper>
            <StyledLineChart>
                <h1>Training sessions</h1>
                <Line data={chartData} options={options} />
            </StyledLineChart>
        </Wrapper>
    )
}

export default Chart;