import Wrapper from "../Wrapper/Wrapper";
import "../Login/login.css";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
export default function Login() {
  const [fullName, setFullName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [APIKey, setAPIKey] = useState("");

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: fullName,
      team: teamName,
      key: APIKey,
      security_code: securityCode,
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(usersCollectionRef);
      // data.docs.map((doc) => {
      //   console.log(doc._document.data.value.mapValue.fields);
      // });
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <div className="flex-col border" style={{ gap: "10rem" }}>
        <h1 className="fs-700 title fc-white extrabold">{">Login"}</h1>
        <div className="flex-col input-field box" style={{ gap: "1rem" }}>
          <fieldset>
            <input
              type="text"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
            <legend className="fs-200 fc-white">Full Name</legend>
          </fieldset>
          <fieldset>
            <input
              type="text"
              onChange={(event) => {
                setTeamName(event.target.value);
              }}
            />
            <legend className="fs-200 fc-white">Team Name</legend>
          </fieldset>
          <fieldset>
            <input
              type="text"
              onChange={(event) => {
                setSecurityCode(event.target.value);
              }}
            />
            <legend className="fs-200 fc-white">Security Code</legend>
          </fieldset>
          <fieldset>
            <input
              type="text"
              onChange={(event) => {
                setAPIKey(event.target.value);
              }}
            />
            <legend className="fs-200 fc-white">API Key</legend>
          </fieldset>
          <button
            className="button fs-100 extrabold fc-white"
            style={{ padding: "0.6rem 3rem" }}
            onClick={createUser}
          >
            Login
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
