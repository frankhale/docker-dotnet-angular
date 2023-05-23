FROM node:latest AS build
WORKDIR /app

COPY . .
RUN npm ci && npm run build --prod

FROM nginx:alpine
COPY frontend.crt frontend.key /etc/nginx/ssl/
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/helloworld-angular /usr/share/nginx/html
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]