function classs() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        displayName() {
            console.log(`Name: ${this.firstName} ${this.lastName}\nage - ${this.age}\nemail - ${this.email} `);
        }
    }
    const person = new Person("Hristiqn", "Dosev", "31", "hristiqnpirona@gmail.com");
    person.displayName();
}
classs()