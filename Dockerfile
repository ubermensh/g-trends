FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json .
#COPY client/package.json ./client
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .


# Bundle app source
COPY . .

RUN npm install & npm install --prefix client

EXPOSE 3000
CMD [ "npm", "start" ]
