class SmartCalculator {
    constructor(initialValue) {
        this.initialValue = "" + initialValue;
    }

    valueOf() {
        return eval(this.initialValue);
    }

    add(number) {
        this.initialValue += " + " + number;
        return this;
    }

    subtract(number) {
        this.initialValue += " - " + number;
        return this;
    }

    multiply(number) {
        this.initialValue += " * " + number;
        return this;
    }

    devide(number) {
        this.initialValue += " / " + number;
        return this;
    }

    pow(number) {
        let tempArr = this.initialValue.split(' ');
        tempArr[tempArr.length-1] = Math.pow(tempArr[tempArr.length-1], number);
        tempArr = tempArr.join(' ');
        this.initialValue = tempArr;
        return this;
    }
}

module.exports = SmartCalculator;