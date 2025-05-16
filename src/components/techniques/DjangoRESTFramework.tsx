import React from 'react';
import CodeComparison from '../CodeComparison';
import SimulatedDemo from '../SimulatedDemo';

const DjangoRestFramework = () => {
  const drf_before_code = `
# views.py - Неоптимизированный подход
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# При каждом запросе будет загружаться полный набор данных,
# независимо от необходимости
`;

  const drf_after_code = `
# views.py - Оптимизированный подход
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category', 'in_stock']
    search_fields = ['name', 'description']
    pagination_class = StandardResultsSetPagination
    
    def get_queryset(self):
        queryset = super().get_queryset()
        if self.action == 'list':
            # Более легкий queryset для списка элементов
            return queryset.defer('detailed_description', 'metadata')
        return queryset
`;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Django REST Framework оптимизация</h2>
      <p className="mb-6">
        Django REST Framework (DRF) - мощный инструмент для создания API, но без должной оптимизации 
        он может потреблять значительные ресурсы. Правильное использование пагинации, фильтрации, 
        и адаптация queryset'ов под конкретные эндпоинты позволяют значительно повысить производительность.
      </p>

      <SimulatedDemo
        title="Оптимизация API эндпоинтов"
        description="Применение пагинации, фильтрации и оптимизация queryset"
        metrics={{
          before: {
            loadTime: 1350,
            requests: 1,
            size: 980
          },
          after: {
            loadTime: 280,
            requests: 1,
            size: 32
          }
        }}
      />

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Пример кода</h3>
        <CodeComparison
          beforeCode={drf_before_code}
          afterCode={drf_after_code}
          beforeTitle="Базовый ViewSet"
          afterTitle="Оптимизированный ViewSet"
        />
      </div>
    </section>
  );
};

export default DjangoRestFramework;