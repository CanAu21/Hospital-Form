import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPatients = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [patients, setPatients] = useState("null");

  useEffect(() => {
    axios
      .get("http://localhost:3099/patients ")
      .then((res) => setPatients(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || surname === "" || phone === "") {
      alert("ERROR");
      return;
    }

    if (phone.length !== 11) {
      alert("phone number must be 11 digits");
      return;
    }

    const hasNumber = patients.find((patient) => patient.phone === phone);
    if (hasNumber !== undefined) {
      alert("A patient is registered with this number.");
    }

    const newPatient = {
      id: String(new Date().getTime()),
      name: name,
      surname: surname,
      phone: phone,
      operationId: [],
    };
    axios
      .post("http://localhost:3099/patients", newPatient)
      .then((res) => {
        navigate("/patients")
      })
      .catch((err) => console.log(err));
  };

  if (patients === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          style={{ width: "50%" }}
          id="outlined-basic"
          label="Patient Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <TextField
          style={{ width: "50%" }}
          id="outlined-basic"
          label="Patient Surname"
          variant="outlined"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          style={{ width: "50%" }}
          id="outlined-basic"
          label="Patient Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button type="submit" variant="contained">
          Add Patient
        </Button>
      </div>
    </form>
  );
};

export default AddPatients;
