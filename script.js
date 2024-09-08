
const formButton = document.getElementById('formSubmit')
formButton.addEventListener('click', (event) => {
    event.preventDefault();

//in this code we get value from our inputs and than we create elements of our table. 
// using append we assigned a value for our table and we get the next result

let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let favouriteColor = document.getElementById('favouriteColor').value

let newTableRow = document.createElement('tr');


let number = 0

let numberNode = document.createElement('td')
numberNode.innerHTML = number
newTableRow.append(numberNode)

let firstNameNode = document.createElement('td');
firstNameNode.innerHTML = firstName
newTableRow.append(firstNameNode)

let lastNameNode = document.createElement('td');
lastNameNode.innerHTML = lastName
newTableRow.append(lastNameNode)

favouriteColorNode = document.createElement('td');
favouriteColorNode.innerHTML = favouriteColor
newTableRow.append(favouriteColorNode)

console.log(newTableRow)

document.getElementById('tBody').appendChild(newTableRow)

number++

}) 