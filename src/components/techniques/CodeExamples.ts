
// Collection of code examples for the techniques page

// Django ORM optimization example code
export const ormBeforeCode = `
# Неоптимизированный запрос (проблема N+1)
def get_authors_with_books():
    authors = Author.objects.all()
    result = []
    
    for author in authors:
        # Для каждого автора выполняется отдельный запрос к БД
        books = author.books.all()
        result.append({
            'name': author.name,
            'books': [b.title for b in books]
        })
    
    return result`;

export const ormAfterCode = `
# Оптимизированный запрос с prefetch_related
def get_authors_with_books():
    # Загружаем связанные книги одним запросом
    authors = Author.objects.prefetch_related('books').all()
    result = []
    
    for author in authors:
        # Книги уже загружены, нет дополнительных запросов
        books = author.books.all()
        result.append({
            'name': author.name,
            'books': [b.title for b in books]
        })
    
    return result`;

// Django template optimization example
export const templateBeforeCode = `
{% for product in products %}
  <div class="product">
    <h2>{{ product.name }}</h2>
    <p>Категория: {{ product.category.name }}</p>
    
    {% if product.is_on_sale %}
      <p class="sale">В продаже!</p>
    {% endif %}
    
    <p>Цена: {{ product.price_with_tax }}</p>
  </div>
{% endfor %}`;

export const templateAfterCode = `
{% for product in products %}
  <div class="product">
    <h2>{{ product.name }}</h2>
    <p>Категория: {{ product.category.name }}</p>
    
    {% if product.is_on_sale %}
      <p class="sale">В продаже!</p>
    {% endif %}
    
    {% with price_with_tax=product.price_with_tax %}
      <p>Цена: {{ price_with_tax }}</p>
    {% endwith %}
  </div>
{% endfor %}

{% comment %}
В models.py добавляем:
@property
@cached_property  # Кэширование свойства
def price_with_tax(self):
    # Сложное вычисление
    return self.price * 1.2
{% endcomment %}`;

// Lazy loading images examples
export const lazyLoadBeforeCode = `
<!-- Обычная загрузка изображений (без ленивой загрузки) -->
<div class="gallery">
    {% for image in gallery_images %}
    <img src="{{ image.url }}" 
         alt="{{ image.alt }}"
         class="gallery-image">
    {% endfor %}
</div>
`;

export const lazyLoadAfterCode = `
<!-- Ленивая загрузка изображений -->
<div class="gallery">
    {% for image in gallery_images %}
    <img src="{{ image.url }}" 
         alt="{{ image.alt }}"
         loading="lazy"
         class="gallery-image">
    {% endfor %}
</div>

<!-- Для старых браузеров можно использовать JavaScript -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    if ('loading' in HTMLImageElement.prototype) {
        // Браузер поддерживает атрибут loading
        console.log('Нативная ленивая загрузка поддерживается');
    } else {
        // Fallback для старых браузеров
        const images = document.querySelectorAll('img[loading="lazy"]');
        const options = {
            rootMargin: '0px 0px 200px 0px'
        };
        
        const lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        }, options);
        
        images.forEach(function(image) {
            lazyImageObserver.observe(image);
        });
    }
});
</script>
`;
