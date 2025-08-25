FROM php:8.2-fpm

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    libpq-dev \
    git \
    unzip \
    curl \
    && docker-php-ext-install pdo pdo_pgsql

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Define diretório de trabalho
WORKDIR /var/www/html

# Copia arquivos
COPY . .

# Instala dependências do Laravel
RUN composer install --no-interaction --optimize-autoloader --no-dev

# Ajusta permissões
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expõe porta
EXPOSE 8000

# Roda o servidor Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
