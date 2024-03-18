var crypto = require('crypto');

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
}



const users = [
  {email:"wwang24@outlook.com",name:"Wenge Wang",salt:"e3035b0b998dd9243aee7d9659543c87"}
];


exports.getByEmail = (email) => {
  return users.find((user) => user.email === email);
}
exports.get = (idx) =>{
  return users[idx];
}



exports.add = (user) => {
  let salt = createSalt();
  let new_user = {
    email: user.email,
    name: user.name,
    salt: salt,
    encryptedPassword: encryptPassword(user.password, salt)
  }
  users.push(new_user);
}


exports.login = (login) => {
  let user = exports.getByEmail(login.email);
  if (!user) {
    return null;
  }
  let encryptedPassword = encryptPassword(login.password, user.salt);
  if (user.encryptedPassword === encryptedPassword) {
    return user;
  }
  return null;
}

exports.all = users