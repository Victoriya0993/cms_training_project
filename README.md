## Проект реализует конструктор сайтов-визиток (cms проект).

### 1. Архитектура:
Микросервисная. Дополнительно реализована система обмена сообщениями (RabbitMQ)


### 2. Основные паттерны: 
Одиночка, фабрика, декоратор. Использование  IoC (DI) было реализовано средствами NestJS

### 3. Технологический стек

#### Frontend: Typescripts, React, Webpack, Docker 
#### Backend: Typescript, NestJS, Jest, Docker
#### Дополнительно: RabbitMQ 
#### Инфраструктура: Docker-compose 


### 4. Для запуска проекта необходимо в корне набрать команду 
#### docker-compose up --build