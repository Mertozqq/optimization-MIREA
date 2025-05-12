
import React from 'react';
import SimulatedDemo from '../SimulatedDemo';
import CodeComparison from '../CodeComparison';
import { lazyLoadBeforeCode, lazyLoadAfterCode } from './CodeExamples';

const LazyLoadingImages = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Ленивая загрузка изображений</h2>
      <p className="mb-6">
        Изображения часто являются самыми тяжелыми элементами веб-страницы. Ленивая загрузка 
        позволяет загружать изображения только когда они входят в область видимости пользователя, 
        что значительно уменьшает начальное время загрузки страницы и экономит трафик.
      </p>
      
      <SimulatedDemo
        title="Ленивая загрузка галереи изображений"
        description="Применение атрибута loading='lazy' и IntersectionObserver для отложенной загрузки"
        metrics={{
          before: {
            loadTime: 1850,
            requests: 15,
            size: 4200
          },
          after: {
            loadTime: 620,
            requests: 3,
            size: 950
          }
        }}
      />
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Пример кода</h3>
        <CodeComparison
          beforeCode={lazyLoadBeforeCode}
          afterCode={lazyLoadAfterCode}
          beforeTitle="Обычная загрузка"
          afterTitle="Ленивая загрузка"
        />
      </div>
    </section>
  );
};

export default LazyLoadingImages;
