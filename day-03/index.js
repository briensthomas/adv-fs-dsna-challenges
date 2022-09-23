class BinaryTreeNode {
    
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
    
  add(node) {

    if (node.value === this.value) {
      return null;
    } if (node.value < this.value) {
      //   console.log('node.left', node.left);
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;

      } else { 
        this.right.add(node);
      }
    }
  }
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
  
  add(node) {

    if (node.person.name === this.value) {
      return null;
    } if (node.person.name < this.value) {
      //   console.log('node.left', node.left);
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;

      } else { 
        this.right.add(node);
      }
    }
  }
  
  findPerson(name) {
    // Implement me!
    
  }
}

module.exports = { BinaryTreeNode, PersonTreeNode };
