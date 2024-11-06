import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstname("");
        setLastname("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubject({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstname,
      lastname,
      email,
      contact,
      gender,
      selectedOption,
      subject,
      resume,
      url,
      about
    )
  }

  return (
    <div className="Container">
      <h1>Submission Form</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">First Name *</label>
          <input
            type="text"
            value={firstname}
            placeholder="Enter first name"
            required
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="lastname">Last Name *</label>
          <input
            type="text"
            value={lastname}
            placeholder="Enter last name"
            required
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="text"
            value={email}
            placeholder="Enter email"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="contact">Contact *</label>
          <input
            type="text"
            value={contact}
            placeholder="Enter contact number"
            required
            id="contact"
            onChange={(e) => setContact(e.target.value)}
          />

          <label>Gender *</label>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            value="other"
            name="gender"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other

          <label>Your Favorite Subject * </label>
          <input
            type="checkbox"
            value="english"
            name="subject"
            id="english"
            checked={subject.english}
            onChange={() => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            value="maths"
            name="subject"
            id="maths"
            checked={subject.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            value="physics"
            name="subject"
            id="physics"
            checked={subject.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics

          <label htmlFor="resume">Upload Resume *</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <label htmlFor="url">Enter URL *</label>
          <input
            type='text'
            id='url'
            name='url'
            placeholder='Enter url' required
            onChange={(e) => setUrl(e.target.value)}
          />

          <label htmlFor="choice">Select your choice * </label>
          <select 
            name='select'
            id='select'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}>
              <option 
                value="" disabled
                selected= {selectedOption === ""}> Select your answer </option>
                  <optgroup label='Beginners'>
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">JS</option>
                  </optgroup>
                  <optgroup label='Advanced'>
                    <option value="4">React.js</option>
                    <option value="5">Express.js</option>
                    <option value="6">Node.js</option>
                    <option value="7">MongoDB</option>
                  </optgroup>               
          </select>

          <label htmlFor="about">About </label>
          <textarea 
            name='about'
            id='about' 
            placeholder='Write about yourself'
            rows= "10"
            cols= "30"
            onChange={(e) => setAbout(e.target.value)}
          />

          <button
            type='reset'
            value='reset'
            onClick={(e) => handleReset()}
          >
            Reset
          </button>

          <button
            type='submit'
            value='submit'
            onClick={(e) => handleSubmit()}
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
