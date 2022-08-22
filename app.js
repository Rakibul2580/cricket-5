function teamMembersName(btn){
    const name = btn.parentNode.children[0].innerText
    membersName.push(name);
    teamMembersList()
    btn.disabled = 'true'
    console.log(membersName)
}

let membersName = [];
function teamMembersList(){
    if(membersName.length <= 5){
        const teamMembers = document.getElementById('members')
        const li = document.createElement('li')
        for(let i = 0; i < membersName.length; i++){
            li.innerText = `
            ${membersName[i]}
            `
        }
        teamMembers.appendChild(li)
    }else{
        alert('Full')
    }
}

function stringValue(elementId){
    const elementValue = document.getElementById(elementId)
    const elementValueString = elementValue.value
    const elementValueNumber = parseFloat(elementValueString)
    return elementValueNumber;
}
document.getElementById('calculate').addEventListener('click', function(){
    const player = stringValue('per-player')
    const players = player * membersName.length

    const expenses = document.getElementById('expenses')
    expenses.innerText = players
    player.value = ''
})

document.getElementById('total-calculate').addEventListener('click', function(){
    const expensess = stringValue('expenses')
    const expensesString = expensess.innerText
    const expensesNumber = parent(expensesString)
console.log(expensesNumber)
    // const manager = stringValue('manager')
    // const coach = stringValue('coach')

    // const totalExpenses = expensesNumber + manager + coach

    // const total = document.getElementById('total')
    // total.innerText = totalExpenses
    // expenses.value = ''
    // manager.value = ''
    // coach.value = ''

})