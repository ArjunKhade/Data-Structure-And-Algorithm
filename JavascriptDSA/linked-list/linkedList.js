
function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    //if index is not in valid range return -1
    if(index < 0 || index >= this.size  ) return -1;
    //move curr to next until we index come 
    let curr = this.head;
    for(let i=0; i<index; i++){
       curr = curr.next;
    }
    //return the value
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    //create newNode
    let newNode = new Node(val);
   //first store the ref of head in newNode
    newNode.next = this.head;
     //point head to new node
    this.head = newNode;
    //increase the size
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    //create new node 
    let newNode = new Node(val);
    //if head is null /empty 
    if(this.head === null|| this.size === 0){
        this.head = newNode;
        this.size++;
        return;
    }

    let curr  = this.head;
    while(curr.next !== null){
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    //handle conrner cases
    if(index <0 || index > this.size) return;
    if(index === 0) return this.addAtHead(val) ;
    if(index === this.size) return this.addAtTail(val);
    //move curr to just previous of the index where new node should be added
    let curr = this.head;
    for(let i=0; i<index-1; i++){
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
     // deleting head node
    // deleting head node
    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return;
    }
    let curr = this.head;
    for(let i=0; i<index-1; i++){
       curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
};


   // MyLinkedList object will be instantiated and called as such:
  var obj = new MyLinkedList()
//   var param_1 = obj.get(index)
//   obj.deleteAtIndex(index)
  obj.addAtHead(10)
  obj.addAtTail(20)
  obj.addAtTail(30)
  obj.get(2);
//   obj.addAtIndex(index,val)
