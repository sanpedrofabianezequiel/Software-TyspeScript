class Student{
    fullName:string;
    //Constructor 
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName = firstName + " " + middleInitial+ " " +lastName;
    }

}



interface Person{
    firstName:string;
    lastName:string;
}


function greeter(person: Person){
    return "Hello, "+ person.firstName + " mi  Apellido: " + person.lastName;
}

//Le enviamos un Array/ Jason LITERAL con sus propiedades y values
//Podemos enviar un Json con la misma Estructura y TSC interpetra que
//La clase es correcta
//let user = {firstName: "Ezequiel", lastName:"San Pedro"}
let user = new Student("Ezequiel","Fabian","San Pedro")
document.body.textContent = greeter(user);

//Chequke ANY
//Recibo un String, pero no se que retorna hasta qe
//Se lo asignamos
declare function getValue(key:string):any;

const str: string = getValue("Valor Retorno");