class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector('#display');
    this._dataEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this._locale = 'pt-BR';
    this.currentDate;
    this.initialize();
  }

  initialize() {
    setInterval(() => {
      this.displayDate = this.currentDate.toLocaleDateString(this._locale);
      this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }, 1000);
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
