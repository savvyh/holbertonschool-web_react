interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 21,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

for (let i = 0; i < studentsList.length; i++) {
  const row = document.createElement('tr');

  const cell = document.createElement('td');
  const cellContent = studentsList[i].firstName + ' ' + studentsList[i].location;
  cell.textContent = cellContent;

  row.appendChild(cell);
  tbody.appendChild(row);
}
table.appendChild(tbody);
document.body.appendChild(table);
