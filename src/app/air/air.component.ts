import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {

  constructor() { }

  selectedLegs = {
    options: [
      { name: 'L1', value: false },
      { name: 'L2', value: false },
      { name: 'L3', value: false },
      { name: 'L4', value: false },
      { name: 'L5', value: false },
      { name: 'L2Cha', value: false },
      { name: 'L4Cha', value: false }
    ]
  };

  ngOnInit() {
    const savedValues = localStorage.getItem('airSelectedLegs');
    if (savedValues) {
      localStorage.removeItem('checkboxValues');
    }

    // Select the first checkbox by default if none are selected
    if (!this.selectedLegs.options.some(option => option.value)) {
      this.selectedLegs.options[2].value = true;
      this.saveCheckboxValues();
    }
  }

  onCheckboxChange() {
    this.saveCheckboxValues();
  }

  saveCheckboxValues() {
    localStorage.setItem('airSelectedLegs', JSON.stringify(this.selectedLegs));
    // localStorage.removeItem('selectedLegs');
  }

}
