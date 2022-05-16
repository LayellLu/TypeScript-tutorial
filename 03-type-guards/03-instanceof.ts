interface Employee {
    name: string;
    createDate: Date;
}
console.log(new Date() instanceof Date);
console.log([] instanceof Array);
class ExcellentEmployee implements Employee {
    name: string;
    createDate: Date;
    constructor(employee?: Employee) {
        this.name = employee?.name ? employee?.name : 'Jack';
        this.createDate = employee?.createDate ? employee?.createDate : new Date();
    }
    praise() {
        console.log('Good Work!');
    }
};
class BadEmployee implements Employee {
    name: string;
    createDate: Date;
    constructor(employee?: Employee) {
        this.name = employee?.name ? employee?.name : 'Jack';
        this.createDate = employee?.createDate ? employee?.createDate : new Date();
    }
    praise() {
        console.log('Good Work!');
    }
};
console.log(new ExcellentEmployee() instanceof ExcellentEmployee);
console.log(typeof new ExcellentEmployee());
// One More thinking...
console.log({ name: 'Jack', createDate: new Date() } instanceof ExcellentEmployee);

// Frontend - ECMAScript grammar + Web API (document ...)
// Backend - ECMAScript grammar + NodeJS API(request, server...)