class LLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    remove(index) {
        if (index >= this.size || index < 0) {
            return null;
        }

        if (this.size == 0) {
            return null;
        }

        if (this.size == 1 && this.first == this.last) {
            let tmp = this.first.data;
            this.first = null;
            this.last = null;
            this.size--;
            return tmp;
        }

        if (index > 0 && index < this.size-1) {
            let count = 0;
            let prev = this.first;
            for (let i = this.first; i != null; i = i.next) {
                if (count == index) {
                    let tmp = i.data;
                    prev.next = i.next;
                    this.size--;
                    return tmp;
                }

                prev = i;
                count++;
            }
        }

        if (index == 0 && this.first != this.last) {
            let tmp = this.first.data;
            this.first = this.first.next;
            this.size--;
            return tmp;
        }

        if (index == this.size - 1 && this.size > 1) {
            let tmp = this.last.data;
            for (let i = this.first; i != null; i = i.next) {
                if (i.next == this.last) {
                    this.last = i;
                    this.last.next = null;
                    this.size--;
                    return tmp;
                }
            } 
        }

        return null;
    }

    add(data) {
        if (this.isEmpty()) {
            let newNode = new LLNode(data);
            this.first = newNode;
            this.last = newNode;
            this.size++;
        }

        else {
            let newNode = new LLNode(data);
            this.last.next = newNode;
            this.last = newNode;
            this.size++;
        }
    }

    add(data, index) {
        if (this.isEmpty()) {
            this.first = new LLNode(data);
            this.last = this.first;
            this.size++;
            return;
        }

        if (index == 0) {
            let newNode = new LLNode(data);
            newNode.next = this.first;
            this.first = newNode;
            this.size++;
            return;
        }

        if (index == this.size) {
            let newNode = new LLNode(data);
            this.last.next = newNode;
            this.last = newNode;
            this.size++;
            return;
        }

        if (index > 0 && index < this.size) {
            let newNode = new LLNode(data);
            let current = this.first;
            for(let i = 0; i < index-1; i++) {
                current = current.next;
            }

            newNode.next = current.next;
            current.next = newNode;
            this.size++;
            return;
        }

        if (index > this.size) {
            System.out.println("error -- out of bounds");
        }
    }

    get(index) {
        let current = this.first;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    toString() {
        let returnStr = "";
        for(let current = this.first; current != null; current = current.next) {
          returnStr += current.data + " ";
        }
        return returnStr;
    }

    print() {
        console.log(this.toString());
    }
}
  