class CalcController {
  constructor() {
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

  initButtonsEvents() {
    let buttons = document.querySelectorAll('#buttons > g, #parts > g');

    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, 'click drag', () => {
        console.log(btn.className.baseVal.replace('btn-', ''));
      });

      this.addEventListenerAll(btn, 'mouseover mouseup mousedown', (e) => {
        btn.computedStyleMap.cursor = 'pointer';
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
