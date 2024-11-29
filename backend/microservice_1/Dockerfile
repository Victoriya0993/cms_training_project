FROM node:16-alpine
# создание директории приложения
WORKDIR /app
# Копирование содержимого
COPY . .
# выдача прав
RUN chmod a+x /app/node_modules/.bin/nest
# Запуск проекта
ENTRYPOINT ["npm","run","start:prod"]
