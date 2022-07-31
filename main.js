// const s1 = 'hello'
// console.log(s1.toUpperCase())
// console.log(typeof s1)

// const s2 = new String('hello') //this is an object
// console.log(typeof s2)

// console.log(window)
// window.alert(1)
// alert(1)


//Object literals

// const book1 = {
//     title: 'book one',
//     author: 'brian', //this are properties of the object
//     year: '2022',
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`
//     }
// }
// console.log(book1)
// console.log(book1.title)
// console.log(book1.getSummary())
// console.log(Object.values(book1))
// console.log(Object.keys(book1))


// constructors

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     this.getSummary = function () {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`
//     }
// }

// //Instantiate an object
// //We can have as many books as we want
// const book1 = new Book('book  one', 'brian', '2022')
// const book2 = new Book('book two', 'Austin', '2010')
// const book3 = new Book('book three', 'Vicy', '2011')
// const book4 = new Book('book four', 'Daisy', '2003')
// const book5 = new Book('book five', 'Kevin', '1999')

// console.log(book1.getSummary()) //Now we can log

// //prototypes

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
// }

// //Our prototypes
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in the year ${this.year}`
// }

// Book.prototype.getAge = function () {
//     //Date is inbuilt
//     const years = new Date().getFullYear() - this.year
//     return `${this.title} is ${years} years old`
// }

// Book.prototype.revise = function (newYear) {
//     this.year = newYear
//     this.revised = true
// }

// const book1 = new Book('book  one', 'brian', '2022')
// const book2 = new Book('book two', 'Austin', '2010')
// const book3 = new Book('book three', 'Vicy', '2011')
// const book4 = new Book('book four', 'Daisy', '2003')
// const book5 = new Book('book five', 'Kevin', '1999')

// console.log(book1.getSummary())
// console.log(book1.getAge())

// console.log(book5)
// book5.revise('2022')
// console.log(book5)


//Inheritance

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
// }
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in the year ${this.year}`
// }
// //magazine constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year)

//     this.month = month
// }
// //Where the inheritance comes to get prototype methods of Book

// Magazine.prototype = Object.create(Book.prototype)


// const mag1 = new Magazine('mag one', 'Brian Rono', '2018', 'June')

// //To use magazine constructor

// Magazine.prototype.constructor = Magazine

// console.log(mag1.getSummary())



//Object Create

//object of protos
// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`
//     },
//     getAge: function () {
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} years old`
//     }
// }
//Create Object
// const book1 = Object.create(bookProtos)
// book1.title = 'Book one'
// book1.author = 'Brian Rono'
// book1.year = '2022'

// const book1 = Object.create(bookProtos, {
//     title: { value: 'Book one' },
//     author: { value: 'Brian Rono' },
//     year: { value: '2022' }
// })


// console.log(book1)



//ES6 classes


// class Book {
//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }
//     getSummary() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`
//     }
//     getAge() {
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} years old`
//     }
//     revise(newYear) {
//         this.year = newYear
//         this.revised = true
//     }
//     //static methods here
//     static topBookStore() {
//         return 'Brian King'
//     }
// }

// //instantiate object

// const book1 = new Book('Book one', 'Brian Rono', '2022')

// console.log(book1)

// console.log(Book.topBookStore())


//Sub Classes

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}
//Magazine subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month
    }
}
//Instantiate Magazine
const mag1 = new Magazine('Mag one', 'Brian', '2022', 'july')


console.log(mag1.getSummary())