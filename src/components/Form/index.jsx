import { addDoc, collection } from "firebase/firestore";
import React, { useState } from 'react';
import { db } from "../../utils/firebase";

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "emails"), { email });
      setEmail('');

    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div className='footer-form-container'>
      <div className='footer-form-content'>
        <h2>CHARLIE'S MORNING BREW</h2>
        <div className='footer-form'>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='ENTER YOUR EMAIL'
              value={email}
              onChange={e => setEmail(e.target.value)
              }
              required
            />
            <button type="submit">SIP THE BREW</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;