import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { getUserList } from "../../store/user-list/user-list.selector";
import { setUserList } from "../../store/user-list/user-list.action";

import "./user-input-form.styles.css";

const defaultFormFields = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  avatar: "",
};

const UserInputForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { first_name, last_name, email } = formFields;
  const userList = useSelector(getUserList);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
  };

  const validateInput = () => {
    const first_name_value = first_name.trim();
    const last_name_value = last_name.trim();
    const email_value = email.trim();

    if (first_name_value === "") {
      setErrorMessage("Enter valid first name");
    }
    if (last_name_value === "") {
      setErrorMessage("Enter valid last name");
    }
    if (email_value === "" || !isValidEmail(email_value)) {
      setErrorMessage("Enter valid email");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput();
    if (errorMessage) {
      setErrorMessage();
      return;
    }
    dispatch(setUserList([...userList, { ...formFields }]));
  };
  return (
    <div className="user-input-form-container">
      <form onSubmit={handleSubmit} id="form">
        <h1>Add a user</h1>
        <div className="input-control">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-control">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInputForm;
