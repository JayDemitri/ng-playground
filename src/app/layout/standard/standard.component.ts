import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ThemeManagerService } from '../../shared/services/theme-manager.service';
import { BrowserStorageService } from '../../shared/services/browser-storage.service';

@Component({
  selector: 'ngp-standard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.scss'
})
export class StandardComponent {
  
    themeManager = inject(ThemeManagerService);

    bs = inject(BrowserStorageService)

    clearStore(){
      this.bs.clear()
    }
}
