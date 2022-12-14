import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../Wrapper/Wrapper";
import { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [classNames, setClassName] = useState([]);
  const [isLoading, setIsLoading] = useState("Submit");
  const [input, setInput] = useState({
    name: "",
    team_name: "",
    api_key: "",
    security_code: "",
  });
  function handleSubmit() {
    setIsLoading("");

    Axios.post(
      "http://ec2-3-6-65-227.ap-south-1.compute.amazonaws.com:8080/api/login",
      {
        name: `${input.name}`,
        team_name: `${input.team_name}`,
        api_key: `${input.api_key}`,
        security_code: `${input.security_code}`,
      }
    )
      .then(({ data: { validArray, isLoggedIn, message }, status }) => {
        setClassName(validArray);
        if (status === 200 && isLoggedIn) {
          setIsLoading("Submitted");
          toast.success(message);
        } else {
          setIsLoading("Retry");
          toast.error(message);
        }
      })
      .catch((error) => {
        return error;
      });
  }

  function handleChange({ target: { name, value } }) {
    setInput((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <Wrapper>
      <div className="flex-col borders" style={{ gap: "2rem" }}>
        <h1 className="fs-800 title fc-white extrabold">{">Login"}</h1>
        <div className="login flex-col">
          <div className="form-floating">
            <input
              type="text"
              id="floatingName"
              onChange={handleChange}
              className={`form-control inputFeilds ${classNames[0]}`}
              placeholder="Vinay"
              name="name"
              value={input.name}
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              id="floatingInput"
              onChange={handleChange}
              className={`form-control inputFeilds ${classNames[1]}`}
              placeholder="Cute Capybara"
              name="team_name"
              value={input.team_name}
            />
            <label htmlFor="floatingInput">Team Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              id="floatingAPI"
              onChange={handleChange}
              className={`form-control inputFeilds ${classNames[2]}`}
              placeholder="xxxxxxxxxxxx"
              name="api_key"
              value={input.api_key}
            />
            <label htmlFor="floatingAPI">API Key</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              id="floatingCode"
              onChange={handleChange}
              className={`form-control inputFeilds ${classNames[3]}`}
              placeholder="234209"
              name="security_code"
              value={input.security_code}
            />
            <label htmlFor="floatingCode">Security Code</label>
          </div>
          <button
            className="button fs-50 extrabold fc-white"
            onClick={handleSubmit}
          >
            {isLoading === "" ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              isLoading
            )}
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Wrapper>
  );
}
