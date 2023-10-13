# Используйте официальный образ Node.js
FROM node:14

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Скопируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте остальные файлы приложения
COPY . .

# Соберите приложение
RUN npm run build

# Опубликуйте приложение на порту 80
EXPOSE 80

# Запустите приложение
CMD ["npm", "run", "start"]
