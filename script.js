// function stringToNumber(string) {
//     let hashCode = 0;
  
//     const primeNumber = 31;
//     for (let i = 0; i < string.length; i++) {
//       hashCode = primeNumber * hashCode + string.charCodeAt(i);
//     }
  
//     return hashCode;
//   }
  
  
//   function hash(name, surname) {
//     return stringToNumber(name) + stringToNumber(surname);
//   }
  

//   let person1 = hash("Fred", "");

//   console.log(person1);
// console.log(37599 % 17);

class Hashmap {
    constructor() {
        this.buckets = new Array(17);
    }
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      }
      set(key, value) {
        const index = this.hash(key) % this.buckets.length;
        this.buckets[index] = value;
        console.log(this.buckets);


      }

     
}




const hashmap = new Hashmap();
// console.log(hashmap.hash("Carlos"));
hashmap.set("Carlos", "Developer");
hashmap.set("Carla", "Frontend Developer");




// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }
  
