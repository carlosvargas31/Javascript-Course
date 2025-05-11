// Ejercicio 1

const getProperties = (object) => Object.keys(object);

let person = {
  name: "Carlos",
  age: 25,
  profession: "Back-End Developer",
};

const properties = getProperties(person);
console.log(properties);

// Ejercicio 2

console.log(this); // En un navegador, mostrará el objeto Window

function ejemploGlobal() {
  console.log(this);
}
ejemploGlobal();

const object = { // Mostrará el objeto
  name: "Carlos",
  getObject: function() {
    console.log(this);
  }
};
object.getObject();

function hello(hi) {
  console.log(`${hi}, ${this.name}`);
}

const person1 = { name: "Daniela" };
const person2 = { name: "Carlos" };

hello.call(person1, "Hi");
hello.apply(person2, ["Nice to meet you"]);

function showAge() {
  console.log(`I'm ${this.edad} years.`);
}

const user = { edad: 25 };
const showAgeUser = showAge.bind(user);
showAgeUser();

// Ejercicio 3

class InvertString {
  constructor() {
    this.invertString = "";
  }

  invertAndShow() {
    if (this.invertString === "") {
      throw new Error("The string to be inverted cannot be empty.");
    }
    let stringInverted = this.invertString.split("").reverse().join("");
    console.log(stringInverted);
  }
}

let invertString = new InvertString();

try {
  InvertString.invertAndShow();
} catch (error) {
  console.error("¡Error!", error.message);
}

invertString.invertString = "Hola mundo";
invertString.invertAndShow();
invertString?.newMethod?.();

// Ejercicio 4

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("User or password incorrect");
    }
  }
}

// Ejercicio 5

const successButton = document.getElementById('loginSuccess');

successButton.addEventListener('click', () => {
  let loginSuccessObject = new Login("admin", "passwd");
  loginSuccessObject.login();
});

const failureButton = document.getElementById('loginFailure');

failureButton.addEventListener('click', () => {
  let loginFailureObject = new Login("pepe", "bad");
  loginFailureObject.login();
});

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

const successButtonAsync = document.getElementById('loginSuccessAsync')

successButtonAsync.addEventListener('click', async () => {
  try {
    let result = await loginWitUsername("admin", "passwd");
    alert(result);
  } catch (error) {
    alert(error);
  }
});

const failureButtonAsync = document.getElementById('loginFailureAsync');

failureButtonAsync.addEventListener('click', async () => {
  try {
    let result = await loginWitUsername("pepe", "bad");
    alert(result);
  } catch (error) {
    alert(error);
  }
});
