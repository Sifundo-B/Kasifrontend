import { Component } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent {
  betSlip: any[] = [];

  removeFromBetSlip(bet: any) {
    this.betSlip = this.betSlip.filter(b => b !== bet);
  }
}
