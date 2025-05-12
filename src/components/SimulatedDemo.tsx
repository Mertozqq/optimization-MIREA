
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PerformanceMetric from './PerformanceMetric';

interface SimulatedDemoProps {
  title: string;
  description: string;
  metrics: {
    before: {
      loadTime: number;
      requests: number;
      size: number;
    };
    after: {
      loadTime: number;
      requests: number;
      size: number;
    };
  };
}

const SimulatedDemo = ({ title, description, metrics }: SimulatedDemoProps) => {
  const [optimized, setOptimized] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleOptimization = () => {
    setLoading(true);
    // Simulate processing time
    setTimeout(() => {
      setOptimized(!optimized);
      setLoading(false);
    }, 800);
  };

  const currentMetrics = optimized ? metrics.after : metrics.before;

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <PerformanceMetric
            title="Время загрузки"
            value={currentMetrics.loadTime}
            maxValue={metrics.before.loadTime * 1.5}
            unit="мс"
            improved={optimized && metrics.after.loadTime < metrics.before.loadTime}
          />
          <PerformanceMetric
            title="HTTP запросы"
            value={currentMetrics.requests}
            maxValue={metrics.before.requests * 1.5}
            unit=""
            improved={optimized && metrics.after.requests < metrics.before.requests}
          />
          <PerformanceMetric
            title="Размер загрузки"
            value={currentMetrics.size}
            maxValue={metrics.before.size * 1.5}
            unit="KB"
            improved={optimized && metrics.after.size < metrics.before.size}
          />
        </div>
        
        <div className="flex justify-center mt-4">
          <Button 
            onClick={toggleOptimization} 
            disabled={loading}
            className={optimized ? "bg-blue-600" : "bg-green-600"}
          >
            {loading ? "Применение..." : optimized ? "Вернуть исходное" : "Применить оптимизацию"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimulatedDemo;
