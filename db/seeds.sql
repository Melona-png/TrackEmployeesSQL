USE employee_tracker;

INSERT INTO roles (title, salary, department_name)
VALUES
  ("Salesperson", 50000, "Sales"),
  ("Engineer", 60000, "Engineering"),
  ("Finance Manager", 80000, "Finance"),
  ("Legal Advisor", 75000, "Legal");

INSERT INTO employees (first_name, last_name, role_id, manager_id, department)
VALUES
  ("Faker", "Goat", 1, NULL, "Sales"),
  ("Morse", "Code", 2, NULL, "Engineering"),
  ("Json", "Borne", 3, NULL, "Finance"),
  ("MorganAnd", "Morgan", 4, NULL, "Legal");
