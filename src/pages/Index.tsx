
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PerformanceMetric from '../components/PerformanceMetric';
import OptimizationCard from '../components/OptimizationCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Методы оптимизации веб-приложений</h1>
            <p className="text-xl text-gray-600">
              Наглядное изучение подходов к улучшению производительности веб-сайтов с фокусом на Django
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Обзор производительности</CardTitle>
              <CardDescription>Ключевые метрики производительности типичного веб-приложения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PerformanceMetric
                  title="Среднее время загрузки страницы"
                  value={2100}
                  maxValue={5000}
                  unit="мс"
                />
                <PerformanceMetric
                  title="First Contentful Paint"
                  value={1200}
                  maxValue={3000}
                  unit="мс"
                />
                <PerformanceMetric
                  title="Time to Interactive"
                  value={3500}
                  maxValue={7000}
                  unit="мс"
                />
                <PerformanceMetric
                  title="Размер загрузки"
                  value={2.4}
                  maxValue={5}
                  unit="МБ"
                />
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Популярные методы оптимизации</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <OptimizationCard
              title="Кэширование запросов ORM"
              description="Оптимизация работы с базой данных через кэширование и select_related/prefetch_related запросы"
              impact="high"
              djangoSpecific={true}
              learnMoreLink="/techniques"
            />
            <OptimizationCard
              title="Сжатие и минификация статических файлов"
              description="Уменьшение размера CSS, JavaScript и других статических ресурсов"
              impact="medium"
              djangoSpecific={false}
              learnMoreLink="/techniques"
            />
            <OptimizationCard
              title="Ленивая загрузка изображений"
              description="Загрузка изображений только при их попадании в область видимости"
              impact="medium"
              djangoSpecific={false}
              learnMoreLink="/techniques"
            />
            <OptimizationCard
              title="Оптимизация шаблонов Django"
              description="Использование кэширования шаблонов и снижение количества запросов в цикле"
              impact="high"
              djangoSpecific={true}
              learnMoreLink="/techniques"
            />
          </div>

          <div className="text-center">
            <Link to="/techniques">
              <Button size="lg">Изучить все методы оптимизации</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
