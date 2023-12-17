INSERT INTO department (name)
VALUES  ("Accounting"),
        ("IT"),
        ("POS"),
        ("Merchandising");

INSERT INTO role (title, salary, department_id)
VALUES  ("Best Guy", 60000.00, 1),
        ("Second", 55432.95, 2),
        ("Third", 62550.65, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Dave", "Beckett", 1, 5),
        ("Joe", "Star", 3, 5),
        ("Maria", "Trenton", 2, 2),
        ("Mark", "Doherty", 1, 2),
        ("Patrick", "Flanneghan", 3, NULL);