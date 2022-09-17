# Quiz Application OpenText - Fall 2022

Run Backend:
1. Install the Lombok plugin for IDEA. 
	..1. Open the Settings panel (Ctrl + Alt + S). Search for "Plugins", then search for "Lombok" in the plugins. 
	1b） Find the plugin and install it. Finally, restart your IDEA. Then everything will be OK!
2. In the SQL Shell(psql) create the database, and connect the database (You need to connect to a database to run your application)
  2a)To create a database, use "create database {database_name}"
  2b)To view the list of all database use "\l"
  2c)To view the list of all tables in the current database use "\dt"
  2d)To connect a database, use "\c {database_name}"
3. Add the databse_name to your project
  3a) find the application.properties file under quiz-app -> src -> main -> resources
  3b) replace the spring.datasource.url with jdbc:postgresql://localhost:5432/{database_name}
4. Run the project!

Expected JSON Format from the front-end:
{
    "quiz":{
        "quizName": "Calculus",
        "subject": "Math",
        "questions": [
            {
              "content": "What's 1 + 1",
              "correctAnswerID": 4,
              "answers": [
                  {
                    "content": "1"
                  },
                  {
                    "content": "2"
                  },
                  {
                    "content": "3"
                  },
                  {
                    "content": "4"
                  }
              ]
            }
        ]
    }
}


  

