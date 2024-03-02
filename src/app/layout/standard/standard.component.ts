import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeManagerService } from '../../shared/services/theme-manager.service';
import { BrowserStorageService } from '../../shared/services/browser-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngp-standard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.scss'
})
export class StandardComponent {

  themeService: ThemeManagerService = inject(ThemeManagerService)

  bs = inject(BrowserStorageService)

  /* istanbul ignore next */
  clearStore(): void {
    this.bs.clear()
  }

  /* istanbul ignore next */
  toggleTheme(): void {
    this.themeService.updateTheme()
  }
}
