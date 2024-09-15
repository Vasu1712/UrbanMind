import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Chart from 'react-apexcharts';
import profileimage from '../assets/images/profile_image.png';
import Footer from './Footer';

const Statistics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    targetAmount: '',
    progress: 0,
  });
  const [goals, setGoals] = useState([
    {
      title: 'iPad 15',
      description: 'Goal is in progress',
      targetAmount: '₹27590',
      progress: 52.1,
    },
  ]);

  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['7', '8', '9', '10', '11', '12', '13'],
    },
    yaxis: {
      min: 0, 
      labels: {
        show: false, 
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    grid: {
      show: false,
    },
    colors: ['#8E7AF7'],
  };

  const radialChartOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '45%',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '16px',
            fontWeight: 'bold',
            colors: ['#233F78'],
            offsetY: 7,
          },
        },
      },
    },
    colors: ['#725CFA'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#8E7AF7'],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ["Progress"],
  };

  const chartSeries = [
    {
      name: 'Spending',
      data: [200, 400, 450, 300, 540, 600, 300],
    },
  ];

  const radialChartSeries = [52.1];

  const handlePlusClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, { ...newGoal, progress: 0 }]);
    setNewGoal({
      title: '',
      description: '',
      targetAmount: '',
      progress: 0,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">Statistics</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>

      <div className="mt-8 w-full max-w-md mx-auto bg-gradient-to-b from-lightpink1 to-lightpink2 rounded-2xl py-4">
        <div className="flex justify-between items-center mt-4 mb-4 px-8">
          <h2 className="text-2xl text-deepblue2 font-semibold">August</h2>
          <div className="flex space-x-5">
            <span className="text-lavender2">July</span>
            <span className="text-lavender2">June</span>
            <span className="text-lavender2">May</span>
            <span className="text-lavender2">April</span>
          </div>
        </div>

        <div className="text-left mb-4 px-8">
          <h3 className="text-deepblue">Monthly Expenditure</h3>
          <p className="text-gray-400 text-sm italic">Average Level</p>
        </div>

        <div className="relative w-full h-60 mb-4">
          <Chart options={chartOptions} series={chartSeries} type="area" height={240} />
        </div>
      </div>
      <Link to="/overview">
        <div className="flex pt-3 px-4 text-sm text-blue-600 italic font-semibold justify-end items-center">
            see more
        </div>
      </Link>
      <div className="mt-2 w-full bg-inherit p-4 rounded-xl mb-4">
        <h2 className="text-lg font-semibold mb-2">Goals</h2>
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center justify-between pt-2 bg-violet-200 drop-shadow-md rounded-xl mb-4">
            <div className="flex flex-col px-6 py-2">
              <h3 className="text-deepblue2 text-xl font-bold">{goal.title}</h3>
              <p className="text-sm text-gray-500 italic">{goal.description}</p>
              <p className="text-sm text-gray-700 pt-4">
                Target amount left: <span className="text-darkpurple font-semibold">{goal.targetAmount}</span>
              </p>
            </div>
            <div className="relative w-36 h-36">
              <Chart options={radialChartOptions} series={[goal.progress]} type="radialBar" height="100%" />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between p-4 bg-violet-200 rounded-xl">
          <div className="flex flex-col">
            <h3 className="text-deepblue2 font-bold">Create a new Goal</h3>
            <p className="text-sm text-gray-500">Reach more Goals</p>
          </div>
          <button className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-2 rounded-full shadow-lg" onClick={handlePlusClick}>
            <Icon icon="mdi:plus" width="24" />
          </button>
        </div>
      </div>

      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create a New Goal</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newGoal.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  name="description"
                  value={newGoal.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Target Amount</label>
                <input
                  type="text"
                  name="targetAmount"
                  value={newGoal.targetAmount}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={handleModalClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
