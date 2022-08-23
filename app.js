// Team Members Name
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
// String to Number
function stringValue(elementId){
    const elementValue = document.getElementById(elementId)
    const elementValueString = elementValue.value
    const elementValueNumber = parseFloat(elementValueString)
    elementValue.value = '';
    return elementValueNumber;
}

// per-player cost
document.getElementById('calculate').addEventListener('click', function(){
    const player = stringValue('per-player')
    if(player >= 0){
        const players = player * membersName.length
        const expenses = document.getElementById('expenses')
        expenses.innerText = players
    }else{
        alert('please enter tha number type variable')
    }
})

// total-calculate
document.getElementById('total-calculate').addEventListener('click', function(){
    const expenses = document.getElementById('expenses')
    const expensesString = expenses.innerText
    const expensesNumber = parseFloat(expensesString)
    
    const manager = stringValue('manager')
    const coach = stringValue('coach')
    if(expensesNumber >= 0 && manager >= 0 && coach >= 0){
        const totalExpenses = expensesNumber + manager + coach

        const total = document.getElementById('total')
        total.innerText = totalExpenses
    }else{
        alert('please enter tha number type variable')
    }

})