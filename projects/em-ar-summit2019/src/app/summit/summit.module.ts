import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SummitSelectionComponent } from './components/summit-selection/summit-selection.component';
import { SummitAppShellComponent } from './components/summit-app-shell/summit-app-shell.component';
import { ScheduleDialogComponent } from './components/schedule-dialog/schedule-dialog.component';
import { EventLibModule, SwPushSubModule } from 'event-lib';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DefaultSummitDialogComponent } from './components/default-summit-dialog/default-summit-dialog.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [SummitSelectionComponent, SummitAppShellComponent, ScheduleDialogComponent, SideNavComponent,
    DefaultSummitDialogComponent,
    HomeComponent],
  imports: [
    SharedModule, SwPushSubModule, EventLibModule
  ],
  entryComponents: [DefaultSummitDialogComponent]
})
export class SummitModule {
}