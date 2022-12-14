FROM docker:git as build
COPY . /git
RUN echo "<center><h1>" > /rev.html
RUN git -C /git rev-parse --short HEAD >> /rev.html
RUN echo "</h1></center>" >> /rev.html


FROM nginx:alpine
COPY --from=build /index.html /usr/share/nginx/html
