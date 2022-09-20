const { MyDataStructure } = require('../MyDataStructure.js');
const { Stack } = require('../Stack.js');

describe('MyDataStructure', () => {
  it('should add to the front', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    myStructure.addFront(3);
    expect(myStructure.readableList).toEqual('3,4,6,8');
  });

  it('should add to the back', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    myStructure.addBack(3);
    expect(myStructure.readableList).toEqual('4,6,8,3');
  });

  it('should return the count', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    expect(myStructure.count).toBe(3);
  });
});

describe('Stack', () => {
  it('should add an item to the end(top) of the stack', () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    expect(stack.list).toEqual(['fox', 'goose', 'lizard']);
    
    stack.pop();
    expect(stack.list).toEqual(['fox', 'goose']);

    const peek = stack.peek();
    expect(peek).toBe('goose');

    stack.pop();
    expect(stack.list).toEqual(['fox']);

    stack.push('llama');
    expect(stack.list).toEqual(['fox', 'llama']);

    stack.pop();
    expect(stack.list).toEqual(['fox']);

    const peek2 = stack.peek();
    expect(peek2).toEqual('fox');

    stack.pop();
    expect(stack.list).toEqual([]);
  });
});
