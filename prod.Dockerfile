#   This is a dockerfile for a production build
#   You won't be able to use this as a dev/testing environment

FROM node:14.2.0-alpine as build

LABEL maintainer="Ismayil Mirzali <ismayilmirzeli@gmail.com>"

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --silent --save-prod

RUN npm run build --silent

# Set up NGINX

FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/assets /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
