# Repoviewer

## Что за приложение?

Repoviewer - проект, который направлен на отображение списка репозиториев Github и работу с этим списком

## Как запустить приложение локально?

1. Склонируйте репозиторий
  ```bash
  git clone https://github.com/Artemitol/vk-testapp
  cd vk-testapp
  ```
2. Установите docker desktop или docker daemon [click me](https://docs.docker.com/get-started/get-docker/)
3. Установите docker CLI (для доступа к команде docker-compose из терминала) 
4. Запустите приложение с помощью команды снизу
  ```bash
  docker-compose up -d --build
  ```
5. После этого посмотреть приложение можно будет по [ссылке](http://localhost:8080) 

## Детали реализации [click me](./frontend/)
В директории `/frontend` в файле `README.md` описана документация с точки зрения реализации frontend приложения


## Реализованный функионал
1. Отображение списка репозиториев на клиенте
2. Infinite scroll
4. Удаление репозиториев
5. Добавление новых репозиториев
6. Сортировка по нескольким полям со стороны frontend
7. Каждый запрос на сервер сопровождается ui анимациями, показывающими статус приложения
8. Центр уведомлений, информирующий пользователя о каждом событии в приложении
9. Асинхронное выполнение запросов на Github api
10. Single-Page-Application




