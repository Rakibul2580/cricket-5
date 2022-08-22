function teamMembersName(btn){
    const name = btn.parentNode.children[0].innerText
    membersName.push(name);
    teamMembersList()
    btn.disabled = 'true'
}

let membersName = [];
function teamMembersList(){
    if(membersName.length <= 5){
        const teamMembers = document.getElementById('members')
        const li = document.createElement('li')
        for(let i = 0; i < membersName.length; i++){
            li.innerText = `${membersName[i]}`
        }
        teamMembers.appendChild(li)
    }else{
        alert('Already 5 Players Selected')
    }
}

function stringValue(elementId){
    const elementValue = document.getElementById(elementId)
    const elementValueString = elementValue.value
    const elementValueNumber = parseFloat(elementValueString)
    elementValueNumber.value = '';
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
    const expenses = document.getElementById('expenses')
    const expensesString = expenses.innerText
    const expensesNumber = parseInt(expensesString)
    
    const manager = stringValue('manager')
    const coach = stringValue('coach')
    
    const totalExpenses = expensesNumber + manager + coach

    const total = document.getElementById('total')
    total.innerText = totalExpenses

})