interface Admin {
    name: string;
    privileges: string[];
}
interface Employee {
    name: string; createDate: Date;
}
function printEmployeeInformation(emp: Employee | Admin) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("createDate" in emp) {
        console.log("Create Date: " + emp.createDate);
    }
}

printEmployeeInformation({
    name: 'Tom',
    // privileges: ['1', '2']
    createDate: new  Date()
})