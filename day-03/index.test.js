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
    const Jones = new PersonTreeNode({ name: 'Jones' });
    const Brook = new PersonTreeNode({ name: 'Brook',
      phone: '111-111-1111',
      address: '111 Main St' });
    const Smith = new PersonTreeNode({ name: 'Smith',
      phone: '222-222-2222',
      address: '222 Main St' });
    const Nelson = new PersonTreeNode({ name: 'Nelson',
      phone: '333-333-3333',
      address: '333 Main St' });

    Jones.add(Brook);

    Jones.add(Smith);
    Jones.add(Nelson);

    expect(Jones.findPerson('Nelson')).toEqual({ name: 'Nelson',
      phone: '333-333-3333',
      address: '333 Main St' });

    expect(Jones.left.value).toEqual('Brook');
    expect(Jones.right.value).toEqual('Smith');
    expect(Jones.right.left.value).toEqual('Nelson');
    
  });
});
