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
    expect(stack).toEqual('fox', 'goose', 'lizard');
    
    const pop = stack.pop();
    expect(pop).toBe('lizard');

    const peek = stack.peek();
    expect(peek).toBe('goose');

    const pop2 = stack.pop();
    expect(pop2).toBe('goose');

    const push = stack.push('llama');
    expect(push).toBe('llama');

    const pop3 = stack.pop();
    expect(pop3).toBe('llama');

    const peek2 = stack.peek();
    expect(peek2).toBe('fox');

    const pop4 = stack.pop();
    expect(pop4).toBe('fox');

    const pop5 = stack.pop();
    expect(pop5).toBe(null);
  });
});
