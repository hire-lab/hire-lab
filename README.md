# Hire Lab
React application for creating, managing and adding job listings for both users and companies, currently deployed on Netlify. 
To execute it manually open a terminal and run `npm start` or access https://vigilant-borg-2cfac4.netlify.app .

### Authentication

The service is initialized with two users, which can be used for immediate testing:
* johndoe@gmail.com : 123456 - for users
* email@company.com : 123456 - for companies

# Live Demo 
https://vigilant-borg-2cfac4.netlify.app/ 

## Functionality
* User or Company Registration/Login/Logout
* Option for viewing and searching job listings by title and/or location
* Option for applying for users
* Option for viewing candidate profiles for companies, approve for an interview or reject
* Once approved, option for booking an interview with a date and time slot - for companies
* Option for viewing all job interviews by date with react calendar - for companies
* Fluid UX

## Technologies
* React, React Router 5, React calendar
* HTML, CSS, Javascript
* Netlify

## User Views (Pages)
* **Welcome screen** - landing page
* **Login/Register** - regsitration with email, name, CV URL link, and password for users, looking to apply for a job; additional information on registered users in hire-lab-rest-api
* **Profile Page** - information about email, name and CV URL link
* **Profile Editor** - integrated edit for email, name and CV URL link information or delete account
* **Jobs Browser** - list with jobs and option to search by title or location
* **Job Details** - additional description, information about the company, and option to apply


## Company Views (Pages)
* **Welcome screen** - landing page
* **Login/Register** - regsitration with email, company name and password for companies. After successful login, user is redirected to all jobs browser; additional information on registered users in hire-lab-rest-api
* **Company Jobs Browser** - list with all company job listings
* **Job Details** - additional description, option to edit or delete, information about the candidates, as well as booked interviews for the job listing
* **Job Editor** - integrated editor for job listing
* **Job Candidates** - summary of the candidates who have applied for the job opening
* **Candidate Profile Page** - information about candidate; approve and reject interview buttons
* **Job Interviews** - summary of upcoming interviews
* **Add Interview** - option for adding an interview

## Implementaion
### Data Structure
### Collections
* Sessions (default)
* Users (default)
```javascript
{
    name: String,
    email: String,
    cv: String, 
    password: String
}
```

* Companies
```javascript
{
    name: String,
    email: String,
    password: String
}
```

* Jobs
```javascript
{
    title: String,
    companyName: String,
    description: String,
    location: String
}
```
* Candidates
```javascript
{
    jobId: Pointer<Job>,
    companyId: Pointer<Company>,
    name: String,
    email: String,
}
```

* Interviews
```javascript
{
    jobId: Pointer<Job>,
    candidateId: Pointer<Candidate>,
    companyId: Pointer<Company>,
    date: Date,
    time: String,
}
```

#### Access Control
* Guests can register, view the job catalog and job details
* Registered users can do all the above, as well as apply for the job listings; edit and delete profile
* Registered companies can view the job catalog and job details; add, edit and delete job listings of their own; add new candidates; approve candidates for interviews or reject them
