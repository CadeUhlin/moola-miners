FROM ubuntu AS build
WORKDIR /src

# Clone the latest source 
RUN git  -c http.sslVerify=false clone https://github.com***/**/reactproject.git
WORKDIR /src/app

# Checkout the master branch --  no action needed as its default branch

RUN npm install
RUN npm run build-test

# stage: 2 — the production environment
FROM nginx:alpine
COPY --from=build /src/app/default.conf /etc/nginx/conf.d
COPY --from=build /src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
