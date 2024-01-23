import { Component, Input, OnInit } from '@angular/core';
import { polkadotIcon } from '@polkadot/ui-shared/icons';
import { Circle } from '@polkadot/ui-shared/icons/types';

@Component({
  selector: 'app-identicon',
  templateUrl: './identicon.component.html',
  styleUrls: ['./identicon.component.scss'],
})
export class IdenticonComponent implements OnInit {
  @Input() address!: string;

  size = 64;
  circleList: Circle[] = [];

  /*
  renderCircle({ cx, cy, fill, r }: Circle) {
    let svg = `<circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />`;
    return svg;
  }
  */

  renderPolkadotIdenticon(
    address: string,
    isAlternative = false,
    size: number
  ) {
    const newCircles = polkadotIcon(address, { isAlternative, size });
    newCircles.forEach((circle) => {
      this.circleList.push(circle);
    });
  }

  ngOnInit(): void {
    this.renderPolkadotIdenticon(this.address, false, this.size);
  }
}
