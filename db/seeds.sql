INSERT INTO department (id, name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO role (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

-- Employee seeds // CHANGE NAMES
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Json", "Borne", 1, 4),
       ("Tom", "Cruise", 2, 1),
       ("Dolly", "Parton", 3, 3),
       ("Thomas", "Burgledorf", 4, 1),
       ("Rodrigo", "Ivanovinski", 5, 4), 
       ("Bjorn", "Bjornson", 6, 1),
       ("Bjork", "JustBjork", 7, 5),
       ("Mark", "Cuban", 8, 1),
       ("Anthony", "uwu", 9, 6);
