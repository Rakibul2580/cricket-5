// Team Members
let membersName = [];
function teamMembersName(element){
    if(membersName.length <= 4){
        const name = element.parentNode.children[0].innerText
        membersName.push(name);
        
        const teamMembers = document.getElementById('members')
        const li = document.createElement('li')
        
        for(let i = 0; i < membersName.length; i++){
            li.innerText = `${membersName[i]}`
        }
        
        teamMembers.appendChild(li)
        element.disabled = 'true'
    }else{
        alert('Already 5 Players Selected')
    }
}

// per-player
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

// total-calculate
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