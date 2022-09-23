const { BinaryTreeNode, PersonTreeNode } = require('../day-03/index');


describe('node based binary tree', () => {
  it('example test', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('D');
    expect(B.right.left.value).toEqual('C');
  });
});

describe('Person Binary Tree', () => {
  it('should return the person object matching the name', () => {
    const Jones = new PersonTreeNode('Jones');
    const Brook = new PersonTreeNode('Brook');
    const Smith = new PersonTreeNode('Smith');
    const Nelson = new PersonTreeNode('Nelson');

    Jones.add(Brook);
    Jones.add(Smith);
    Jones.add(Nelson);

    const person1 = PersonTreeNode.findPerson('Nelson');

    expect(Jones.left.name).toEqual('Brook');
    expect(Jones.right.name).toEqual('Smith');
    expect(Jones.right.left.name).toEqual('Nelson');
    expect(person1).toEqual('Nelson');
  });
});
