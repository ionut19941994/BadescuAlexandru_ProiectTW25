import { useEffect, useState } from "react";
import { getCandidates, deleteCandidate } from "../api/candidateApi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CandidatesListPage() {
  const [candidates, setCandidates] = useState([]);

  const load = async () => {
    const data = await getCandidates();
    setCandidates(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteCandidate(id);
    load();
  };

  return (
    <div>
      <Navbar />
      <h1>Lista candidaților</h1>
      <Link to="/candidates/new">Adaugă candidat</Link>

      <ul>
        {candidates.map((c) => (
          <li key={c.id}>
            {c.fullName} — {c.position} ({c.company})
            <Link to={`/candidates/${c.id}`}>Editează</Link>
            <button onClick={() => handleDelete(c.id)}>Șterge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
