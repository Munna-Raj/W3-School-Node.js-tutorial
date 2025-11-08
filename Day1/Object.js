// ovject
const user ={
    name: 'Munna Raj',
    age: 25,
    greet() {
        console.log('Hi, I am ${this.name}');

    }  
};
 
// Array
 const colors = ['red', 'Green', 'blue'];
 colors.forEach(color => console.log(color));
 const length = colors.map(color => color.length);