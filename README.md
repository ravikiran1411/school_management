# School Management API

A Node.js and MySQL based REST API for managing schools.

This project allows users to:
- Add new schools
- Retrieve schools sorted by proximity to the user's location
- Calculate geographical distance using the Haversine Formula

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv
- Postman

---


# Features

- Add School API
- List Schools API
- Input validation
- Distance-based school sorting
- Haversine Formula implementation
- MySQL database integration
- RESTful API architecture

---

# Project Structure

```text
school_management/
│
├── config/
│   └── mysql.js
│
├── controllers/
│   └── schoolController.js
│
├── routes/
│   └── schoolRoutes.js
│
├── .env
├── package.json
├── server.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/ravikiran1411/school_management.git
```

---

## Move Into Project Folder

```bash
cd school_management
```

---

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
PORT=4000
```

---

# Database Setup

Run the following SQL queries in MySQL Workbench.

```sql
CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(200) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# Run Server

```bash
npm run server
```

Expected output:

```bash
DB connected successfully..
api connected
```

---

# API Endpoints

# 1. Add School API

## Endpoint

```bash
POST /api/school/add
```

---

## Request Body

```json
{
  "name": "Narayana School",
  "address": "Vijayawada",
  "latitude": 16.5062,
  "longitude": 80.6480
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "school added to database"
}
```

---

# 2. List Schools API

Returns schools sorted by nearest distance.

## Endpoint

```bash
GET /api/school/list?lat1=16.5062&long1=80.6480
```

---

## Success Response

```json
{
  "success": true,
  "sortSchool": [
    {
      "id": 1,
      "name": "Narayana School",
      "address": "Vijayawada",
      "latitude": 16.5062,
      "longitude": 80.648,
      "distance": 0
    },
    {
      "id": 2,
      "name": "NRI College",
      "address": "Gannavaram",
      "latitude": 16.5408,
      "longitude": 80.8025,
      "distance": 17.01
    }
  ]
}
```

---

# Distance Calculation

This project uses the Haversine Formula to calculate geographical distance between user coordinates and school coordinates.

---

# Validation Rules

- All fields are required
- Latitude and Longitude must be numbers
- Proper database error handling implemented

---

# Testing

Tested using:
- Postman
- MySQL Workbench

---

# Deployment

This project can be deployed using:
- Render
- Railway

---

# Author

Ravi Kiran Allimilli