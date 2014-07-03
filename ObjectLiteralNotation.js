/**
 * Object literal notation Example That Creates a Person.
 * @param {string} firstName    - The first name of the person.
 * @param {string} lastName     - The last name of the person.
 * @param {method} getfullName  - Returns full name of a person.
 * @example
 * // Object literal notation Example That Creates a Person
 * var ObjectLiteralNotationExample = function (firstName, lastName) {
 *   var person = {};
 *   Object.defineProperties(person, {
 *       "firstName":{
 *           value:firstName
 *       },
 *       "lastName": {
 *           value:firstName
 *       },
 *       getfullName: {
 *           get:function() {
 *               return firstName +" "+lastName;
 *           }
 *       }
 *   });
 *   return person;
 * };
 *
 *
 *
 *
 */
var ObjectLiteralNotationExample = function (firstName, lastName) {
    var person = {};
    Object.defineProperties(person, {
        "firstName":{
            value:firstName
        },
        "lastName": {
            value:firstName
        },
        getfullName: {
            get:function() {
                return firstName +" "+lastName;
            }
        }
    });
    return person;
};


var person = ObjectLiteralNotationExample("Steve","Wozniak");