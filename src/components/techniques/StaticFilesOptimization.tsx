
import React from 'react';
import SimulatedDemo from '../SimulatedDemo';

const StaticFilesOptimization = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Оптимизация статических файлов</h2>
      <p className="mb-6">
        Правильная настройка сжатия, кэширования и обслуживания статических файлов может значительно 
        улучшить время загрузки страницы. Django предоставляет инструменты для этого через 
        django-compressor и django-storages.
      </p>
      
      <SimulatedDemo
        title="Сжатие и объединение CSS/JS файлов"
        description="Влияние минификации и объединения на размер и количество запросов"
        metrics={{
          before: {
            loadTime: 980,
            requests: 12,
            size: 560
          },
          after: {
            loadTime: 450,
            requests: 3,
            size: 210
          }
        }}
      />
    </section>
  );
};

export default StaticFilesOptimization;
