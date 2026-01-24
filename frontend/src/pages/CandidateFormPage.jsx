import { useEffect, useState } from "react";
import { createCandidate, getCandidate, updateCandidate } from "../api/candidateApi";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CandidateFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    position: "",
    company: "",
    linkedinUrl: "",
    notes: "",
  });

  useEffect(() => {
    if (isEdit) {
      getCandidate(id).then((data) => setForm(data));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updateCandidate(id, form);
    } else {
      await createCandidate(form);
    }

    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <h1>{isEdit ? "Editează candidat" : "Adaugă candidat"}</h1>

      <form onSubmit={handleSubmit}>
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nume complet" />
        <input name="position" value={form.position} onChange={handleChange} placeholder="Poziție" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Companie" />
        <input name="linkedinUrl" value={form.linkedinUrl} onChange={handleChange} placeholder="LinkedIn URL" />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Note" />

        <button>Salvează</button>
      </form>
    </div>
  );
}
