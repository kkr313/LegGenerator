import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fcl',
  templateUrl: './fcl.component.html',
  styleUrls: ['./fcl.component.css']
})

export class FclComponent implements OnInit {

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
    // L1: false,
    // L2: false,
    // L3: false,
    // L4: false,
    // L5: false,
    // L2Cha: false,
    // L4Cha: false
  };
  constructor() {}

  ngOnInit() {
    const savedValues = localStorage.getItem('selectedLegs');
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
    localStorage.setItem('selectedLegs', JSON.stringify(this.selectedLegs));
    // localStorage.removeItem('selectedLegs');
  }

}
