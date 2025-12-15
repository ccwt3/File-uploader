# File-uploader
**Goals:** 
- Learn how to work with file management
- Use prisma to manage the sessions storage and the URL of the files
- Learn how to use providers like Supabase
- Improve ability with reading documentation
- Learn Basic Ts

**Constraints:** 
- No use of AI more than gemini in the google search bar and claude for reviewing the final code.

---
#### General structure
1. Initial setup of Express
2. Initial setup of Prisma (database)
3. Set the Database and models
4. Authentication with passport
5. Authenticated users can:
	- CRUD Folders
	- Upload, Read, and Delete files
		- Work with the Multer 
	- Check the details of their files
	- Download the files
6. Unauthenticated users can:
	- Read files
	- CRUD Folders
7. Validate Files
8. Store the files in Supabase Storage
9. Store the URL in the db with prisma
10. Add a share folder functionality
---
#### Database Structure:

| Users Table | URLs table | file_data |
| --------------------- | -------------------- | ------------------- |
| id (PK)               | id (PK)              | id (PK)             |
| username              | authorId (FK)        | fileId (FK)         |
| password              | url                  | name                |
| isAuth (false)        |                      | size                |
|                       |                      | upload_time         |

#### Stack
1. Express
2. Passport
3. Postgresql + Supabase Storage
4. Prisma