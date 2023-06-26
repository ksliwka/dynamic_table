# [Books website](https://books-website-m2h29xgik-ksliwka.vercel.app)

## Table of Contents

- [Overwiew](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation and Usage](#installation-and-usage)

## Overview

The Books website is a platform that allows users to browse and showcase books fetched from the Google Books API. The website provides a user-friendly interface to explore and access detailed information about various books. Users can load books dynamically based on their preferences and requirements. Additionally, the website offers a search functionality to find books written by specific authors, enhancing the browsing experience. To improve user navigation, a breadcrumb feature has been implemented for easier exploration of book categories.

## Key Features

- Fetching data from the Google Books API.
- Breadcrumb functionality for easy navigation.
- Responsive layout for optimal viewing on different devices.
- Modal to display authors and their books.

## Technologies Used

- React
- React DOM
- React Bootstrap
- React Icons
- GSAP
- Bootstrap

The project also utilizes an environment file to store the API key for the Google Books API. The API key is securely stored in the `.env` file, ensuring the protection of sensitive information. This file is not included in the repository and needs to be created separately.

To set up the API key, follow these steps:

1. Create a new file in the project root directory called `.env`.
2. Add the following line to the `.env` file:

`REACT_APP_API_KEY=YOUR_API_KEY_HERE`

Replace `YOUR_API_KEY_HERE` with your actual Google Books API key. 

3. Save the `.env` file.

## Requirements

Make sure you have the following installed:

- Node.js

## Installation and Usage

1. Clone the repository.
2. Install the project dependencies by running the following command:
   `npm install`
3. Start the development server using the following command:
   `npm start`
4. Access the books website through your preferred web browser.
