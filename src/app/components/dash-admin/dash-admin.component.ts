import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-dash-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export default class DashAdminComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private authSubscription: Subscription | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    // Make sure to unsubscribe to prevent memory leaks
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  async logOut() {
    try {
      await this.authService.logout();
      console.log('Log Out successful');
    } catch (error) {
      console.error('Log Out error:', error);
    }
  }
}
