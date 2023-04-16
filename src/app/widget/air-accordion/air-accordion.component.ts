import { Component, OnInit } from '@angular/core';

function accordion() {
  const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

  accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

  function toggleAccordion(this: any) {
    const items = document.querySelectorAll('.js-acc-item');
    const thisItem = this.parentNode;

    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('is-open');
        return;
      }
      item.classList.remove('is-open');
    });
  }
}

@Component({
  selector: 'app-air-accordion',
  templateUrl: './air-accordion.component.html',
  styleUrls: ['./air-accordion.component.css']
})
export class AirAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    accordion();
  }

}
