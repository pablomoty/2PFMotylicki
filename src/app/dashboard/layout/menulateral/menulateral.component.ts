import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss']
})
export class MenulateralComponent {

  constructor(private router: Router,) {}

  desloguear(): void {
    this.router.navigate(['auth'], {})
}
}
