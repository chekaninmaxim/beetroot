import './scss/style.scss';

const person1 = {
	firstName: "Oleg",
	greet: function() {
		console.log(this.firstName)
	}
}

function createPerson(first, last) {
	return {
		firstName: first,
		lastName: last,
		getFullName: function() {
			console.log("good bye " + this.firstName + " " + this.lastName);
		}
	}
}

person = createPerson("maxim", "chekanin");
person.getFullName();

