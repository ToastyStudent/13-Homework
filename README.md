# 13-Homework-E-Commerce-Back-End-Challenge

## Description
This project was built from code provided via Northwestern University's Full-stack Development Coding Bootcamp's TAs, with me rewriting code in order to ensure I understand how to properly build the app were I to attempt to do so again under less time constraints than those I am currently under.

Specifically, I configured a pre-built, working Express.js API to use Sequelize to interact with a MySQL database to create the "back-end" for a hypothetical e-commerce website.


# Installation and Usage
One must first clone this Github respoitory and then run npm i to install the various node_modules that allow the application to run.

Then, in a mySQL terminal, one will need to copy the contents of the [schema file](./db/schema.sql) into said terminal's command line in that order.

Therafter, in the terminal in which npm i was intially run to install the node-modules, one must run the command "node seeds/index.js" to seed the database with data.

Finally, again in that same terminal, one must run the command "node server.js" to launch the application's connection to the MySQL server.

After doing so, to use the app, one must, in a software such as Insomnia Core or Postman, test out the various GET, POST, UPDATE, and DELETE routes defined in the files within the [api folder of the routes folder](./routes/api/) to simulate utilizing the backend of an ecommerece website.

# Video Demo of App
[A video demonstration of the Application](https://drive.google.com/file/d/1E6M9I1s6sa459T_mAxAdBUUKkEozhuei/view?usp=sharing)

# Credits
This entire project was built using code provided by Northwestern University's Full-stack Development Coding Bootcamp TAs from the following repository:

https://nu.bootcampcontent.com/NU-Coding-Bootcamp/NU-VIRT-FSF-PT-01-2023-U-LOLC/-/tree/main/00-homework-solutions/13-Main

With their express permission, I used the code provided as a template which I then modified, primarily through the renaming of elements, addition/modification of comments, and rearrangemet of variables.
