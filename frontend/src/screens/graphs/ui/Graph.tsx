import React, { useEffect, useRef } from 'react';
import './Graph.scss';
import { Chart, registerables } from 'chart.js';
import socketIOClient from 'socket.io-client';

const data = {
    labels: ['Start'],
    datasets: [
        {
            label: 'ESP8266',
            data: [1],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
};

const Graph: React.FC = () => {
    const chartRef = useRef<any>();

    Chart.register(...registerables);

    useEffect(() => {
        const context = chartRef.current?.getContext('2d') as HTMLCanvasElement;

        const chart = new Chart(context, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        const socket = socketIOClient('http://localhost:3001', { transports: ['websocket', 'polling', 'flashsocket'] });
        socket.on('esp', data => {
            console.log(data);
            chart.data.labels?.push(data?.time);
            chart.data.datasets[0].data.push(data?.value);

            chart.update();
        });
    }, []);

    return (
        <div className="graph">
            <div className="glass-card">
                <canvas id="myChart" ref={chartRef} />
            </div>
        </div>
    );
};

export default Graph;
