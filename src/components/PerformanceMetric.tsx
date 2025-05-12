
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface PerformanceMetricProps {
  title: string;
  value: number;
  maxValue: number;
  unit: string;
  improved?: boolean;
}

const PerformanceMetric = ({ title, value, maxValue, unit, improved }: PerformanceMetricProps) => {
  const percentage = Math.min(Math.round((value / maxValue) * 100), 100);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-700">{title}</h3>
        <span className={`font-semibold ${improved ? 'text-green-600' : 'text-blue-600'}`}>
          {value} {unit}
          {improved && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Улучшено</span>}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0 {unit}</span>
        <span>{maxValue} {unit}</span>
      </div>
    </div>
  );
};

export default PerformanceMetric;
