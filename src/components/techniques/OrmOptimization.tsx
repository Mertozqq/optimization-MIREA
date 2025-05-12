
import React from 'react';
import SimulatedDemo from '../SimulatedDemo';
import CodeComparison from '../CodeComparison';
import { ormBeforeCode, ormAfterCode } from './CodeExamples';

const OrmOptimization = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Оптимизация ORM-запросов</h2>
      <p className="mb-6">
        Один из основных источников проблем с производительностью в Django — неэффективные запросы 
        к базе данных, особенно проблема N+1 запросов. При правильном использовании prefetch_related 
        и select_related можно значительно ускорить работу приложения.
      </p>
      
      <SimulatedDemo
        title="Оптимизация запроса связанных объектов"
        description="Демонстрация использования prefetch_related для предзагрузки связанных объектов"
        metrics={{
          before: {
            loadTime: 1200,
            requests: 101,
            size: 520
          },
          after: {
            loadTime: 450,
            requests: 1,
            size: 520
          }
        }}
      />
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Пример кода</h3>
        <CodeComparison
          beforeCode={ormBeforeCode}
          afterCode={ormAfterCode}
          beforeTitle="Проблема N+1"
          afterTitle="С prefetch_related"
        />
      </div>
    </section>
  );
};

export default OrmOptimization;
