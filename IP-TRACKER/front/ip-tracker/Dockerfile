FROM node:20-alpine As builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx:alpine

# Copie du build Vue dans NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Suppression du fichier de conf Nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Ajout d’un fichier de config optimisé Vue SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]