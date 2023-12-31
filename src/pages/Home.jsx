import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [appointment, setAppointment] = useState(null);
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3099/appointments ")
      .then((res) => {
        setAppointment(res.data);
        axios
          .get("http://localhost:3099/patients")
          .then((res) => {
            setPatients(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  if (appointment === null || patients === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <TableContainer
      style={{ marginTop: "50px", padding: "10px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#aaa" }}>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Process</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointment.map((appoint) => {
            const lookingForPatient = patients.find(
              (patient) => patient.id === appoint.patientId
            );

            return (
              <TableRow
                key={appoint.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appoint.date}
                </TableCell>
                <TableCell>{lookingForPatient.name}</TableCell>
                <TableCell>{lookingForPatient.surname}</TableCell>
                <TableCell>{lookingForPatient.phone}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
