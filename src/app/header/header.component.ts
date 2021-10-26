import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navbarLinkClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavLinkClick(linkName: string) {
    this.navbarLinkClicked.emit(linkName);
  }
}
