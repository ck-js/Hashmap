class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.next = null;
    }

}
class Hashmap {
    constructor() {
        this.buckets = new Array(8);
        this.size = 0;
        this.loadFactor = 0.7
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
    resize() {
const oldBuckets = this.buckets;
this.buckets = new Array(oldBuckets.length * 2)
this.size = 0;
for (let i = 0; i < oldBuckets.length; i++) {
    let currentBucket = oldBuckets[i]
    while (currentBucket) {
        this.set(currentBucket.key, currentBucket.value);
        currentBucket = currentBucket.next;


    }
}




    }

      set(key, value) {
        const index = this.hash(key) % this.buckets.length;

        if (!this.buckets[index]) {
            this.buckets[index] = new ListNode(key, value);
            this.size++;
        } else {
            let currentBucket = this.buckets[index];
    
            while (currentBucket) {
                if (currentBucket.key === key) {
                    currentBucket.value = value; // Update value if key already exists
                    
            return;
                }
                if (!currentBucket.next) {
                    currentBucket.next = new ListNode(key, value); // Add new node at the end
                    this.size++;

                    return;
                }
                currentBucket = currentBucket.next;
            }
        }
    if (this.size / this.buckets.length > this.loadFactor) {
        this.resize();
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
clear() {
    this.buckets = new Array(17);
    
}
keys() {
    const keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
        let currentBucket = this.buckets[i];
        while (currentBucket) {
            keys.push(currentBucket.key)
            currentBucket = currentBucket.next

        }
    }
    return keys
}
values() {
const values = [];
for (let i = 0; i < this.buckets.length; i++) {
let currentBucket = this.buckets[i];
while (currentBucket){
    values.push(currentBucket.value)
    currentBucket = currentBucket.next;
}
}    
return values;
}
entries() {
    const entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
        let currentBucket = this.buckets[i];
        while (currentBucket) {
            entries.push([currentBucket.key, currentBucket.value])
            currentBucket = currentBucket.next;
        }
    }
return entries;

}

     
}




const hashmap = new Hashmap();
// console.log(hashmap.hash("Carlos"));
hashmap.set("Carlos", "Developer");
// hashmap.set("Carlos", "Designer");
hashmap.set("Carla", "Frontend Developer");
hashmap.set("arla", "Frontend Developer");
hashmap.set("rla", "Frontend Developer");
hashmap.set("Car", "Frontend Developer");
hashmap.set("Ca", "Frontend Developer");
// hashmap.set("Casssr", "Frontend Developer");
// hashmap.set("Carla", "Backend Developer");
// console.log(hashmap.get('Carla'));
// console.log(hashmap.has('arlos'));
// console.log(hashmap.remove("Carla"))
// console.log(hashmap.length());
// console.log(hashmap.clear());
// console.log(hashmap.keys());
// console.log(hashmap.values());
// console.log(hashmap.entries());
console.log(hashmap.buckets.length);
console.log(hashmap);

// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }
