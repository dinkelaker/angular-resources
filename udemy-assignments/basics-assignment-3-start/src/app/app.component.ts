import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible = false;
  auditIndex = 1;
  auditLogs = [];

  onAuditMakeDetailsVisible() {
    this.auditLogs.push(this.auditIndex++);
  }

  getBackgroundColor(auditLog) {
    return auditLog > 4 ? 'blue' : 'white';
  }
}
