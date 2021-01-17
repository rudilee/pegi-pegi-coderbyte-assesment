function ReversePolishNotation(str) {
    const ADD = '+';
    const SUB = '-';
    const MUL = '*';
    const DIV = '/';

    const operations = str.split(' ');

    let stack = [];

    operations.forEach(operation => {
        switch (operation) {
            case ADD:
                stack.push(stack.pop() + stack.pop());
                break;
            case SUB: {
                let minuend = stack.pop()
                let subtrahend = stack.pop();
                stack.push(minuend - subtrahend);
                break;
            }
            case MUL:
                stack.push(stack.pop() * stack.pop());
                break;
            case DIV: {
                let dividend = stack.pop();
                let divisor = stack.pop();
                stack.push(dividend / divisor);
                break;
            }
            default:
                stack.push(parseInt(operation));
                break;
        }
    });

    return stack.length == 1 ? stack[0] : 0;
}

console.log(ReversePolishNotation("4 5 + 2 1 + *"));