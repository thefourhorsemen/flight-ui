FROM node:9-slim
ENV PORT 8080
EXPOSE 8080
WORKDIR /usr/src/app
COPY . .
RUN chmod +x docker-start.sh
CMD ["./docker-start.sh"]