class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.next = null;
    }

}
class Hashmap {
    constructor() {
        this.buckets = new Array(17);
    }
    hash(key) {
        let hashCode = 3;
           
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

        if (!this.buckets[index]) {
            this.buckets[index] = new ListNode(key, value);
        } else {
            let currentBucket = this.buckets[index];
    
            while (currentBucket) {
                if (currentBucket.key === key) {
                    currentBucket.value = value; // Update value if key already exists
                    
                                        return;
                }
                if (!currentBucket.next) {
                    currentBucket.next = new ListNode(key, value); // Add new node at the end

                    return;
                }
                currentBucket = currentBucket.next;
            }
        }
    }
      get(key) {
const index = this.hash(key) % this.buckets.length;
// store the target bucket  with the index
let currentBucket = this.buckets[index];
while (currentBucket) {
// check if the key is the first node in the bucket
if (currentBucket.key === key) {
    return currentBucket.value;
}
currentBucket = currentBucket.next;

}
return null


      }
      has(key) {
        const index = this.hash(key) % this.buckets.length;
       return this.buckets[index] !== undefined; 

      }
      remove(key) {
        const index = this.hash(key) % this.buckets.length;
        let bucket = this.buckets[index];
    
        while (bucket) {
            if (bucket.key === key) {
                this.buckets[index] = bucket.next;
                return true;
            }
            if (bucket.next) {
                if (bucket.next.key === key) {
                    bucket.next = bucket.next.next;
                    return true;
                }
            }
            bucket = bucket.next;
        }
        return false;
    }
    length() {
        let count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            let currentBucket = this.buckets[i];
            while (currentBucket) {
                count++;
                currentBucket = currentBucket.next;
            }
        }
        return count;
    }


     
}




const hashmap = new Hashmap();
// console.log(hashmap.hash("Carlos"));
hashmap.set("Carlos", "Developer");
// hashmap.set("Carlos", "Designer");
hashmap.set("Carla", "Frontend Developer");
// hashmap.set("Carla", "Backend Developer");
// console.log(hashmap.get('Carla'));
// console.log(hashmap.has('arlos'));
// console.log(hashmap.remove("Carla"))
console.log(hashmap.length());
console.log(hashmap);

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }
