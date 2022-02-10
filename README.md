# Hire Lab
Application to be used by Human Resources Department for managing company's job listings, upcoming interviews and potential candidates.

## Functionality
* User Registration (only for members of the HR Team; added validation for company email account);
* Option for viewing job listings (guests);
* Option for creating a job listing (logged-in users);
* Option for editing and deleting a job listings (logged-in users);
* Option for booking an interview for logged-in users;
* Keeping a list of potential candidates for each job listing;
* Keeping a list of candidates, who do not have a booked interview;
* Keeping statistic for upcoming inteviews based on the principles of good time management;
* Fluid UX;

## Technologies
* HTML, CSS, Javascript, React
* Atlas MongoDB
* Node.js REST API, Heroku
* Github Pages

## Views (Pages)
* **Welcome screen** - landing page
* **Login/Register** - registration with email, name and password
* **Jobs Browser** - list with all job listings
* **Job Details** - title, additional description, dropdown list of potential candidates for this job
* **Candidates Browser** - list with all candidates
* **Candidate Profile** - name, position; each candidate can have only one booked interview at a time
* **Interviews Browser** - list with all interviews
* **Interview Details** - [Approve] and [Reject] buttons for candidates whose interview has passed;


## Implementaion
### Data Structure
### Collections
* Sessions (default)
* Users (default)
```javascript
{
    email: String,
    name: String, 
    password: String
}
```

* Candidates
```javascript
{
    name: String,
    email: String, 
}
```

* Jobs
```javascript
{
    title: String,
    description: String,
}
```

* Interviews
```javascript
{   job: Pointer<Jobs>,
    potentialCandidates:  Pointer<Candidates> 
    jobTitle: type: String,
    candidateName: type: String
}
```

#### Access Control
* Guests can register, view the job listings.
* Registered users can log in, as well as view the job listings, the list of potential candidates, and the list of interviews.
* Only looged-in users can add, edit and delete a job listing, add, edit and delete candidates, add interviews.
