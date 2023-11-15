const {models}=require('../models')
const bcrypt=require('bcryptjs')

module.exports = {
  getUser: async() => {
const users=await models.user.findAll()
return users
  },
  createUser: async (data) => {
    data.password=bcrypt.hashSync(data.password,10)
    const users=await models.user.create(data)
    return users;
  },
  updateUser: async (userId,updateUserData) => {
    const user= await models.user.findByPk(userId)
    if(user){
    user.update(updateUserData)
  }

  return user
},
  patchUser: (userId,updateUserData) => {
    const userIndex=users.findIndex((user)=>
      user.id===userId
    )
    if(userIndex!==-1){
      users[userIndex]={
        ...users[userIndex],...updateUserData 
      }
      return users

    }
    return null;
  },
  
  
  deleteUser: async(userId)=>{
    const user=await models.user.findByPk(userId)
  
    if(user){
      user.destroy()
      return "ss"
    }
    return null
  }
};
