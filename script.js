

let totalAnnualSalary = 0
function submitClick(event){
    event.preventDefault(event)
    const firstName = document.querySelector("#firstNameInput").value
    const lastName = document.querySelector("#lastNameInput").value
    const idNumber = document.querySelector("#idInput").value
    const jobTitle = document.querySelector("#titleInput").value
    const annualSalary = Number(document.querySelector("#annualSalaryInput").value)
    console.log(firstName, lastName, idNumber, jobTitle, annualSalary)
    let employeeTable = document.querySelector("#employeeList tbody")
    employeeTable.innerHTML += `
    <tr>
        <td> ${firstName} </td>
        <td> ${lastName} </td>
        <td> ${idNumber} </td>
        <td> ${jobTitle} </td>
        <td> $${annualSalary} </td>
        <td> 
        <button onClick="deleteEmployee(event)" id="deleteButton">Delete</button> 
        </td>
    </tr>
    `
    totalAnnualSalary += annualSalary
console.log('My salary selector', totalAnnualSalary)
    let budgetPerMonth = totalAnnualSalary / 12
    let monthlyBudget = document.querySelector("#totalMonthly")
    monthlyBudget.innerText = budgetPerMonth

// Conditionally style the footer when monthly budget exceeds 20000
if (budgetPerMonth > 20000){
    const footer = document.querySelector("footer")
    footer.classList.add("over-budget")
}
console.log('Monthly budget is: ', budgetPerMonth)

document.getElementById("employeeForm").reset()

}

function deleteEmployee(event) {
    event.target.parentNode.parentNode.remove()
}
