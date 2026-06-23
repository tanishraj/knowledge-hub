# SQLite From Scratch to Advanced

A beginner-friendly, complete guide to learning SQLite step by step.

SQLite is a lightweight database engine that stores data in a single file. It is simple, fast, serverless, and widely used in mobile apps, desktop apps, small web apps, testing, data analysis, and local development.

---

## Table of Contents

1. [What is SQLite?](#1-what-is-sqlite)
2. [Why Learn SQLite?](#2-why-learn-sqlite)
3. [SQLite vs MySQL vs PostgreSQL](#3-sqlite-vs-mysql-vs-postgresql)
4. [Installing SQLite](#4-installing-sqlite)
5. [SQLite Basic Commands](#5-sqlite-basic-commands)
6. [Creating Your First Database](#6-creating-your-first-database)
7. [Creating Tables](#7-creating-tables)
8. [SQLite Data Types](#8-sqlite-data-types)
9. [Inserting Data](#9-inserting-data)
10. [Reading Data with SELECT](#10-reading-data-with-select)
11. [Filtering Data with WHERE](#11-filtering-data-with-where)
12. [Sorting Data with ORDER BY](#12-sorting-data-with-order-by)
13. [Limiting Results](#13-limiting-results)
14. [Updating Data](#14-updating-data)
15. [Deleting Data](#15-deleting-data)
16. [Constraints](#16-constraints)
17. [Primary Keys and Auto Increment](#17-primary-keys-and-auto-increment)
18. [Foreign Keys and Relationships](#18-foreign-keys-and-relationships)
19. [Joins](#19-joins)
20. [Aggregation and Grouping](#20-aggregation-and-grouping)
21. [Subqueries](#21-subqueries)
22. [Views](#22-views)
23. [Indexes](#23-indexes)
24. [Transactions](#24-transactions)
25. [SQLite Date and Time](#25-sqlite-date-and-time)
26. [ALTER TABLE](#26-alter-table)
27. [Importing and Exporting Data](#27-importing-and-exporting-data)
28. [SQLite with Python](#28-sqlite-with-python)
29. [Database Design Basics](#29-database-design-basics)
30. [Normalization](#30-normalization)
31. [Advanced SQLite Features](#31-advanced-sqlite-features)
32. [Common Mistakes](#32-common-mistakes)
33. [Practice Project](#33-practice-project)
34. [Useful SQLite Commands Cheat Sheet](#34-useful-sqlite-commands-cheat-sheet)
35. [Learning Path](#35-learning-path)

---

# 1. What is SQLite?

SQLite is a relational database management system.

A relational database stores data in tables. A table is like an Excel sheet. It has rows and columns.

Example table: `students`

| id | name | age | email |
|---:|------|----:|-------|
| 1 | Rahul | 20 | rahul@example.com |
| 2 | Priya | 22 | priya@example.com |

SQLite is different from many other databases because it does not need a separate server.

With MySQL or PostgreSQL, you usually run a database server.

With SQLite, your full database is usually stored in one file, for example:

```text
school.db
```

That one file can contain many tables, indexes, views, and data.

---

# 2. Why Learn SQLite?

SQLite is great for beginners because:

- It is easy to install.
- It does not require a server.
- It is perfect for learning SQL basics.
- It stores the database in a single file.
- It is used in real-world apps.
- It works well with Python, JavaScript, mobile apps, and desktop apps.

SQLite is commonly used in:

- Mobile apps
- Desktop apps
- Browser storage
- Local development
- Testing
- Small websites
- Command-line tools
- Data analysis
- Learning SQL

---

# 3. SQLite vs MySQL vs PostgreSQL

| Feature | SQLite | MySQL | PostgreSQL |
|---|---|---|---|
| Server required | No | Yes | Yes |
| Setup difficulty | Very easy | Medium | Medium |
| Best for | Local apps, small apps, learning | Web apps | Advanced web apps, enterprise apps |
| Database storage | Single file | Server-managed files | Server-managed files |
| Multi-user heavy traffic | Limited | Good | Excellent |
| Beginner friendly | Excellent | Good | Good |

Use SQLite when:

- You are learning SQL.
- You want a local database.
- Your app is small or medium.
- You do not need many users writing at the same time.
- You want a simple database file.

Use MySQL/PostgreSQL when:

- You are building a large production web app.
- Many users write data at the same time.
- You need advanced server-level database features.

---

# 4. Installing SQLite

## Check if SQLite is already installed

Open your terminal and run:

```bash
sqlite3 --version
```

If you see a version number, SQLite is installed.

Example:

```text
3.45.1
```

## Install on macOS

SQLite usually comes pre-installed on macOS.

You can also install it using Homebrew:

```bash
brew install sqlite
```

## Install on Ubuntu/Linux

```bash
sudo apt update
sudo apt install sqlite3
```

## Install on Windows

1. Go to the SQLite download page.
2. Download the SQLite tools zip file.
3. Extract it.
4. Add the extracted folder to your system PATH.
5. Open Command Prompt and run:

```bash
sqlite3 --version
```

---

# 5. SQLite Basic Commands

SQLite has two types of commands:

1. SQL commands
2. SQLite shell commands

## SQL Commands

These commands work with your database data.

Examples:

```sql
CREATE TABLE users (...);
INSERT INTO users (...);
SELECT * FROM users;
UPDATE users SET ...;
DELETE FROM users WHERE ...;
```

SQL commands usually end with a semicolon `;`.

## SQLite Shell Commands

These commands help you use the SQLite command-line tool.

They usually start with a dot `.`.

Examples:

```sql
.tables
.schema
.mode table
.headers on
.exit
```

Shell commands do not need a semicolon.

---

# 6. Creating Your First Database

Create a new database file:

```bash
sqlite3 school.db
```

This opens SQLite and creates `school.db` if it does not already exist.

Inside SQLite, enable better output formatting:

```sql
.headers on
.mode table
```

Exit SQLite:

```sql
.exit
```

Open the same database again:

```bash
sqlite3 school.db
```

---

# 7. Creating Tables

A table stores data in rows and columns.

Syntax:

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype
);
```

Example:

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    email TEXT
);
```

This creates a table called `students`.

Columns:

- `id`: stores a number and works as the unique identifier
- `name`: stores text
- `age`: stores a number
- `email`: stores text

Check all tables:

```sql
.tables
```

Check table structure:

```sql
.schema students
```

---

# 8. SQLite Data Types

SQLite uses flexible typing. That means SQLite is more relaxed than some other databases.

Main SQLite storage classes:

| Data Type | Meaning | Example |
|---|---|---|
| NULL | No value | NULL |
| INTEGER | Whole number | 25 |
| REAL | Decimal number | 99.50 |
| TEXT | Text/string | 'Rahul' |
| BLOB | Binary data | Image/file data |

## Common column types

You may commonly write:

```sql
name TEXT
age INTEGER
price REAL
created_at TEXT
```

SQLite accepts types like `VARCHAR`, `BOOLEAN`, `DATE`, and `DATETIME`, but internally it maps them to one of its storage classes.

## Boolean values in SQLite

SQLite does not have a separate Boolean storage class.

Usually:

```text
0 = false
1 = true
```

Example:

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    title TEXT,
    is_completed INTEGER
);
```

---

# 9. Inserting Data

Use `INSERT INTO` to add data.

```sql
INSERT INTO students (id, name, age, email)
VALUES (1, 'Rahul', 20, 'rahul@example.com');
```

If `id` is an integer primary key, SQLite can generate it automatically.

```sql
INSERT INTO students (name, age, email)
VALUES ('Priya', 22, 'priya@example.com');
```

Insert multiple rows:

```sql
INSERT INTO students (name, age, email)
VALUES
('Aman', 21, 'aman@example.com'),
('Sara', 19, 'sara@example.com'),
('John', 23, 'john@example.com');
```

---

# 10. Reading Data with SELECT

Read all columns:

```sql
SELECT * FROM students;
```

Read selected columns:

```sql
SELECT name, email FROM students;
```

Use aliases:

```sql
SELECT name AS student_name, email AS student_email
FROM students;
```

---

# 11. Filtering Data with WHERE

Use `WHERE` to filter rows.

```sql
SELECT * FROM students
WHERE age = 20;
```

Comparison operators:

| Operator | Meaning |
|---|---|
| = | Equal to |
| != | Not equal to |
| <> | Not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

Examples:

```sql
SELECT * FROM students WHERE age > 20;
SELECT * FROM students WHERE age <= 22;
SELECT * FROM students WHERE name = 'Rahul';
```

## AND

```sql
SELECT * FROM students
WHERE age > 18 AND age < 23;
```

## OR

```sql
SELECT * FROM students
WHERE age = 20 OR age = 22;
```

## NOT

```sql
SELECT * FROM students
WHERE NOT age = 20;
```

## IN

```sql
SELECT * FROM students
WHERE age IN (20, 22, 23);
```

## BETWEEN

```sql
SELECT * FROM students
WHERE age BETWEEN 18 AND 22;
```

## LIKE

`LIKE` is used for pattern matching.

```sql
SELECT * FROM students
WHERE name LIKE 'R%';
```

Meaning: names starting with `R`.

```sql
SELECT * FROM students
WHERE email LIKE '%gmail.com';
```

Meaning: emails ending with `gmail.com`.

Wildcards:

| Wildcard | Meaning |
|---|---|
| `%` | Any number of characters |
| `_` | One character |

---

# 12. Sorting Data with ORDER BY

Sort ascending:

```sql
SELECT * FROM students
ORDER BY age ASC;
```

Sort descending:

```sql
SELECT * FROM students
ORDER BY age DESC;
```

Sort by multiple columns:

```sql
SELECT * FROM students
ORDER BY age DESC, name ASC;
```

---

# 13. Limiting Results

Use `LIMIT` to control how many rows are returned.

```sql
SELECT * FROM students
LIMIT 3;
```

Use `OFFSET` to skip rows.

```sql
SELECT * FROM students
LIMIT 3 OFFSET 2;
```

This skips the first 2 rows and returns the next 3 rows.

Useful for pagination:

```sql
SELECT * FROM students
ORDER BY id
LIMIT 10 OFFSET 0;
```

Page 2:

```sql
SELECT * FROM students
ORDER BY id
LIMIT 10 OFFSET 10;
```

---

# 14. Updating Data

Use `UPDATE` to modify existing data.

```sql
UPDATE students
SET age = 21
WHERE id = 1;
```

Update multiple columns:

```sql
UPDATE students
SET name = 'Rahul Sharma', age = 22
WHERE id = 1;
```

Important: Always use `WHERE` unless you really want to update every row.

Dangerous:

```sql
UPDATE students
SET age = 18;
```

This updates all students.

---

# 15. Deleting Data

Use `DELETE` to remove rows.

```sql
DELETE FROM students
WHERE id = 1;
```

Important: Always use `WHERE` unless you really want to delete every row.

Dangerous:

```sql
DELETE FROM students;
```

This deletes all rows from the table.

To delete the table itself:

```sql
DROP TABLE students;
```

---

# 16. Constraints

Constraints are rules applied to table columns.

They help keep your data clean and correct.

Common constraints:

| Constraint | Meaning |
|---|---|
| PRIMARY KEY | Unique identifier for each row |
| NOT NULL | Value is required |
| UNIQUE | Value must be unique |
| DEFAULT | Provides a default value |
| CHECK | Validates a condition |
| FOREIGN KEY | Connects one table to another |

Example:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER CHECK(age >= 18),
    status TEXT DEFAULT 'active'
);
```

## NOT NULL

```sql
name TEXT NOT NULL
```

The name cannot be empty/null.

## UNIQUE

```sql
email TEXT UNIQUE
```

No two users can have the same email.

## DEFAULT

```sql
status TEXT DEFAULT 'active'
```

If no status is provided, SQLite uses `active`.

## CHECK

```sql
age INTEGER CHECK(age >= 18)
```

The age must be 18 or more.

---

# 17. Primary Keys and Auto Increment

A primary key uniquely identifies each row.

Example:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
```

When you insert a row without `id`, SQLite automatically creates one.

```sql
INSERT INTO users (name) VALUES ('Tanish');
```

## AUTOINCREMENT

SQLite also supports:

```sql
id INTEGER PRIMARY KEY AUTOINCREMENT
```

But in many cases, you do not need `AUTOINCREMENT`.

This is usually enough:

```sql
id INTEGER PRIMARY KEY
```

Why?

Because SQLite already auto-generates a unique integer for `INTEGER PRIMARY KEY`.

Use `AUTOINCREMENT` only when you specifically need SQLite to never reuse old row IDs.

---

# 18. Foreign Keys and Relationships

A foreign key connects one table to another.

Example:

One student can enroll in many courses.

Tables:

- `students`
- `courses`
- `enrollments`

Create students table:

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
```

Create courses table:

```sql
CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);
```

Create enrollments table:

```sql
CREATE TABLE enrollments (
    id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    enrolled_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

Enable foreign key checking:

```sql
PRAGMA foreign_keys = ON;
```

Check if foreign keys are enabled:

```sql
PRAGMA foreign_keys;
```

It should return:

```text
1
```

## Why foreign keys matter

Without foreign keys, you could accidentally insert invalid data.

Example problem:

```sql
INSERT INTO enrollments (student_id, course_id)
VALUES (999, 1);
```

If there is no student with ID 999, this should not be allowed.

Foreign keys prevent this mistake.

---

# 19. Joins

Joins combine data from multiple tables.

Example data:

`students`

| id | name |
|---:|------|
| 1 | Rahul |
| 2 | Priya |

`courses`

| id | title |
|---:|-------|
| 1 | Python |
| 2 | SQL |

`enrollments`

| id | student_id | course_id |
|---:|-----------:|----------:|
| 1 | 1 | 1 |
| 2 | 1 | 2 |
| 3 | 2 | 2 |

## INNER JOIN

Returns only matching rows.

```sql
SELECT students.name, courses.title
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.id
INNER JOIN courses ON enrollments.course_id = courses.id;
```

Result:

| name | title |
|---|---|
| Rahul | Python |
| Rahul | SQL |
| Priya | SQL |

## LEFT JOIN

Returns all rows from the left table, even if there is no match in the right table.

```sql
SELECT students.name, enrollments.course_id
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id;
```

## CROSS JOIN

Combines every row from one table with every row from another table.

```sql
SELECT students.name, courses.title
FROM students
CROSS JOIN courses;
```

Be careful. Cross joins can create many rows.

---

# 20. Aggregation and Grouping

Aggregate functions calculate values from multiple rows.

Common aggregate functions:

| Function | Meaning |
|---|---|
| COUNT() | Counts rows |
| SUM() | Adds values |
| AVG() | Average value |
| MIN() | Smallest value |
| MAX() | Largest value |

Example table: `orders`

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_name TEXT,
    amount REAL,
    status TEXT
);
```

Insert sample data:

```sql
INSERT INTO orders (customer_name, amount, status)
VALUES
('Rahul', 500, 'paid'),
('Priya', 800, 'paid'),
('Rahul', 300, 'pending'),
('Aman', 1000, 'paid');
```

## COUNT

```sql
SELECT COUNT(*) FROM orders;
```

## SUM

```sql
SELECT SUM(amount) FROM orders;
```

## AVG

```sql
SELECT AVG(amount) FROM orders;
```

## GROUP BY

Group orders by customer:

```sql
SELECT customer_name, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_name;
```

## HAVING

`WHERE` filters rows before grouping.

`HAVING` filters groups after grouping.

```sql
SELECT customer_name, SUM(amount) AS total_amount
FROM orders
GROUP BY customer_name
HAVING total_amount > 500;
```

---

# 21. Subqueries

A subquery is a query inside another query.

Example:

Find orders greater than the average order amount:

```sql
SELECT * FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);
```

Another example:

```sql
SELECT name
FROM students
WHERE id IN (
    SELECT student_id
    FROM enrollments
    WHERE course_id = 1
);
```

---

# 22. Views

A view is a saved query.

It behaves like a virtual table.

Create a view:

```sql
CREATE VIEW student_courses AS
SELECT students.name, courses.title
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.id
INNER JOIN courses ON enrollments.course_id = courses.id;
```

Use the view:

```sql
SELECT * FROM student_courses;
```

Drop a view:

```sql
DROP VIEW student_courses;
```

Views are useful when:

- A query is used many times.
- You want to simplify complex joins.
- You want cleaner reporting queries.

---

# 23. Indexes

An index helps SQLite find data faster.

Think of an index like the index page of a book.

Without an index, SQLite may scan the whole table.

With an index, SQLite can find matching rows faster.

Create an index:

```sql
CREATE INDEX idx_users_email
ON users(email);
```

Search using indexed column:

```sql
SELECT * FROM users
WHERE email = 'test@example.com';
```

## Unique index

```sql
CREATE UNIQUE INDEX idx_users_email_unique
ON users(email);
```

## Drop index

```sql
DROP INDEX idx_users_email;
```

## When to use indexes

Use indexes on columns that are often used in:

- WHERE
- JOIN
- ORDER BY
- GROUP BY

Example:

```sql
CREATE INDEX idx_orders_customer_name
ON orders(customer_name);
```

## When not to use too many indexes

Indexes are not free.

They make reads faster but can make inserts, updates, and deletes slower.

Reason:

When data changes, SQLite also needs to update the index.

---

# 24. Transactions

A transaction is a group of SQL operations that are treated as one unit.

If all operations succeed, you save them.

If something fails, you undo them.

Example:

```sql
BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;
```

If there is an error:

```sql
ROLLBACK;
```

## Why transactions matter

Imagine transferring money:

1. Remove money from Account A.
2. Add money to Account B.

Both steps must happen successfully.

If step 1 happens but step 2 fails, your data becomes wrong.

Transactions prevent this.

---

# 25. SQLite Date and Time

SQLite does not have a special date/time storage class.

Common ways to store dates:

1. TEXT
2. INTEGER
3. REAL

Most beginner-friendly approach:

```sql
created_at TEXT DEFAULT CURRENT_TIMESTAMP
```

Example:

```sql
CREATE TABLE notes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

Insert:

```sql
INSERT INTO notes (title) VALUES ('Learn SQLite');
```

Read:

```sql
SELECT * FROM notes;
```

Useful date/time functions:

```sql
SELECT date('now');
SELECT time('now');
SELECT datetime('now');
SELECT datetime('now', '+1 day');
SELECT datetime('now', '-7 days');
```

---

# 26. ALTER TABLE

`ALTER TABLE` changes an existing table.

## Rename a table

```sql
ALTER TABLE students RENAME TO learners;
```

## Add a column

```sql
ALTER TABLE learners ADD COLUMN phone TEXT;
```

## Rename a column

```sql
ALTER TABLE learners RENAME COLUMN phone TO mobile;
```

SQLite has some limitations compared to PostgreSQL/MySQL for altering tables.

For bigger changes, you may need to:

1. Create a new table.
2. Copy data from old table to new table.
3. Drop the old table.
4. Rename the new table.

---

# 27. Importing and Exporting Data

## Export query result as CSV

Inside SQLite shell:

```sql
.headers on
.mode csv
.output students.csv
SELECT * FROM students;
.output stdout
```

## Import CSV into a table

```sql
.mode csv
.import students.csv students
```

Make sure the table already exists with matching columns.

## Backup database

```sql
.backup backup_school.db
```

## Dump full database as SQL

```sql
.output backup.sql
.dump
.output stdout
```

Restore from dump:

```bash
sqlite3 new_school.db < backup.sql
```

---

# 28. SQLite with Python

Python has built-in SQLite support using the `sqlite3` module.

No extra installation is required.

## Connect to database

```python
import sqlite3

conn = sqlite3.connect("school.db")
cursor = conn.cursor()
```

If `school.db` does not exist, Python creates it.

## Create table

```python
import sqlite3

conn = sqlite3.connect("school.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT UNIQUE
)
""")

conn.commit()
conn.close()
```

## Insert data

```python
import sqlite3

conn = sqlite3.connect("school.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO students (name, age, email)
VALUES (?, ?, ?)
""", ("Rahul", 20, "rahul@example.com"))

conn.commit()
conn.close()
```

## Why use question marks?

This is called parameterized query.

It protects your app from SQL injection.

Bad approach:

```python
name = "Rahul"
query = f"SELECT * FROM students WHERE name = '{name}'"
```

Good approach:

```python
cursor.execute("SELECT * FROM students WHERE name = ?", (name,))
```

## Read data

```python
import sqlite3

conn = sqlite3.connect("school.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM students")
rows = cursor.fetchall()

for row in rows:
    print(row)

conn.close()
```

## Read one row

```python
cursor.execute("SELECT * FROM students WHERE id = ?", (1,))
student = cursor.fetchone()
print(student)
```

## Update data

```python
cursor.execute("""
UPDATE students
SET age = ?
WHERE id = ?
""", (21, 1))

conn.commit()
```

## Delete data

```python
cursor.execute("DELETE FROM students WHERE id = ?", (1,))
conn.commit()
```

## Using context manager

Better style:

```python
import sqlite3

with sqlite3.connect("school.db") as conn:
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")
    rows = cursor.fetchall()

    for row in rows:
        print(row)
```

The connection automatically commits or rolls back depending on success or error.

---

# 29. Database Design Basics

Good database design is very important.

Before creating tables, ask:

1. What data do I need to store?
2. What are the main entities?
3. How are they related?
4. Which fields are required?
5. Which values must be unique?
6. Which data will be searched often?

Example: School database

Entities:

- Students
- Teachers
- Courses
- Enrollments

Relationships:

- A student can enroll in many courses.
- A course can have many students.
- A teacher can teach many courses.

Tables:

```text
students
teachers
courses
enrollments
```

---

# 30. Normalization

Normalization means organizing data properly to reduce duplication.

## Bad design

```text
students_courses
------------------------------------------------
id | student_name | course1 | course2 | course3
```

Problems:

- What if a student has 10 courses?
- What if course name changes?
- Duplicate data increases.
- Searching becomes harder.

## Better design

```text
students
----------------
id | name

courses
----------------
id | title

enrollments
----------------
id | student_id | course_id
```

This design is more flexible.

## Simple normalization rules

1. Store one type of data in one table.
2. Avoid repeating columns like `course1`, `course2`, `course3`.
3. Use relationships instead of duplication.
4. Use primary keys.
5. Use foreign keys.

---

# 31. Advanced SQLite Features

## PRAGMA commands

PRAGMA commands control SQLite settings or show database information.

Examples:

```sql
PRAGMA table_info(students);
PRAGMA database_list;
PRAGMA foreign_keys = ON;
PRAGMA foreign_keys;
```

## EXPLAIN QUERY PLAN

Used to understand how SQLite runs a query.

```sql
EXPLAIN QUERY PLAN
SELECT * FROM students WHERE email = 'rahul@example.com';
```

This helps you know whether SQLite is using an index.

## Triggers

A trigger automatically runs when something happens in a table.

Example:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    updated_at TEXT
);

CREATE TRIGGER set_users_updated_at
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    UPDATE users
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = OLD.id;
END;
```

Use triggers carefully. They can make debugging harder if overused.

## Common Table Expressions CTEs

CTEs make complex queries easier to read.

```sql
WITH paid_orders AS (
    SELECT * FROM orders WHERE status = 'paid'
)
SELECT customer_name, SUM(amount) AS total_paid
FROM paid_orders
GROUP BY customer_name;
```

## Recursive CTE

Recursive CTEs are useful for hierarchical data like categories or organization charts.

Example table:

```sql
CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    parent_id INTEGER,
    FOREIGN KEY(parent_id) REFERENCES categories(id)
);
```

Recursive query:

```sql
WITH RECURSIVE category_tree(id, name, parent_id, level) AS (
    SELECT id, name, parent_id, 0
    FROM categories
    WHERE parent_id IS NULL

    UNION ALL

    SELECT c.id, c.name, c.parent_id, ct.level + 1
    FROM categories c
    JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree;
```

## Full Text Search FTS

SQLite supports full-text search using virtual tables.

Example:

```sql
CREATE VIRTUAL TABLE articles
USING fts5(title, body);
```

Insert:

```sql
INSERT INTO articles (title, body)
VALUES ('SQLite Guide', 'SQLite is a lightweight database engine.');
```

Search:

```sql
SELECT * FROM articles
WHERE articles MATCH 'lightweight';
```

FTS is useful for:

- Search boxes
- Articles
- Notes apps
- Documentation search

## UPSERT

UPSERT means insert if new, update if already exists.

Example:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    name TEXT
);
```

```sql
INSERT INTO users (email, name)
VALUES ('test@example.com', 'Test User')
ON CONFLICT(email)
DO UPDATE SET name = excluded.name;
```

## Window Functions

Window functions perform calculations across rows related to the current row.

Example:

```sql
SELECT
    customer_name,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) AS rank
FROM orders;
```

Another example:

```sql
SELECT
    customer_name,
    amount,
    SUM(amount) OVER (PARTITION BY customer_name) AS customer_total
FROM orders;
```

---

# 32. Common Mistakes

## Mistake 1: Forgetting semicolon

Wrong:

```sql
SELECT * FROM students
```

Correct:

```sql
SELECT * FROM students;
```

## Mistake 2: Forgetting WHERE in UPDATE

Dangerous:

```sql
UPDATE users SET status = 'inactive';
```

This updates all rows.

Better:

```sql
UPDATE users SET status = 'inactive'
WHERE id = 5;
```

## Mistake 3: Forgetting WHERE in DELETE

Dangerous:

```sql
DELETE FROM users;
```

This deletes all rows.

Better:

```sql
DELETE FROM users
WHERE id = 5;
```

## Mistake 4: Not enabling foreign keys

SQLite requires foreign keys to be enabled for each connection.

```sql
PRAGMA foreign_keys = ON;
```

In Python:

```python
cursor.execute("PRAGMA foreign_keys = ON")
```

## Mistake 5: Building SQL with string formatting

Bad:

```python
query = f"SELECT * FROM users WHERE email = '{email}'"
```

Good:

```python
cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
```

---

# 33. Practice Project

Build a simple Task Manager database.

## Requirements

Each task should have:

- id
- title
- description
- status
- priority
- due date
- created date

## Create database

```bash
sqlite3 task_manager.db
```

## Create table

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'in_progress', 'completed')),
    priority TEXT DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high')),
    due_date TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## Insert tasks

```sql
INSERT INTO tasks (title, description, priority, due_date)
VALUES
('Learn SQLite', 'Complete SQLite basics', 'high', '2026-06-30'),
('Build project', 'Create task manager database', 'medium', '2026-07-05'),
('Practice joins', 'Create users and tasks relationship', 'low', '2026-07-10');
```

## Read all tasks

```sql
SELECT * FROM tasks;
```

## Find pending tasks

```sql
SELECT * FROM tasks
WHERE status = 'pending';
```

## Find high priority tasks

```sql
SELECT * FROM tasks
WHERE priority = 'high';
```

## Mark task as completed

```sql
UPDATE tasks
SET status = 'completed'
WHERE id = 1;
```

## Delete a task

```sql
DELETE FROM tasks
WHERE id = 3;
```

## Add users table

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
```

## Add user_id to tasks

```sql
ALTER TABLE tasks ADD COLUMN user_id INTEGER;
```

For real foreign key enforcement on an added column, it is better to design the relationship before creating the table or rebuild the table with the foreign key.

Better full design:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'in_progress', 'completed')),
    priority TEXT DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high')),
    due_date TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

## Query tasks with user names

```sql
SELECT users.name, tasks.title, tasks.status, tasks.priority
FROM tasks
INNER JOIN users ON tasks.user_id = users.id;
```

---

# 34. Useful SQLite Commands Cheat Sheet

## Open database

```bash
sqlite3 database_name.db
```

## Exit SQLite

```sql
.exit
```

## Show tables

```sql
.tables
```

## Show table structure

```sql
.schema table_name
```

## Show all schemas

```sql
.schema
```

## Format output as table

```sql
.mode table
.headers on
```

## Format output as CSV

```sql
.mode csv
```

## Show database list

```sql
.databases
```

## Backup database

```sql
.backup backup.db
```

## Show columns of a table

```sql
PRAGMA table_info(table_name);
```

## Enable foreign keys

```sql
PRAGMA foreign_keys = ON;
```

## Check query plan

```sql
EXPLAIN QUERY PLAN SELECT * FROM users WHERE email = 'a@example.com';
```

---

# 35. Learning Path

Follow this path if you are a complete beginner.

## Stage 1: Basics

Learn:

- What is a database?
- What is a table?
- Rows and columns
- SQLite installation
- Creating a database
- Creating tables
- Inserting data
- Selecting data

Practice:

```sql
CREATE TABLE students (...);
INSERT INTO students (...);
SELECT * FROM students;
```

## Stage 2: CRUD

CRUD means:

- Create
- Read
- Update
- Delete

Learn:

```sql
INSERT
SELECT
UPDATE
DELETE
```

## Stage 3: Filtering and Sorting

Learn:

```sql
WHERE
AND
OR
IN
BETWEEN
LIKE
ORDER BY
LIMIT
OFFSET
```

## Stage 4: Table Design

Learn:

```sql
PRIMARY KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
FOREIGN KEY
```

## Stage 5: Relationships

Learn:

- One-to-one
- One-to-many
- Many-to-many
- Foreign keys
- Join tables

## Stage 6: Joins and Aggregation

Learn:

```sql
INNER JOIN
LEFT JOIN
COUNT
SUM
AVG
MIN
MAX
GROUP BY
HAVING
```

## Stage 7: Performance

Learn:

```sql
CREATE INDEX
DROP INDEX
EXPLAIN QUERY PLAN
```

## Stage 8: Advanced SQLite

Learn:

```sql
TRANSACTIONS
VIEWS
TRIGGERS
CTEs
RECURSIVE CTEs
FTS5
UPSERT
WINDOW FUNCTIONS
```

## Stage 9: Use SQLite in Code

Start with Python:

```python
import sqlite3
```

Practice:

- Connect to database
- Create tables
- Insert data
- Read data
- Update data
- Delete data
- Use parameterized queries

---

# Final Advice

The best way to learn SQLite is not only by reading, but by creating small databases.

Start with simple projects:

1. Student management database
2. Task manager database
3. Expense tracker database
4. Notes app database
5. Library management database
6. Inventory management database

For every project, practice:

- Creating tables
- Adding constraints
- Inserting data
- Reading data
- Updating data
- Deleting data
- Creating relationships
- Writing joins
- Adding indexes
- Using transactions

Once you are comfortable with SQLite, learning MySQL or PostgreSQL becomes much easier because the SQL basics are similar.

