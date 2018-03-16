import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isHoveredLogo: boolean = false;

  public ngOnInit(): void {
  }


  public logoAnimation(): void {
    this.isHoveredLogo = true;
    setTimeout(() => {
      this.isHoveredLogo = false;
    }, 1000);
  }

}
