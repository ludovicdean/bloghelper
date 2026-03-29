FROM nginx:alpine

# Copie Angular (browser)
COPY dist/bloghelper/browser/ /usr/share/nginx/html/

# Copie config nginx (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]