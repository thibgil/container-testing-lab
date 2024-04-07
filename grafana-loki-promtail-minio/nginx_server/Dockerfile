FROM ubuntu
RUN apt-get -y update && apt-get -y install nginx
COPY nginx.conf /etc/nginx/sites-available/nginx.conf
EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]