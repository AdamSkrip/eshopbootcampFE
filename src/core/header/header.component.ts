import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BannerComponent} from "../banner/banner.component";
import {FooterComponent} from "../footer/footer.component";
import {LoginComponent} from "../login/login.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private userService: UserService) {
  }

  isLoggedIn: boolean;

  goToAdmin() {
    this.router.navigateByUrl('admin').catch();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, { // LoginComponent
      width: '275px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      let username,password;
      if(result){
        username = result.username;
        password = result.password;

      }
      if (username && password) {
        this.userService.login(username);
      }

      this.isLoggedIn = this.userService.isLoggedIn();
    });
  }

  ngOnInit() {
     this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}
