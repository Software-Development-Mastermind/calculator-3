class Calculator {
    constructor(display) {
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';
        this.display = display;
    }

    calculate() {
        let result;
        if (this.isCalculatable()) {
            if (this.operator === '+') {
                result = `${Number(this.firstOperand) + Number(this.secondOperand)}`;
            }
            this.setCalculator(result);
        }
    }

    setCalculator(result) {
        this.firstOperand = result;
        this.secondOperand = '';
        this.operator = '';
        this.setDisplay(this.firstOperand);
    }

    setOperands(operand) {
        if (!this.isOperation()) {
            this.setFirstOperand(operand)
            this.setDisplay(this.firstOperand);
        }
        if (this.isOperation()) {
            this.setSecondOperand(operand)
            this.setDisplay(this.secondOperand);
        }
    }

    setOperation(newOperator) {
        if (!this.isFirstOperand()) return;
        if (!this.isSecondOperand()) {
            this.setOperator(newOperator);
        }
    }

    isCalculatable() {
        return !!this.firstOperand && !!this.operator && !!this.operator;
    }

    isFirstOperand() {
        return !!this.firstOperand;
    }

    isSecondOperand() {
        return !!this.secondOperand;
    }

    isOperation() {
        return !!this.operator;
    }

    setFirstOperand(number) {
        this.firstOperand += number;
    }

    setSecondOperand(number) {
        this.secondOperand += number;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    setDisplay(string) {
        this.display.value = string;
    }

}

window.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator(document.querySelector('.display'));

    document.querySelectorAll('.operands').forEach(operandButton => {
        operandButton.addEventListener('click', e => {
            calculator.setOperands(e.target.textContent);
        })
    })

    document.querySelectorAll('.operations').forEach(operationButton => {
        operationButton.addEventListener('click', e => {
            calculator.setOperation(e.target.textContent);
        })
    })

    document.querySelector('.equal').addEventListener('click', () => {
        calculator.calculate();
    })
});