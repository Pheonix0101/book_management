# Pre-requisites
Install Node.js version 14.17.6

# Run the node project
## 1. Clone the repository
```git clone <https://github.com/Pheonix0101/book_management.git>```

## 2. Install dependencies
```npm install```

## 3. run the project
`npm start`

# Run Application IN docker

## 1. Clone the repository
```git clone <https://github.com/Pheonix0101/book_management.git>```

## 2. Run some docker Commands
1> `docker build -t purushottam0113/book-management:0.0.1.RELEASE .`

2>  `docker container run -d -p 9000:9000 purushottam0113/book-management:0.0.1.RELEASE `

3> `docker container ls`


# EndPoints followed with route name
http://localhost:9000/

1> for Adding:- create;  
2> for view database:- get;  
3> for searching in database by ItsID:- findbyId/book_id   
4> for deleting :- delete      
5> for update :- update/Book_id

## You can also pull the Docker Image From DockerHUb
`docker pull purushottam0113/book-management`


## Repeat the above steps to run Application.


# Application is also deployed on AWS ECS
EndPoints :-  `http://16.171.4.126:9000/`  followed by route Names;

# Deployment process:
1> Open Aws console (create AWS account if you don't have one).\
2> Go to ECS and create a cluster.\

3> Create an ECR repository.\
   ![](<ECR repo.png>)

4> Push docker image to ECR repository.\
    ![](<push to ecr.png>)

5> Create a task definition.\
    ![](<task definition.png>)


6> Create service out of the task definition on the created cluster.
    ![](<create service.png>)

7> Find your public IP.
    ![](<public IP.png>)

## Note: AWS has security feature called security groups where we can define inbound and outbound IP rules. Here are my inbound rules

![](<inbound rules.png>)


 