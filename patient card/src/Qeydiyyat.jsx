import React, { useState } from 'react';
import './App.css'

function Qeydiyyat() {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [repeatAppointment, setRepeatAppointment] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const [cardMessage, setCardMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayCard(true);
    setCardMessage('Kart qeydiyyatdan keçdi');
    console.log(symptoms);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Tam Adı:</label><br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        /><br />

        <label htmlFor="idNumber">Vəsiqə Seriyası və Nömrəsi:</label><br />
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
        /><br />

        <label htmlFor="gender">Cinsi:</label><br />
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="male">Kişi</option>
          <option value="female">Qadın</option>
        </select><br />

        <label htmlFor="age">Yaş:</label><br />
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        /><br />

        <label htmlFor="email">Email Ünvanı:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <label htmlFor="telephone">Telefon Nömrəsi:</label><br />
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        /><br />

        <label htmlFor="symptoms">Simptomların Təsviri:</label><br />
        <textarea
          id="symptoms"
          name="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows="4"
          required
        ></textarea><br />

        <input
          type="checkbox"
          id="repeatAppointment"
          name="repeatAppointment"
          checked={repeatAppointment}
          onChange={(e) => setRepeatAppointment(e.target.checked)}
        />
        <label htmlFor="repeatAppointment">Təkrar Qəbul</label><br />

        <button type="submit">Göndər</button>
      </form>

      {displayCard && (
        <div className="patient-card">
          <div>{cardMessage}</div>
          <div>Tam Adı: {fullName}</div>
          <div>Vəsiqə Seriyası və Nömrəsi: {idNumber}</div>
          <div>Cinsi: {gender}</div>
          <div>Yaş: {age}</div>
          <div>Email Ünvanı: {email}</div>
          <div>Telefon Nömrəsi: {telephone}</div>
          <div>Simptomların Təsviri: {symptoms}</div>
          <div>Təkrar Qəbul: {repeatAppointment ? 'Bəli' : 'Xeyr'}</div>
        </div>
      )}
    </div>
  );
}

export default Qeydiyyat;
