import React from 'react';
import './Chart.scss';
import { Doughnut } from 'react-chartjs-2';

export default function Chart() {
  const data = {
    datasets: [
      {
       data: [20, 50, 100, 250, 500, 25, 36, 48, 1000],
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 1,
        hoverOffset: 4,
        cutout: 99,
      },
    ],
  };

  return (
    <div className="chart">
      <Doughnut className="chart__contents" data={data} />
      <span className="chart__ballance">&#8372; {250000}</span>
    </div>
  );
}