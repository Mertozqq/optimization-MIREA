
import React from 'react';
import Header from '../components/Header';
import OrmOptimization from '../components/techniques/OrmOptimization';
import TemplateOptimization from '../components/techniques/TemplateOptimization';
import StaticFilesOptimization from '../components/techniques/StaticFilesOptimization';
import LazyLoadingImages from '../components/techniques/LazyLoadingImages';

import DjangoRestFramework from '../components/techniques/DjangoRESTFramework';


const Techniques = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Техники оптимизации</h1>
          <p className="text-xl text-gray-600 mb-8">
            Наглядные примеры методов повышения производительности Django-приложений
          </p>

          <div className="space-y-12">
            <OrmOptimization />
            <TemplateOptimization />
            <StaticFilesOptimization />
            <LazyLoadingImages />

            <DjangoRestFramework />

          </div>
        </div>
      </main>
    </div>
  );
};

export default Techniques;
