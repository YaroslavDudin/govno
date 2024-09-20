document.addEventListener("DOMContentLoaded", function () {

  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit');
  let userData = [];
function idGenerate() {
    return Math.random().toString(16).slice(2);
  }


  let postIdArr = [];


  class User {
    #id = idGenerate()
    constructor(name, age, email, password) {
      this.name = name
      this.age = age
      this.email = email
      this.password = password
    }
    
    post(text) {
        if(text.length < 1) {
          throw new Error("Text length must be greater than 1")
        };
        
        const newPost = new Post(text)
        console.log(`User ${this.name}, with ID ${this.#id} posted: ${newPost.text} (Post ID: ${newPost.getId()})`)
        console.log(`user${this.name}, with this password ${this.password} with this email ${this.email}`);
        
        postIdArr.push(newPost.getId())
        return text
      }
  }

  class Post {
    #idPost = idGenerate()
    constructor(text, author) {
      this.text = text
      this.author = author
    }
    getId() {
      return this.#idPost
    }
  }

function checkEmailDoplicate(email) {
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email) {
          return false
        }
      }
      return true
    }
function checkUserDoplicate(username) {
      for (let i = 0; i < userData.length; i++) {
    if (userData[i].name === username) {
      return false
    }
  }
  return true
}
function checkPasswordLength(password) {
  if(password.length < 8) {
    return false
  }
  return true
}
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = new User(username, age, email, password);
    // user.post("Hello, World!");
    
    if(checkUserDoplicate(username) && checkEmailDoplicate(email) && checkPasswordLength(password)) {
      userData.push(user);
      console.log(userData);
    } else {
      console.log("");
    }
  })
  
})