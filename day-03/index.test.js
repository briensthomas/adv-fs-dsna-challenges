const { BinaryTreeNode } = require('../day-03/index');


describe('node based binary tree', () => {
  it('example test', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    console.log('Test Line 14: ', B);
    console.log('A', A);
    console.log('D from Test', D);
    console.log('C', C);
    console.log('B from Test', B);
    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('D');
    expect(B.right.left.value).toEqual('C');
  });
});
