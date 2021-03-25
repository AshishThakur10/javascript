function Person(name, learner, address) {
  this.Name = name;
  this.Learners = learner;
  this.Address = address;
}
var person1 = new Person("John", "pavo", "hyd");
var person2 = new Person("Sally", "Rally", "goa");

console.log(person1, person2);
