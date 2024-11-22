import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import DocumentUpload from './DocumentUpload';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

const KYCForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    
    // Address Info
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    
    // Documents
    idDocument: null,
    addressProof: null,
    taxId: ''
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo 
            formData={formData} 
            onChange={handleInputChange} 
          />
        );
      case 2:
        return (
          <AddressInfo 
            formData={formData} 
            onChange={handleInputChange} 
          />
        );
      case 3:
        return (
          <DocumentUpload 
            formData={formData} 
            onChange={handleInputChange} 
          />
        );
      case 4:
        return (
          <Summary 
            formData={formData} 
            onEdit={setCurrentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="kyc-container">
      <ProgressBar currentStep={currentStep} totalSteps={4} />
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="button-group">
          {currentStep > 1 && (
            <button 
              type="button" 
              className="button prev" 
              onClick={handlePrev}
            >
              Previous
            </button>
          )}
          {currentStep < 4 ? (
            <button 
              type="button" 
              className="button next" 
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button 
              type="submit" 
              className="button next"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default KYCForm;