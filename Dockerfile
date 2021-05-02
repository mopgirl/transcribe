# node install
FROM node:12.18.3 as build-stage

WORKDIR /transcribe
COPY ./package*.json /transcribe/

RUN npm install

COPY ./ /transcribe/
ARG configuration=production

#angular build
RUN npm run build -- --output-path=./dist/out --configuration $configuration
#
FROM nginx:1.15
#
COPY --from=build-stage /transcribe/dist/out/ /usr/share/nginx/html
#nginx.conf コピー
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
