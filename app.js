function teamMembersName(btn){
    const name = btn.parentNode.children[0].innerText
    membersName.push(name);
    teamMembersList()
    console.log(membersName)
}

let membersName = [];
function teamMembersList(){
    if(membersName.length <= 5){
        const teamMembers = document.getElementById('members')
        const li = document.createElement('li')
        // li.innerText = ''
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