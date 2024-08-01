Sure! Here's the `README.md` file for your project:

```markdown
# PDF Certificate Generator

This project is an Angular application that generates a certificate PDF with dynamic data using `pdf-lib`. The user can fill in their name, date of birth, category, and email. The application will then generate a PDF with these details filled in and download it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pdf-certificate-generator.git
   cd pdf-certificate-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Bootstrap, jQuery, and ngx-bootstrap:**

   ```bash
   npm install bootstrap jquery ngx-bootstrap --save
   ```

4. **Add Bootstrap and jQuery to `angular.json`:**

   ```json
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ],
   "scripts": [
     "node_modules/jquery/dist/jquery.min.js",
     "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ]
   ```

5. **Run the application:**

   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200`.

## Usage

1. **Enter your details:**

   - Name
   - Date of Birth (using Bootstrap Datepicker)
   - Category (General, OBC, SC, ST, General EWS)
   - Email

2. **Click "Download Certificate" button:**

   The application will generate a PDF with the provided details and download it with the name entered in the "Name" field.

## Project Structure

```
pdf-certificate-generator/
│
├── src/
│   ├── app/
│   │   ├── pdf-editor/
│   │   │   ├── pdf-editor.component.html
│   │   │   ├── pdf-editor.component.ts
│   │   │   ├── pdf-editor.component.css
│   │   ├── pdf.service.ts
│   │   ├── app.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   ├── assets/
│   │   ├── template.pdf
│   ├── index.html
│   ├── styles.css
│
├── angular.json
├── package.json
├── README.md
```

## Technologies Used

- Angular
- Bootstrap
- ngx-bootstrap
- jQuery
- pdf-lib
- file-saver

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
