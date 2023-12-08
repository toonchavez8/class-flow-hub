# School Management System

## Description

This web application is designed to manage the academic processes of a school. It includes features such as enrollment, viewing academic results, and scheduling/following up on appointments with teachers/guardians.

## Roles

- **SUPERUSER**: There can be only one user with this role. They cannot perform any academic processes.
- **ADMINISTRATIVE**: One or more users can have this role. They handle all academic processes.
- **GUARDIAN**: Adults responsible for the students. A guardian can be responsible for one or more students.
- **STUDENT**: Registered students for the current academic year. A student must have one or a maximum of two guardians.
- **FORMER STUDENT**: Students not registered for the current academic year. A student must have one or a maximum of two guardians.
- **TEACHER**: Professionals who teach subjects to students.
- **SUBJECT**: Course (subject) taught to students.
- Any other roles that the developer deems necessary.

## User Stories

### SUPERUSER

- [ ] Log in to the system with a username and password.
- [ ] Change my password at any time.
- [ ] Register administrative users.
- [ ] Deactivate administrative users.
- [ ] Generate statistical reports related to the processes performed by all roles in the system.

### ADMINISTRATIVE

- [ ] Log in to the system with a username and password.
- [ ] Register guardian users.
- [ ] Deactivate guardian users.
- [ ] Register student users.
- [ ] Deactivate student users.
- [ ] Register teacher users.
- [ ] Deactivate teacher users.
- [ ] Create a subject (course).
- [ ] Deactivate a subject.
- [ ] Assign a teacher to a subject.
- [ ] Reassign a new teacher to a subject.
- [ ] Enroll a student for the current academic year.
- [ ] Attach required documents for the enrollment to be considered valid.
- [ ] Generate statistical reports of the processes performed by this user and any other user with the same role.

### TEACHER

- [ ] Log in to the system with a username and password.
- [ ] Assign grades (academic results) to students.
- [ ] Notify guardians via email of students who failed (score below 13).
- [ ] Notify guardians via email of students who passed (score 13 or higher).
- [ ] Schedule an appointment via email with guardians to discuss the student's situation.
- [ ] Record in the system whether the guardian attended a personal appointment.

### GUARDIAN

- [ ] Log in to the system with a username and password.
- [ ] Attach required documents for the enrollment to be considered valid.
- [ ] View the grades of students for whom they are guardians.
- [ ] View the courses and teachers of those courses in which the students they are guardians for are enrolled.
- [ ] Request an appointment with one of the teachers of the students they are guardians for.

### STUDENT

- [ ] View the grades of the courses in which I am enrolled.

## Business Rules

- The system should assign a random password to all users upon registration.
- The system should require the user to change their password on their first login (customized password).
- The system should not allow the change of the username for any user.
- The system should not accept a previously used password.
- Grades for courses are on a scale of 0 to 20 points.
- A passing grade is 13 or higher.
- Each course can only be taught by one teacher.
- Every course must be assigned to an academic grade.
- Academic grades are 1st to 6th grade of primary and 1st to 5th year of secondary.
- Primary and Secondary are the two academic levels of the school.
- The enrollment process requires attaching a set of documents in PDF format. The quantity and information contained therein are at the developer's discretion.
- The enrollment can be in one of the following 5 states: Reserved, Conditional, Rejected, Revoked, or Valid.
- Upon login, the system must notify the user of the date and time of the previous login.
- Any specifications not mentioned here are at the discretion of the developer.

## Technical Aspects

- Data persistence must be implemented using MongoDB Atlas.
- The username and password of the SUPERUSER must be preloaded into the database.
- Use the passport-local and jwt strategy for the authentication system.
- "Deactivate" does not mean deleting data from the system but setting the status flag to inactive.
- Any specifications not mentioned here are at the discretion of the developer.
