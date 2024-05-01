import React, { useState } from 'react';

function FeedbackForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !comment) {
      alert('Zəhmət olmasa, bütün sahələri doldurun!');
      return;
    }
    setSuccessMessage('Məlumatlar uğurla göndərildi!');
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setComment('');
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Ad:</label><br />
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Soyad:</label><br />
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Telefon:</label><br />
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label><br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Şərh:</label><br />
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Göndər</button>
      </form>
      {/* Göndərilən məlumat uğurla göndərildi mesajı */}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default FeedbackForm;
