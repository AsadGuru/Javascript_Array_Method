let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter(person => person.profession === "developer").map(developer => developer.name);
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    arr
      .filter(person => person.profession === "developer")
      .forEach(developer => console.log(developer.name));
  }
  
  function addData() {
    const newPerson = { id: 4, name: "lisa", age: "22", profession: "designer" };
    arr.push(newPerson);
    console.log(arr);
  }
  
  function removeAdmin() {
    const updatedArray = arr.filter(person => person.profession !== "admin");
    console.log(updatedArray);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "emma", age: "25", profession: "manager" },
      { id: 5, name: "mike", age: "30", profession: "developer" },
      { id: 6, name: "martin", age: "24", profession: "developer" }
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }
  