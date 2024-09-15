import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Chart from 'react-apexcharts';
import Footer from './Footer';
import profileimage from '../assets/images/profile_image.png';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overviewSeries: [15, 10, 20, 8, 14, 12],
      overviewOptions: {
        chart: {
          type: 'donut',
          width: 380,
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            donut: {
              size: '60%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: '13%',
                  fontSize: '24px',
                  formatter: () => 'Left',
                  style: {
                    fontSize: '16px',
                  },
                  offsetY: 10,
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        stroke: {
          show: false,
          width: 0,
        },
        legend: {
          show: false,
        },
        title: {
          show: false,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        }],
      },

      categoryOptions: {
        chart: {
          type: 'bar',
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '60%',
          },
        },
        xaxis: {
          categories: ['Clothing', 'Travel', 'Food', 'Fitness', 'Bills', 'Healthcare'],
          labels: {
            show: false,
          },
        },
        colors: ['#1E88E5', '#F4511E', '#8E24AA', '#E53935', '#43A047', '#FB8C00'],
        legend: {
          show: false,
        },
      },

      categorySeries: [
        {
          data: [15, 10, 20, 8, 14, 12],
        },
      ],
    };
  }

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
        <div className="flex justify-between items-center mb-8">
          <Link to="/statistics" className="text-deepblue2">
            <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
          </Link>
          <h1 className="text-2xl font-semibold">Statistics</h1>
          <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="flex justify-between">
            <div className="w-1/2">
              <Chart options={this.state.overviewOptions} series={this.state.overviewSeries} type="donut" width={380} />
            </div>
            <div className="w-1/2 p-4">
              <ul className="text-gray-700">
                <div className="flex gap-x-2 justify-between items-center mb-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-2 w-2 bg-[#8E24AA] rounded-full"></div>
                    <span>Food</span>
                  </div>
                  <span><strong>46%</strong></span>
                </div>
                <div className="flex gap-x-2 justify-between items-center mb-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-2 w-2 bg-[#1E88E5] rounded-full"></div>
                    <span>Clothing</span>
                  </div>
                  <span><strong>15%</strong></span>
                </div>
                <div className="flex gap-x-2 justify-between items-center mb-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-2 w-2 bg-[#F4511E] rounded-full"></div>
                    <span>Travel</span>
                  </div>
                  <span><strong>10%</strong></span>
                </div>
                <div className="flex gap-x-2 justify-between items-center mb-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-2 w-2 bg-[#43A047] rounded-full"></div>
                    <span>Bills</span>
                  </div>
                  <span><strong>14%</strong></span>
                </div>
                <div className="flex gap-x-2 justify-between items-center mb-2">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-2 w-2 bg-[#FB8C00] rounded-full"></div>
                    <span>Healthcare</span>
                  </div>
                  <span><strong>12%</strong></span>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md mx-auto bg-gradient-to-b from-lightpink1 to-lightpink2 rounded-2xl py-4">
          <h2 className="text-xl font-semibold mb-4">Category Analysis</h2>
          <Chart options={this.state.categoryOptions} series={this.state.categorySeries} type="bar" height={350} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Overview;
