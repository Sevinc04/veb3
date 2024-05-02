import React, { useState } from "react";

export default function Input() {
  const [formData, setFormData] = useState({
    fullName: "",
    finNumber: "",
    gender: "male",
    age: "",
    email: "",
    phoneNumber: "",
    symptoms: "",
    repeatReception: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setRegistrationSuccess(true);
  };

  return (
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label>
          Xəstənin tam adı: <br />
          <input
            type="text"
            placeholder="Tam adı daxil edin"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Vəsiqə seriyası və nömrəsi: <br />
          <input
            type="text"
            placeholder="FİN nömrəsini qeyd edin"
            name="finNumber"
            value={formData.finNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Cinsi: <br />
          <select
            className="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Kişi</option>
            <option value="female">Qadın</option>
          </select>
        </label>
        <br />
        <label>
          Yaş: <br />
          <input
            type="number"
            placeholder="Yaşınızı qeyd edin"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email ünvanı: <br />
          <input
            type="email"
            placeholder="Email ünvanı daxil edin"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefon nömrəsi: <br />
          <input
            type="number"
            placeholder="Əlaqə nömrəsi qeyd edin"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Simptomların təsviri: <br />
          <textarea
            rows="4"
            cols="30"
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Təkrar qəbul:
          <input
            type="checkbox"
            id="check"
            name="repeatReception"
            checked={formData.repeatReception}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <button type="submit">Göndər</button>
      </form>
      {registrationSuccess && (
        <p style={{ color: "green" }}>Kart uğurla qeydiyyatdan keçdi</p>
      )}
    </div>
  );
}