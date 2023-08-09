# 🌾 Saksham Gram Mahila 🏠

Saksham Gram Mahila is a web application aimed at empowering women in rural areas by providing them with domestic job opportunities, home made product or services to sell and seasonal work options. The platform serves as a bridge between job seekers and employers, enabling women to showcase their talents and find suitable work in their local communities.

- Easy access, posting and selling home products through web application.
- Empowering women in rural areas with diverse job opportunities.
- Striving to create a positive impact on women's lives.
- Contributing to the sustainable development of rural areas.

## ✨ Features

- :writing_hand: **Post Domestic Jobs:** Employers can post domestic jobs available around them or from anywhere, providing opportunities for women across regions to find work.

- :package: **Post Domestic Service requirement or Products to sell:** Users can post requirements for domestic services they need or home-made products they want to sell, promoting entrepreneurship and empowering women.

- :mag_right: **Skill-based Job Matching:** Women can take a skill assessment quiz, and the platform suggests domestic jobs matching their skillset.

- :round_pushpin: **Location-based Job Search:** Users can search for domestic jobs available in their nearest locations, ensuring convenience and accessibility.

- :bookmark_tabs: **Category-based Job Search:** Women can search for domestic jobs based on specific categories, such as services or products to sell, as well as by required job title.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React js
- **Backend:** Node.js, Express.js, Postman
- **Database:** MongoDB
- **Additional Tools:** Git, GitHub

# REST API

## Endpoints for Job Postings

### 1. Login/Register Operations

- **POST** `/api/signup`: Create a new user.
- **POST** `/api/login`: login a prior user.

### 2. Jobs CRUD Operations

- **GET** `/jobs`: Get a list of all job postings.
- **GET** `/jobs/:id`: Get details of a specific job posting.
- **POST** `/jobs`: Create a new job posting.
- **PUT** `/jobs/:id`: Update all fields of a specific job posting.
- **DELETE** `/jobs/:id`: Delete a specific job posting.

### 3. Jobs Search

- **GET** `/jobs/search/categories/:category`: Search all jobs based on category.
- **GET** `/jobs/search/locations/:location`: Search all jobs based on location.
- **GET** `/jobs/search/titles/:title`: Search all jobs based on title.

### 4. Suggest Domestic Jobs

- **GET** `/jobs/suggest/categories`: Get all the suggested category names in which jobs can be found.
- **GET** `/jobs/suggest/categories/:category`: Get all the suggested jobs from the selected category name.

--

## ✨ Screenshots
![0](https://github.com/KaveriRaut/TechForGood-Hackathon/assets/97447480/d45b1ce0-42df-4e8e-8895-29379a715eda)
![1](https://github.com/KaveriRaut/TechForGood-Hackathon/assets/97447480/1164b164-c95b-4b6a-9b4d-1dfd30efa850)
![2](https://github.com/KaveriRaut/TechForGood-Hackathon/assets/97447480/cc580d8f-37ec-44f4-9bb6-6e14c89c249b)
![3](https://github.com/KaveriRaut/TechForGood-Hackathon/assets/97447480/a4eb8589-f972-4b30-8a45-a5f77efaf8c7)

![4](https://github.com/KaveriRaut/TechForGood-Hackathon/assets/97447480/c7df099c-b0b3-462d-b15a-baa11e3209a5)



## 🚀 Getting Started

To run the Saksham Gram Mahila application on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/saksham-gram-mahila.git`
2. Install dependencies: `cd saksham-gram-mahila && npm install`
3. Set up the database: Ensure MongoDB is installed and running. Create a `.env` file and add your database connection string.
4. Start the server: `npm start`
5. Open `http://localhost:5000` in your web browser.


