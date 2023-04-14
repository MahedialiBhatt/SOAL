To Start Applicaction:
 1. npm install
 2. npm run createdb
 2. npm run start


Follow Above step to start application and this will add fake data into db.


List Of APIs


- POST /attendance -> required under req.body(studentId, subjectId, date, status)

- GET /students
- GET /student/last-five/:studentId -> req.params.studentId is required ->last 5 attendad class
- GET /student/:studentId/:month -> req.params.studentId, req.params.month is required (month will be in number) -> attended class by student in given month
- GET /student/below85 -> return all students whose attendence is lower thahn 85

- GET /subjects