import React from 'react';

const DocumentUpload = ({ formData, onChange, errors }) => {
  const handleFileChange = (name, file) => {
    // Maximum file size (5MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        onChange(`${name}Error`, 'Invalid file type. Please upload a PDF, JPG, or PNG file');
        return;
      }
      
      if (file.size > MAX_FILE_SIZE) {
        onChange(`${name}Error`, 'File size exceeds 5MB limit');
        return;
      }
    }

    onChange(name, file);
    // Clear any existing error
    onChange(`${name}Error`, '');
  };

  const formatTaxId = (value) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Format as XXX-XX-XXXX
    if (numbers.length >= 9) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5, 9)}`;
    } else if (numbers.length >= 5) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5)}`;
    } else if (numbers.length >= 3) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }
    return numbers;
  };

  const handleTaxIdChange = (e) => {
    const formattedValue = formatTaxId(e.target.value);
    onChange('taxId', formattedValue);
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
          accept="image/*,.pdf"
          className={errors?.idDocument ? 'error' : ''}
        />
        {errors?.idDocument && (
          <div className="error-message">{errors.idDocument}</div>
        )}
        {formData.idDocument && (
          <div className="file-preview">
            Selected file: {formData.idDocument.name}
          </div>
        )}
        <small>
          Accepted formats: PDF, JPG, PNG (Max size: 5MB)
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="addressProof">Proof of Address *</label>
        <input
          type="file"
          id="addressProof"
          onChange={(e) => handleFileChange('addressProof', e.target.files[0])}
          accept="image/*,.pdf"
          className={errors?.addressProof ? 'error' : ''}
        />
        {errors?.addressProof && (
          <div className="error-message">{errors.addressProof}</div>
        )}
        {formData.addressProof && (
          <div className="file-preview">
            Selected file: {formData.addressProof.name}
          </div>
        )}
        <small>
          Accepted formats: PDF, JPG, PNG (Max size: 5MB)<br />
          Examples: Utility bill, Bank statement (not older than 3 months)
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
          className={errors?.taxId ? 'error' : ''}
        />
        {errors?.taxId && (
          <div className="error-message">{errors.taxId}</div>
        )}
        <small>
          For US citizens, please enter your Social Security Number (SSN)
        </small>
      </div>

      <div className="document-guidelines">
        <h3>Document Requirements:</h3>
        <ul>
          <li>Files must be clear and legible</li>
          <li>All document corners must be visible</li>
          <li>Documents must be valid and not expired</li>
          <li>Address proof must be recent (within 3 months)</li>
          <li>Maximum file size: 5MB per document</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentUpload;