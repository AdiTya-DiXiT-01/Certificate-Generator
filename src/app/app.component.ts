import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CertificateFormComponent } from "./certificate-form/certificate-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CertificateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Certificate Generator';
}
