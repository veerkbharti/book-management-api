# Book Management API

A RESTful API for managing books.

## API Endpoints and Their Usage

### Author API Endpoints
- **GET /api/v1/authors**: Retrieve a list of all authors.
- **POST /api/v1/authors/new**: Add a new author.
- **GET /api/v1/authors/:id**: Retrieve details of a specific author by its ID.
- **PUT /api/v1/authors/:id**: Update a author's details.
- **DELETE /api/v1/authors/:id**: Delete a author.

### Book API Endpoints
- **GET /api/v1/books**: Retrieve a list of all books.
- **POST /api/v1/books/new**: Add a new book.
- **GET /api/v1/books/:id**: Retrieve details of a specific book by its ID.
- **PUT /api/v1/books/:id**: Update a book's details.
- **DELETE /api/v1/books/:id**: Delete a book.

...

## Setting Up and Running the Application Locally

### Prerequisites

- Node.js
- npm

### Installation

``````
git clone https://github.com/veerkbharti/book-management-api.git
``````
``````
cd book-management-api
``````
``````
npm install
``````
``````
npm run dev or npm start
``````

## Deployment on VPS Server

### Connection
``````
ssh root@<server ip address>
``````

### Uploading Apps Using Git
``````
apt install git
``````
``````
git clone https://github.com/veerkbharti/book-management-api.git
``````

### Setup the project
``````
cd book-management-api
``````
``````
npm install
``````
### Run the project
``````
apt install nodejs
``````
``````
apt install npm
``````
``````
npm i -g pm2
``````
``````
pm2 start server.js
``````
### Add port
``````
sudo iptables -L
``````
``````
sudo iptables -A INPUT -p tcp --dport 4000 -j ACCEPT
``````
``````
sudo apt install netfilter-persistent
``````
``````
sudo netfilter-persistent save
``````