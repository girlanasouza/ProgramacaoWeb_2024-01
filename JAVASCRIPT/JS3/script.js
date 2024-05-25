class IntegerSet {
  constructor(maxValue) {
    this.maxValue = maxValue;
    this.set = new Array(maxValue + 1).fill(false);
  }

  insert(element) {
    if (element >= 0 && element <= this.maxValue) {
      this.set[element] = true;
    }
  }

  remove(element) {
    if (element >= 0 && element <= this.maxValue) {
      this.set[element] = false;
    }
  }

  contains(element) {
    return element >= 0 && element <= this.maxValue && this.set[element];
  }
  union(otherSet) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.contains(i) || otherSet.contains(i)) {
        newSet.insert(i);
      }
    }
    return newSet;
  }

  intersection(otherSet) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.contains(i) && otherSet.contains(i)) {
        newSet.insert(i);
      }
    }
    return newSet;
  }

  difference(otherSet) {
    const newSet = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.contains(i) && !otherSet.contains(i)) {
        newSet.insert(i);
      }
    }
    return newSet;
  }

  toString() {
    let str = "{";
    let firstElement = true;
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.contains(i)) {
        if (!firstElement) {
          str += ", ";
        }
        str += `${i}`;
        firstElement = false;
      }
    }
    str += "}";
    return str;
  }
}

const set1 = new IntegerSet(10);
set1.insert(2);
set1.insert(4);
set1.insert(6);

const set2 = new IntegerSet(10);
set2.insert(2);
set2.insert(3);
set2.insert(5);

console.log("Conjunto 1:", set1.toString());
console.log("Conjunto 2:", set2.toString());

const union = set1.union(set2);
console.log("União:", union.toString());

const intersection = set1.intersection(set2);
console.log("Interseção:", intersection.toString());

const difference = set1.difference(set2);
console.log("Diferença:", difference.toString());
