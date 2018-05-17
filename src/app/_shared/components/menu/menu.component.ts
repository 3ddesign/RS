import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isOpenMobMenu: boolean = false;
  public servicesBtn: boolean = false;
  public aboutBtn: boolean = false;
  public technologiesBtn: boolean = false;
  public careerBtn: boolean = false;
  public blogBtn: boolean = false;
  public contactBtn: boolean = false;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleMobMenu(): void {
    this.isOpenMobMenu = !this.isOpenMobMenu;
    if (this.isOpenMobMenu === true) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): any {

    if (window.scrollY > window.innerHeight - 50 && window.scrollY < window.innerHeight * 2) {
      this.servicesBtn = true;
    } else {
      this.servicesBtn = false;
    }

    if (window.scrollY > window.innerHeight * 2 - 50 && window.scrollY < window.innerHeight * 3) {
      this.aboutBtn = true;
    } else {
      this.aboutBtn = false;
    }

    if (window.scrollY > window.innerHeight * 3 - 50 && window.scrollY < window.innerHeight * 4) {
      this.technologiesBtn = true;
    } else {
      this.technologiesBtn = false;
    }

    if (window.scrollY > window.innerHeight * 4 - 50 && window.scrollY < window.innerHeight * 5) {
      this.careerBtn = true;
    } else {
      this.careerBtn = false;
    }

    if (window.scrollY > window.innerHeight * 5 - 50 && window.scrollY < window.innerHeight * 6) {
      this.contactBtn = true;
    } else {
      this.contactBtn = false;
    }

    // if (window.scrollY > window.innerHeight * 6 - 50 && window.scrollY < window.innerHeight * 7) {
    //   this.contactBtn = true;
    // } else {
    //   this.contactBtn = false;
    // }
  }
}

