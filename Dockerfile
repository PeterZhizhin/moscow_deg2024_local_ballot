FROM nginx:alpine

# Remove the default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy the modified nginx conf
COPY default.conf /etc/nginx/conf.d/

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copies static resources from the host
COPY . .

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
