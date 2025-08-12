// 1. WAP for Circular Linklist Operation (Insert, delete, display)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(data) {
//         let newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             newNode.next = this.head;
//         } else {
//             let temp = this.head;
//             while (temp.next !== this.head) {
//                 temp = temp.next;
//             }
//             temp.next = newNode;
//             newNode.next = this.head;
//         }
//     }

//     delete(value) {
//         if (!this.head) return;
//         let current = this.head;
//         let prev = null;

//         if (current.data === value) {
//             if (current.next === this.head) {
//                 this.head = null;
//                 return;
//             }
//             while (current.next !== this.head) {
//                 current = current.next;
//             }
//             current.next = this.head.next;
//             this.head = this.head.next;
//             return;
//         }

//         current = this.head;
//         do {
//             prev = current;
//             current = current.next;
//             if (current.data === value) {
//                 prev.next = current.next;
//                 return;
//             }
//         } while (current !== this.head);
//     }

//     display() {
//         if (!this.head) {
//             console.log("List is empty");
//             return;
//         }
//         let result = [];
//         let temp = this.head;
//         do {
//             result.push(temp.data);
//             temp = temp.next;
//         } while (temp !== this.head);
//         console.log(result.join(" -> "));
//     }
// }

// console.log("Circular Linked List");
// let calling = new CircularLinkedList();
// calling.insert(10);
// calling.insert(20);
// calling.insert(30);
// calling.display();
// calling.delete(20);
// calling.display();

// OUTPUT :-
// Circular Linked List
// 10 -> 20 -> 30
// 10 -> 30


// 2. WAP for Reverse Singly Linklist

// class SinglyNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insert(data) {
//         let newNode = new SinglyNode(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let temp = this.head;
//             while (temp.next) {
//                 temp = temp.next;
//             }
//             temp.next = newNode;
//         }
//     }

//     reverse() {
//         let prev = null;
//         let current = this.head;
//         let nextNode = null;

//         while (current) {
//             nextNode = current.next;
//             current.next = prev;
//             prev = current;
//             current = nextNode;
//         }
//         this.head = prev;
//     }

//     display() {
//         let result = [];
//         let temp = this.head;
//         while (temp) {
//             result.push(temp.data);
//             temp = temp.next;
//         }
//         console.log(result.join(" -> "));
//     }
// }

// console.log("\nReverse Singly Linked List");
// let rev = new SinglyLinkedList();
// rev.insert(1);
// rev.insert(2);
// rev.insert(3);
// rev.display();
// rev.reverse();
// rev.display();


// OUTPUT :-

// Reverse Singly Linked List
// 1 -> 2 -> 3
// 3 -> 2 -> 1


// 3. WAP for check linklist is palindrome or not

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.head) this.head = newNode;
        else {
            let temp = this.head;
            while (temp.next) temp = temp.next;
            temp.next = newNode;
        }
    }

    isPalindrome() {
        let arr = [];
        for (let temp = this.head; temp; temp = temp.next) arr.push(temp.data);
        return arr.join("") === [...arr].reverse().join("");
    }
}

let list = new LinkedList();
["r", "a", "v", "i"].forEach(c => list.insert(c));
console.log(list.isPalindrome());
// in this program i need to use array and array's method...

// OUTPUT:-

// false