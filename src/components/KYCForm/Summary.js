import React from 'react';
const Summary = ({ formData, onEdit }) => {
    return (
        <div className="form-step">
            <h2>Review Your Information</h2>
            <div className="summary-section">
                <h3>
                    Personal Information
                    <button
                        type="button"
                        className="button"
                        onClick={() => onEdit(1)}
                    >
                        Edit
                    </button>
                </h3>
                <div className="summary-item">
                    <span>Name:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="summary-item">
                    <span>Date of Birth:</span>
                    <span>{formData.dateOfBirth}</span>
                </div>
                <div className="summary-item">
                    <span>Email:</span>
                    <span>{formData.email}</span>
                </div>
                <div className="summary-item">
                    <span>Phone:</span>
                    <span>{formData.phone}</span>
                </div>
            </div>
            <div className="summary-section">
                <h3>
                    Address Information
                    <button
                        type="button"
                        className="button"
                        onClick={() => onEdit(2)}
                    >
                        Edit
                    </button>
                </h3>
                <div className="summary-item">
                    <span>Street:</span>
                    <span>{formData.street}</span>
                </div>
                <div className="summary-item">
                    <span>City:</span>
                    <span>{formData.city}</span>
                </div>
                <div className="summary-item">
                    <span>State:</span>
                    <span>{formData.state}</span>
                </div>
                <div className="summary-item">
                    <span>Country:</span>
                    <span>{formData.country}</span>
                </div>
                <div className="summary-item">
                    <span>Postal Code:</span>
                    <span>{formData.postalCode}</span>
                </div>
            </div>
            <div className="summary-section">
                <h3>
                    Documents
                    <button
                        type="button"
                        className="button"
                        onClick={() => onEdit(3)}
                    >
                        Edit
                    </button>
                </h3>
                <div className="summary-item">
                    <span>ID Document:</span>
                    <span>{formData.idDocument?.name || 'Not uploaded'}</span>
                </div>
                <div className="summary-item">
                    <span>Proof of Address:</span>
                    <span>{formData.addressProof?.name || 'Not uploaded'}</span>
                </div>
                <div className="summary-item">
                    <span>Tax ID:</span>
                    <span>{formData.taxId}</span>
                </div>
            </div>
        </div>
    );
};
export default Summary;