FROM php:7.4-fpm
RUN apt-get update && apt-get install -y libzip-dev

# Extension zip for laravel
RUN docker-php-ext-install zip

RUN docker-php-ext-install pdo_mysql mysqli
RUN docker-php-ext-install pcntl

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pecl install redis && docker-php-ext-enable redis


#COPY start.sh /usr/local/bin/start
#COPY start.sh /usr/local/bin/start.sh
#RUN ln /usr/bin/R /usr/local/bin/R
RUN mkdir /app
WORKDIR /app

COPY ./entrypoint.sh  /entrypoint.sh
RUN chmod +x /entrypoint.sh
#RUN chown -R www-data:www-data /app && chmod u+x /usr/local/bin/start


# Add user for laravel application
#RUN groupadd -g 1000 www
#RUN useradd -u 1000 -ms /bin/bash -g www www


# Copy existing application directory permissions
#COPY --chown=www:www . /app



RUN apt-get install -y cron
ADD schedule/crontab /etc/cron.d/cron
RUN chmod 0644 /etc/cron.d/cron
RUN touch /var/log/cron.log

# Change current user to www
#USER www
EXPOSE 9000
ENTRYPOINT "/entrypoint.sh"

#CMD ["php-fpm"]
#CMD ["/usr/local/bin/start"]
#CMD cron && docker-php-entrypoint php-fpm && /usr/local/bin/start

#CMD printenv > /etc/environment && docker-php-entrypoint php-fpm && echo "cron starting..." && (cron) && : > /var/log/cron.log && tail -f /var/log/cron.log

# ADD entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# ENTRYPOINT /entrypoint.sh
#RUN chown -R www-data:www-data /app
#RUN chmod u+x /usr/local/bin/start
#CMD ["/usr/local/bin/start"]
