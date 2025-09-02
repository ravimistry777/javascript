// 1. Write a program for Circular Queue.

// class CircularQueue {
//     constructor(size) {
//         this.queue = new Array(size);
//         this.size = size;
//         this.front = -1;
//         this.rear = -1;
//     }

//     enqueue(value) {
//         if ((this.rear + 1) % this.size === this.front) {
//             console.log("Queue is Full");
//             return;
//         }
//         if (this.front === -1) this.front = 0;
//         this.rear = (this.rear + 1) % this.size;
//         this.queue[this.rear] = value;
//     }

//     dequeue() {
//         if (this.front === -1) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let item = this.queue[this.front];
//         if (this.front === this.rear) {
//             this.front = this.rear = -1;
//         } else {
//             this.front = (this.front + 1) % this.size;
//         }
//         return item;
//     }

//     display() {
//         if (this.front === -1) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let i = this.front;
//         let result = [];
//         while (true) {
//             result.push(this.queue[i]);
//             if (i === this.rear) break;
//             i = (i + 1) % this.size;
//         }
//         console.log(result.join(" "));
//     }
// }

// let cq = new CircularQueue(5);
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.display();
// cq.dequeue();
// cq.display();

//OUTPUT :-
//10 20 30
//20 30



// 2. write a program Queue using two stacks.


// class Queuetwostack {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(x) {
//         this.stack1.push(x);
//     }

//     dequeue() {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (this.stack2.length === 0) {
//             console.log("Queue is Empty");
//             return;
//         }
//         return this.stack2.pop();
//     }
// }

// let q = new Queuetwostack();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.dequeue());
// console.log(q.dequeue());

//OUTPUT :-
//1
//2



// 3. write a program check first string swap can make strings equal.


function areEqual(s1, s2) {
    if (s1.length !== s2.length) return false;

    let diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff.push(i);
        if (diff.length > 2) return false;
    }

    if (diff.length === 0) return true;
    if (diff.length === 2) {
        return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
    }
    return false;
}

console.log(areEqual("bank", "kanb"));
console.log(areEqual("attack", "kttaca"));
console.log(areEqual("red", "white"));

//OUTPUT :-
//true
//true
//false