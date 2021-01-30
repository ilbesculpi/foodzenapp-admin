FROM node:14.15-alpine
EXPOSE 3200
RUN mkdir -p /var/www/admin
WORKDIR /var/www/admin
COPY . /var/www/admin
CMD ["npm", "start"]
