
import React from 'react';
import SimulatedDemo from '../SimulatedDemo';
import CodeComparison from '../CodeComparison';
import { templateBeforeCode, templateAfterCode } from './CodeExamples';

const TemplateOptimization = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Оптимизация шаблонов</h2>
      <p className="mb-6">
        Шаблоны Django могут быть источником неэффективности, особенно когда вычисляемые свойства 
        модели вызываются многократно или когда используются тяжелые шаблонные теги. Использование 
        кэширования и оптимизация логики шаблонов могут значительно улучшить производительность.
      </p>
      
      <SimulatedDemo
        title="Оптимизация вычислений в шаблонах"
        description="Использование cached_property и with тега для кэширования результатов"
        metrics={{
          before: {
            loadTime: 850,
            requests: 1,
            size: 45
          },
          after: {
            loadTime: 320,
            requests: 1,
            size: 45
          }
        }}
      />
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Пример кода</h3>
        <CodeComparison
          beforeCode={templateBeforeCode}
          afterCode={templateAfterCode}
          beforeTitle="Без кэширования"
          afterTitle="С cached_property"
        />
      </div>
    </section>
  );
};

export default TemplateOptimization;
