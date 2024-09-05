
class Hashmap {
    constructor() {
        this.buckets = new Array(17);
    }
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        //   console.log(key.charCodeAt(i));
        // console.log(hashCode);
        }
     
        return hashCode;
      }
      set(key, value) {
        const index = this.hash(key) % this.buckets.length;
        this.buckets[index] = value;
        console.log(this.buckets);

      }
      get(key) {
const index = this.hash(key) % this.buckets.length;
const value = this.buckets[index];
if (!value) return null;
return value




      }

     
}




const hashmap = new Hashmap();
// console.log(hashmap.hash("Carlos"));
hashmap.set("Carlos", "Developer");
// hashmap.set("Carla", "Frontend Developer");
console.log(hashmap.get('Carlos'));




// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }
  
