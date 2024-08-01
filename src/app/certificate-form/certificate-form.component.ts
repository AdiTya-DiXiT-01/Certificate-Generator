import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PDFDocument } from 'pdf-lib';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css',
})
export class CertificateFormComponent {
  studentName: string = '';
  dob: string = '';
  email: string = '';
  category: string = '';
  async generateCertificate() {
    if (!this.studentName) {
      alert('Please enter a name.');
      return;
    }

    const fileBytes = await fetch('/assets/sample.pdf').then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(fileBytes);
    const pages = pdfDoc.getPages();
    //const firstPage = pages[0];

    const formattedName = this.formatName(this.studentName);

    const form = pdfDoc.getForm();
    const nameField = form.getTextField('name');
    const idField = form.getTextField('dob');
    const mailField = form.getTextField('email');
    const category = form.getTextField('category');

    nameField.setText(formattedName);
    idField.setText(this.dob);
    mailField.setText(this.email);
    category.setText(this.category);

    form.flatten();

    // const { width, height } = firstPage.getSize();
    // firstPage.drawText(formattedName, {
    //   x: width / 2 - 100,
    //   y: height / 2,
    //   size: 50,
    //   color: rgb(0, 0, 0),
    // });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${this.studentName}\-certificate.pdf`;
    link.click();
  }

  formatName(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    return parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  }
}
