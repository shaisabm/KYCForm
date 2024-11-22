import React from 'react';

const PersonalInfo = ({ formData, onChange, errors }) => {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          className={errors?.firstName ? 'error' : ''}
        />
        {errors?.firstName && (
          <div className="error-message">{errors.firstName}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          className={errors?.lastName ? 'error' : ''}
        />
        {errors?.lastName && (
          <div className="error-message">{errors.lastName}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        <input
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => onChange('dateOfBirth', e.target.value)}
          className={errors?.dateOfBirth ? 'error' : ''}
        />
        {errors?.dateOfBirth && (
          <div className="error-message">{errors.dateOfBirth}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={errors?.email ? 'error' : ''}
        />
        {errors?.email && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className={errors?.phone ? 'error' : ''}
        />
        {errors?.phone && (
          <div className="error-message">{errors.phone}</div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;