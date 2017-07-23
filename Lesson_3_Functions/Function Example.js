    var phoenix = {
    name: 'Phoenix',
    sayName: function() {
        console.log(this);
    }
};

console.log(this.name);
phoenix.sayName();
