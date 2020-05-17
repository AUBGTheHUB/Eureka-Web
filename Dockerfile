#   This is a dockerfile for a production build
#   You won't be able to use this as a dev/testing environment
FROM thehubaubg/unimorph-backend:latest as static_files

RUN python manage.py collectstatic --no-input

# ======================================================================= #

FROM node:14.2.0-alpine as build

LABEL maintainer="Ismayil Mirzali <ismayilmirzeli@gmail.com>"

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --silent --save-prod

COPY . .

RUN npm run build --silent

# ======================================================================= #
# Set up NGINX

FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/assets /usr/share/nginx/html/assets
COPY --from=static_files /usr/src/app/static /usr/share/nginx/html/static

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
