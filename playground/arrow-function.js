var square = (x) => x * x;

console.log(square(34943));

var user = {
    name: 'Byron',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);

    }

};

user.sayHiAlt(1,2,3);