

      // Some data we can work with

      const inventors = [

      {​​ first: "Albert", last: "Einstein", year: 1879, passed: 1955 }​​​​​,

        {​​​​​ first: "Isaac", last: "Newton", year: 1643, passed: 1727 }​​​​​,

        {​​​​​ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 }​​​​​,

        {​​​​​ first: "Marie", last: "Curie", year: 1867, passed: 1934 }​​​​​,

        {​​​​​ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 }​​​​​,

        {​​​​​ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 }​​​​​,

        {​​​​​ first: "Max", last: "Planck", year: 1858, passed: 1947 }​​​​​,

        {​​​​​ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 }​​​​​,

        {​​​​​ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 }​​​​​,

        {​​​​​ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 }​​​​​,

        {​​​​​ first: "Lise", last: "Meitner", year: 1878, passed: 1968 }​​​​​,

        {​​​​​ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }​​​​​,

      ];
 
      // Array.filter()

      // 1. Filter the list of inventors for those who were born in the 1500's

      function longName() {
        if (inventors.length <= 1500 && inventors.length > 1600) {
          return true;
        } else {
          return false;
        }
      }
      const result = names.filter(longName);
      console.log(result);
      // Array.map()

      // 2. Give us an array of the inventors first and last names
 
      // Array.sort()

      // 3. Sort the inventors by birthdate, oldest to youngest
 
      // 4. Sort the inventors by years lived

   
