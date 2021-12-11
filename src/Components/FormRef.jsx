import { useEffect, useRef, useState } from "react";

function FormRef() {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: false,
    image: null
  });
  const imageRef = useRef(null);

  useEffect(() => {}, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormState({ ...formState, image: file });
  };

  const handleFormUpdate = (e) => {
    let { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: val
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({
      name: "",
      gender: "",
      role: "",
      maritalStatus: false,
      image: null
    });
  };
  return (
    <>
      <h3>Form UseRef</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            placeholder="Name"
            onChange={handleFormUpdate}
          />
        </div>
        <br />
        <div>
          <label>Gender</label>
          <select
            name="gender"
            value={formState.gender}
            onChange={handleFormUpdate}
          >
            <option label="Select Gender" key="" />
            <option label="M" key="male">
              M
            </option>
            <option label="F" key="female">
              F
            </option>
          </select>
        </div>
        <br />
        <div>
          <label>Role</label>
          <select
            name="role"
            value={formState.role}
            onChange={handleFormUpdate}
          >
            <option label="Select Role">Select Role</option>
            <option label="Accountant"> Accountant</option>
            <option label="Psychologist">Psychologist</option>
            <option label="Developer">Developer</option>
          </select>
        </div>
        <br />
        <div>
          <label>Marital Status</label>
          <input
            checked={formState.maritalStatus}
            name="maritalStatus"
            type="checkbox"
            onChange={handleFormUpdate}
          />
        </div>
        <br />
        <input
          ref={imageRef}
          onChange={handleImageChange}
          name="image"
          type="file"
        />
      </form>
    </>
  );
}
export default FormRef;
