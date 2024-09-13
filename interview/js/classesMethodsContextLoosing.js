class User {
  constructor({ name }) {
    this.name = name;
    this.getArrowedName = () => this.name;

    this.getName = this.getName.bind(this);
  }

  getName() {
    return this.name;
  }
}

const user = new User({ name: 'Alexey' });

const getName = user.getName;
const getArrowedName = user.getArrowedName;

console.log(user.getName()); // Alexey

//TypeError: Cannot read properties of undefined (reading 'name')
console.log(getName()); // Context loosing, need to bind this

console.log(user.getArrowedName()); // Alexey
console.log(getArrowedName()); // Alexey
