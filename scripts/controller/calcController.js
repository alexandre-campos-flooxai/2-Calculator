class CalcController {
  constructor() {
    this._operation = [];
    this._displayCalcEl = document.querySelector('#display');
    this._dataEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this._locale = 'pt-BR';
    this.currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  addEventListenerAll(element, events, fn) {
    events.split(' ').forEach((event) => {
      element.addEventListener(event, fn, false);
    });
  }

  clearAll() {
    this._operation = [];
  }

  clearEntry() {
    this._operation.pop();
  }

  getLastOperation() {
    return this._operation[this._operation.length - 1];
  }

  addOperation(value) {
    if (isNaN(this.getLastOperation())) this._operation.push(value);

    console.log(this._operation);
  }

  setError() {
    this.displayCalc = 'Error';
  }

  execBtn(value) {
    switch (value) {
      case 'ac':
        this.clearAll();
        break;
      case 'ce':
        this.clearEntry();
        break;
      case 'soma':
        break;

      case 'subtracao':
        break;

      case 'divisao':
        break;

      case 'multiplicacao':
        break;

      case 'porcento':
        break;

      case 'igual':
        break;

      case 'ponto':
        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(parseInt(value));
        break;

      default:
        this.setError;
        break;
    }
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll('#buttons > g, #parts > g');

    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, 'click drag', () => {
        let textBtn = btn.className.baseVal.replace('btn-', '');

        this.execBtn(textBtn);
      });

      this.addEventListenerAll(btn, 'mouseover mouseup mousedown', (e) => {
        btn.style.cursor = 'pointer';
      });
    });
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get displayDate() {
    return this._dataEl.innerHTML;
  }

  set displayDate(date) {
    this._dataEl.innerHTML = date;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(time) {
    this._timeEl.innerHTML = time;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(date) {
    this.currentDate = date;
  }
}
