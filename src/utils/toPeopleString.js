/**
  @name $SP().toPeopleString
  @function
  @category utils
  @description Transform the result from a `$SP().getPeopleLookup()` to a string
  @param {Array|Object} either a simple object, or an array of this object
    @param {Number} id The UserID
    @param {String} name The preferred name
    @param {String} [username] The username
    @param {String} [email] The user email
  @return {String} the formatted string in the form "id;#name,#username,#email,#email,#name" (or just "id;#name" if no "username" is provided)
  @example
  var person = $SP().getPeopleLookup("42;#Doe,, John,#domain\\John_Doe,#John_Doe@Domain.com,#John_Doe@Domain.com,#Doe,, John"); // --> {id:"42", name:"Doe, John", username:'domain\\John_Doe', email:'John_Doe@Domain.com'}
  $SP().toPeopleString(person); // --> "42;#Doe,, John,#domain\\John_Doe,#John_Doe@Domain.com,#John_Doe@Domain.com,#Doe,, John"
*/
export default function toPeopleString(lookup) {
  if (!Array.isArray(lookup)) lookup = [ lookup ];
  return lookup.map(function(l) {
    return l.username ? l.id+";#"+l.name.replace(/,/,",,")+",#"+l.username+",#"+l.email+",#"+l.email+",#"+l.name.replace(/,/,",,") : l.id+";#"+l.name;
  }).join(';#');
}
