import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [contactCards, setContactCards] = useState([]);
  const [id, setId] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefualt();

    const newContact = {
      id,
      name,
      email,
      age,
    };

    setContactCards([...contactCards, newContact]);

    setId(id + 1);

    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <>
      <div className="form-div">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Name"
            className="form-input"
          />
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
            className="form-input"
          />
          <select value={age} onChange={handleAge} className="form-select">
            <option value="">Select Age</option>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-form-button">Submit</button>
        </form>
      </div>
      <div className="cards-div">
        {contactCards.map((card) => (
          <div
            className="card"
            style={{
              width: '18rem',
            }}
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{card.name}</li>
              <li className="list-group-item">{card.email}</li>
              <li className="list-group-item">{card.age}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
