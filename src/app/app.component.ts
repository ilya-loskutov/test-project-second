import { Component, ChangeDetectionStrategy } from '@angular/core';

import { navigationPaths } from './config/navigationPaths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-project-second';

  navigationPaths = navigationPaths;
}
