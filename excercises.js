module.exports = {
store, retrieve, capitalizeFirstLetter
};

// uppgift 2
let stored;
function store(value) {
    stored = value;
    return stored
}
function retrieve() {
    return stored;
}


  // uppgift 3 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter('foo')); // Foo



