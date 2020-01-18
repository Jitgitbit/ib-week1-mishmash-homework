/*
const testGroup = [
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 },
  { name: "donn", age: 20 },
  { name: "trey", age: 21 },
  { name: "hann", age: 29 },
  { name: "chew", age: 30 },
  { name: "cloe", age: 31 },
  { name: "dart", age: 39 },
  { name: "this", age: 40 },
  { name: "dame", age: 41 },
  { name: "henk", age: 49 },
  { name: "anna", age: 50 },
  { name: "olga", age: 51 },
  { name: "bert", age: 52 },
  { name: "oldd", age: 120 },
];
const emptyGroup = [];
*/

function groupAdultsByAgeRange(people){
  
  const filterOutKids = people.filter(person => person.age >= 18); // how does this not filter out under 18 !? // never mind, testing sequence

  const teens = filterOutKids.filter(person => person.age <= 20);
  const twenties = filterOutKids.filter(person => person.age <= 30 && person.age > 20);
  const thirties = filterOutKids.filter(person => person.age <= 40 && person.age > 30);
  const fourties = filterOutKids.filter(person => person.age <= 50 && person.age > 40);
  const overFifty = filterOutKids.filter(person => person.age > 50);

  let groups = {};
  
  if (people.length === 0) {
    return groups = {};
  };
  if (teens.length > 0) {
    groups[`20 and younger`] = teens;
  };
  if (twenties.length > 0) {
    groups[`21-30`] = twenties;
  };
  if (thirties.length > 0) {
    groups[`31-40`] = thirties;
  };
  if (fourties.length > 0) {
    groups[`41-50`] = fourties;
  };
  if (overFifty.length > 0) {
    groups[`51 and older`] = overFifty;
  };

  return groups;
};

//console.log(groupAdultsByAgeRange(testGroup));


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
