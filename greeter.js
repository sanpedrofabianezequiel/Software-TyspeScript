var Student = /** @class */ (function () {
    //Constructor 
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " mi  Apellido: " + person.lastName;
}
//Le enviamos un Array/ Jason LITERAL con sus propiedades y values
//Podemos enviar un Json con la misma Estructura y TSC interpetra que
//La clase es correcta
//let user = {firstName: "Ezequiel", lastName:"San Pedro"}
var user = new Student("Ezequiel", "Fabian", "San Pedro");
document.body.textContent = greeter(user);
var str = getValue("Valor Retorno");
