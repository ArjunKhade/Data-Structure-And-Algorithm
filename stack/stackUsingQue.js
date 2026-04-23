
var MyStack = function() {
    this.q= [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q.length;
    for(let i=0; i<n-1; i++){
        this.q.push(this.q.shift())
    }
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q.length;
    for(let i=0; i<n-1; i++){
        this.q.push(this.q.shift())
    }
    let first = this.q[0];
    this.q.push(this.q.shift())
    return first;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such: */
  var obj = new MyStack()
  obj.push(2)
  var param_2 = obj.pop()
  console.log(param_2)
  var param_3 = obj.top()
  console.log(param_3)
  var param_4 = obj.empty()
  console.log(param_4)
  console.log(obj)


