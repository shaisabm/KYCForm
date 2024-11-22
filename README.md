# KYC Form Application

## Overview
A modern, multi-step Know Your Customer (KYC) form application built with React. This application provides a seamless user experience for collecting and validating customer information through a step-by-step process.

## Features
- 📝 Multi-step form with progress tracking
- 🔄 Smooth navigation between steps
- 📱 Responsive design for all devices
- 📤 Document upload functionality
- ✅ Real-time validation
- 👀 Document preview capabilities
- 📋 Final review and summary page

## Live Demo
[Add your live demo link here]

## Screenshots
[Add screenshots of your application here]

## Technologies Used
- React 18.x
- CSS3
- File API
- Modern JavaScript (ES6+)

## Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository
bash
git clone https://github.com/your-username/kyc-form-application.git
2. Navigate to the project directory
bash
cd kyc-form-application
3. Install dependencies
bash
npm install
4. Start the development server
bash
npm start

The application will open in your default browser at `http://localhost:3000`

## Project Structure
kyc-form-application/
├── public/
├── src/
│ ├── components/
│ │ └── KYCForm/
│ │ ├── KYCForm.js

│ │ ├── PersonalInfo.js

│ │ ├── AddressInfo.js

│ │ ├── DocumentUpload.js

│ │ ├── Summary.js

│ │ └── ProgressBar.js

│ ├── App.js

│ ├── App.css

│ └── index.js

├── package.json

└── README.md




## Component Overview

### KYCForm
The main container component that manages form state and step navigation.

### PersonalInfo
Collects basic user information including:
- First Name
- Last Name
- Date of Birth
- Email
- Phone Number

### AddressInfo
Handles residential information including:
- Street Address
- City
- State/Province
- Country
- Postal Code

### DocumentUpload
Manages document uploads with:
- ID Document Upload
- Proof of Address Upload
- Tax ID Number Input
- File Preview
- Validation

### Summary
Provides a comprehensive review of all entered information with edit capabilities.

## Features in Detail

### Form Validation
- Required field validation
- Email format validation
- Phone number format validation
- File type and size validation
- Tax ID format validation

### File Upload
- Supports PDF, JPG, and PNG formats
- Maximum file size: 5MB
- Preview capability for images
- PDF document detection

### Progress Tracking
- Visual progress indicator
- Step completion status
- Easy navigation between steps

## Configuration

### File Upload Limits
You can modify the file upload limits in `DocumentUpload.js`:
const MAX_FILE_SIZE = 5 1024 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements
- [ ] Add form data persistence
- [ ] Implement backend integration
- [ ] Add multi-language support
- [ ] Enhance accessibility features
- [ ] Add unit tests
- [ ] Implement form analytics

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
- [React Documentation](https://reactjs.org/)
- [File API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
- [Alpaca Markets API Documentation](https://docs.alpaca.markets/reference/createaccount)

## Contact
Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/kyc-form-application](https://github.com/shaisabm/KYCForm?tab=readme-ov-file)
