# Project Title

## Introduction
This is a Dashboard of DOQFY, where a everey particular user can view details of his/her wallet amount, order details and chart respresentaion of E-stamp and E-Sign of various branches.

## Deplolyed App
https://deployed-site.whatever

## Video Walkthrough of the project

## Features

- Wallet Money is dynamically upadted.
- Pending issues can be seen, which fetched from backend
- Theres is display of order details of of various states of India, described as per
   -> Total order
   -> In Progress
   -> Completed
   -> Cancelled

- Theres is also a chart display with a select tag to choose various states of India. 
  Describing  E-stamps and E-Sign :
  -> Initiated
  -> Signed 
  -> Pending
  -> Expired


## Installation & Getting started
-> to Locally Run the Project 
### ng serve
This command will build and launch the development server for you locally at http://localhost:4200

-> To get The data from backend(JSON-Server) as data is stored in json file
## json-server --watch src/assets/data.json

```bash
npm install
cd my-project
ng serve
```


Include screenshots as necessary.

## APIs Used
-> Json Server has been used for backend
### http://localhost:3000

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET http://localhost:3000/users - retrieve all users
GET http://localhost:3000/orders - retrieve all Orders
GET http://localhost:3000/pending - retrieve all Pending Orders
GET http://localhost:3000/esign - retrieve all Pending E-Sign
GET http://localhost:3000/estamp - retrieve all E-Stamps


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Angular 16
- CSS
- Google Fonts for Icons and Fonts
- Chart.js -> ng Chart2
- Anugular Material Ui