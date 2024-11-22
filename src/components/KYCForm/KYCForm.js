import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import DocumentUpload from './DocumentUpload';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

const KYCForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
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

  const validatePersonalInfo = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    return newErrors;
  };

  const validateAddressInfo = () => {
    const newErrors = {};
    
    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    } else if (formData.street.trim().length < 5) {
      newErrors.street = 'Please enter a valid street address';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    } else if (formData.city.trim().length < 2) {
      newErrors.city = 'Please enter a valid city name';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State/Province is required';
    } else if (formData.state.trim().length < 2) {
      newErrors.state = 'Please enter a valid state/province';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }
    
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    } else {
      // Basic postal code validation - you might want to add country-specific validation
      const postalRegex = /^[A-Z0-9]{3,10}$/i;
      if (!postalRegex.test(formData.postalCode.trim())) {
        newErrors.postalCode = 'Please enter a valid postal code';
      }
    }
    
    return newErrors;
  };

  const validateDocuments = () => {
    const newErrors = {};
    
    if (!formData.idDocument) {
      newErrors.idDocument = 'ID document is required';
    }
    
    if (!formData.addressProof) {
      newErrors.addressProof = 'Proof of address is required';
    }
    
    if (!formData.taxId.trim()) {
      newErrors.taxId = 'Tax ID is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = () => {
    let stepErrors = {};
    
    switch (currentStep) {
      case 1:
        stepErrors = validatePersonalInfo();
        break;
      case 2:
        stepErrors = validateAddressInfo();
        break;
      case 3:
        stepErrors = validateDocuments();
        break;
      default:
        break;
    }
    
    return stepErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
      // Add your submission logic here
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo 
            formData={formData} 
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <AddressInfo 
            formData={formData} 
            onChange={handleInputChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <DocumentUpload 
            formData={formData} 
            onChange={handleInputChange}
            errors={errors}
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