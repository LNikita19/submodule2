

import React from 'react';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

const EmailDashboard = () => {
    // Chart data with exact values
    const chartData = [
        { date: '1 Oct', delivered: 2000, spam: 1800 },
        { date: '2 Oct', delivered: 2900, spam: 2200 },
        { date: '3 Oct', delivered: 1700, spam: 1800 },
        { date: '4 Oct', delivered: 1600, spam: 1900 },
        { date: '5 Oct', delivered: 1900, spam: 1800 },
        { date: '6 Oct', delivered: 1700, spam: 2000 },
        { date: '7 Oct', delivered: 2500, spam: 1700 },
        { date: '8 Oct', delivered: 2800, spam: 2100 },
        { date: '9 Oct', delivered: 2100, spam: 1900 },
        { date: '10 Oct', delivered: 1900, spam: 1700 }
    ];

    const maxValue = 3000;
    const chartHeight = 300;
    const barWidth = 24;

    // Calculate bar heights
    const getBarHeight = (value, max, totalHeight) => {
        return (Math.abs(value) / max) * (totalHeight / 2);
    };

    return (
        <div className="w-[70%] -ml-[1rem]   p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-1">Recent Interactions</h2>
                            <p className="text-sm text-gray-500">Up-to-Date Sales</p>
                        </div>
                        <div className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                            <span className="text-sm font-medium text-gray-700">October 2025</span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    <div className="relative">
                        {/* Custom Chart Container */}
                        <div className="ml-16 mr-8 mt-12">
                            {/* Y-axis labels */}
                            <div className="flex">
                                <div className="flex flex-col justify-between h-80 w-12 text-right pr-2">
                                    <span className="text-xs text-gray-500">3k</span>
                                    <span className="text-xs text-gray-500">1.5k</span>
                                    <span className="text-xs text-gray-500">0</span>
                                    <span className="text-xs text-gray-500">-1.5k</span>
                                    <span className="text-xs text-gray-500">-3k</span>
                                </div>

                                {/* Chart area */}
                                <div className="flex-1 relative">
                                    {/* Zero line */}
                                    <div className="absolute w-full h-px bg-gray-200" style={{ top: '50%' }}></div>

                                    {/* Bars container */}
                                    <div className="flex items-end justify-between h-80 px-4" style={{ alignItems: 'center' }}>
                                        {chartData.map((data, index) => {
                                            const deliveredHeight = getBarHeight(data.delivered, maxValue, chartHeight);
                                            const spamHeight = getBarHeight(data.spam, maxValue, chartHeight);

                                            return (
                                                <div key={index} className="flex flex-col items-center">
                                                    {/* Bar container */}
                                                    <div className="flex flex-col items-center relative" style={{ height: `${chartHeight}px` }}>
                                                        {/* Delivered bar (positive) */}
                                                        <div className="w-full flex flex-col justify-end" style={{ height: '50%' }}>
                                                            <div
                                                                className="bg-blue-500 rounded-t"
                                                                style={{
                                                                    width: `${barWidth}px`,
                                                                    height: `${deliveredHeight}px`
                                                                }}
                                                            ></div>
                                                        </div>

                                                        {/* Spam bar (negative) */}
                                                        <div className="w-full flex flex-col justify-start" style={{ height: '50%' }}>
                                                            <div
                                                                className="bg-blue-200 rounded-b"
                                                                style={{
                                                                    width: `${barWidth}px`,
                                                                    height: `${spamHeight}px`
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    {/* Date label */}
                                                    <span className="text-xs text-gray-600 mt-2 whitespace-nowrap">{data.date}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Moved section with margin-left */}
                                <div className="w-60 flex flex-col divide-y divide-gray-200 dark:divide-gray-700 ml-[4rem] mt-[5.5rem]">
                                    {/* Delivery */}
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-2">
                                            <span className="p-2 rounded-lg bg-blue-100 text-blue-500">⬇️</span>
                                            <div>
                                                <p className="text-sm text-gray-400">This month Delivery</p>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">48,820</h3>
                                            </div>
                                        </div>
                                        <span className="text-green-500 text-sm font-medium">45.5% ↑</span>
                                    </div>

                                    {/* Spams */}
                                    <div className="flex items-center justify-between py-2">
                                        <div className="flex items-center gap-2">
                                            <span className="p-2 rounded-lg bg-gray-100 text-blue-400">↗️</span>
                                            <div>
                                                <p className="text-sm text-gray-400">Spams this month</p>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">6,498</h3>
                                            </div>
                                        </div>
                                        <span className="text-red-500 text-sm font-medium">5.5% ↓</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailDashboard;