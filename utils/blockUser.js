const blockUser = (user)=>{
    if(user?.isBlocked){
        throw new Error(`Acces Denied, ${user?.firstName} is blocked`)
    }
}

module.exports = blockUser