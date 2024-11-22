import React from 'react';

const AddressInfo = ({ formData, onChange, errors }) => {
    const countries = [
        'United States', 'Canada', 'United Kingdom',
        'Australia', 'Germany', 'France', 'Japan'
    ]; // Add more countries as needed

    return (
        <div className="form-step">
            <h2>Address Information</h2>

            <div className="form-group">
                <label htmlFor="street">Street Address *</label>
                <input
                    type="text"
                    id="street"
                    value={formData.street}
                    onChange={(e) => onChange('street', e.target.value)}
                    className={errors?.street ? 'error' : ''}
                />
                {errors?.street && (
                    <div className="error-message">{errors.street}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => onChange('city', e.target.value)}
                    className={errors?.city ? 'error' : ''}
                />
                {errors?.city && (
                    <div className="error-message">{errors.city}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="state">State/Province *</label>
                <input
                    type="text"
                    id="state"
                    value={formData.state}
                    onChange={(e) => onChange('state', e.target.value)}
                    className={errors?.state ? 'error' : ''}
                />
                {errors?.state && (
                    <div className="error-message">{errors.state}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => onChange('country', e.target.value)}
                    className={errors?.country ? 'error' : ''}
                >
                    <option value="">Select a country</option>
                    {countries.map(country => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors?.country && (
                    <div className="error-message">{errors.country}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="postalCode">Postal Code *</label>
                <input
                    type="text"
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => onChange('postalCode', e.target.value)}
                    className={errors?.postalCode ? 'error' : ''}
                />
                {errors?.postalCode && (
                    <div className="error-message">{errors.postalCode}</div>
                )}
            </div>
        </div>
    );
};
export default AddressInfo;
