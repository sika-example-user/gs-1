FROM docker:git as build
COPY . /git
RUN git -c /git rev-parse --short HEAD > /index.html

FROM nginx:alpine
COPY --from=build /index.html /usr/share/nginx/html
