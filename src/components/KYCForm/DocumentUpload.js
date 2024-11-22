import React, { useState } from 'react';

const DocumentUpload = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({
    idDocument: '',
    addressProof: '',
    taxId: ''
  });

  // Maximum file size (5MB)
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  
  // Allowed file types
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

  const validateFile = (file) => {
    if (!file) return 'File is required';
    
    if (!ALLOWED_TYPES.includes(file.type)) {
      return 'Invalid file type. Please upload a PDF, JPG, or PNG file';
    }
    
    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds 5MB limit';
    }
    
    return '';
  };

  const validateTaxId = (value) => {
    // Basic US SSN validation (XXX-XX-XXXX)
    const ssnPattern = /^\d{3}-?\d{2}-?\d{4}$/;
    if (!value) return 'Tax ID is required';
    if (!ssnPattern.test(value.replace(/-/g, ''))) {
      return 'Please enter a valid Tax ID number';
    }
    return '';
  };

  const handleFileChange = (name, file) => {
    const error = validateFile(file);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    if (!error) {
      onChange(name, file);
    }
  };

  const handleTaxIdChange = (e) => {
    const value = e.target.value;
    const error = validateTaxId(value);
    setErrors(prev => ({
      ...prev,
      taxId: error
    }));

    // Format SSN as user types (XXX-XX-XXXX)
    let formattedValue = value.replace(/\D/g, '');
    if (formattedValue.length >= 5) {
      formattedValue = `${formattedValue.slice(0,3)}-${formattedValue.slice(3,5)}-${formattedValue.slice(5,9)}`;
    } else if (formattedValue.length >= 3) {
      formattedValue = `${formattedValue.slice(0,3)}-${formattedValue.slice(3)}`;
    }

    onChange('taxId', formattedValue);
  };

  const renderFilePreview = (file) => {
    if (!file) return null;

    if (file.type === 'application/pdf') {
      return <p className="file-preview">PDF Document: {file.name}</p>;
    }

    return (
      <div className="file-preview">
        <img 
          src={URL.createObjectURL(file)} 
          alt="Document preview" 
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
      </div>
    );
  };

  return (
    <div className="form-step">
      <h2>Document Upload</h2>

      <div className="form-group">
        <label htmlFor="idDocument">ID Document (Passport/Driver's License) *</label>
        <input
          type="file"
          id="idDocument"
          onChange={(e) => handleFileChange('idDocument', e.target.files[0])}
          accept={ALLOWED_TYPES.join(',')}
          required
        />
        {errors.idDocument && (
          <span className="error-message">{errors.idDocument}</span>
        )}
        {formData.idDocument && renderFilePreview(formData.idDocument)}
        <small>
          Accepted formats: PDF, JPG, PNG (Max size: 5MB)<br />
          Please ensure your document is clearly visible and all details are legible
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="addressProof">Proof of Address *</label>
        <input
          type="file"
          id="addressProof"
          onChange={(e) => handleFileChange('addressProof', e.target.files[0])}
          accept={ALLOWED_TYPES.join(',')}
          required
        />
        {errors.addressProof && (
          <span className="error-message">{errors.addressProof}</span>
        )}
        {formData.addressProof && renderFilePreview(formData.addressProof)}
        <small>
          Accepted documents: Utility bill, Bank statement, Government-issued document<br />
          Document must be less than 3 months old
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="taxId">Tax ID Number (SSN) *</label>
        <input
          type="text"
          id="taxId"
          value={formData.taxId}
          onChange={handleTaxIdChange}
          placeholder="XXX-XX-XXXX"
          maxLength="11"
          required
        />
        {errors.taxId && (
          <span className="error-message">{errors.taxId}</span>
        )}
        <small>
          For US citizens, please enter your Social Security Number (SSN)<br />
          Format: XXX-XX-XXXX
        </small>
      </div>

      <div className="document-guidelines">
        <h3>Document Guidelines:</h3>
        <ul>
          <li>All documents must be current and not expired</li>
          <li>Images must be clear and in color</li>
          <li>All four corners of the document must be visible</li>
          <li>No blurry or obscured information</li>
          <li>Files must not exceed 5MB in size</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentUpload;