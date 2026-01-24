import { useState } from "react";
import { getLinkedInUrl, importLinkedInProfile } from "../api/linkedinApi";
import Navbar from "../components/Navbar";

export default function ImportLinkedInPage() {
  const [url, setUrl] = useState("");
  const [profile, setProfile] = useState(null);

  const handleGetUrl = async () => {
    const data = await getLinkedInUrl();
    setUrl(data.url);
  };

  const handleImport = async () => {
    const data = await importLinkedInProfile();
    setProfile(data);
  };

  return (
    <div>
      <Navbar />
      <h1>Import LinkedIn</h1>

      <button onClick={handleGetUrl}>Obține URL LinkedIn</button>
      {url && <p>URL mock: {url}</p>}

      <button onClick={handleImport}>Importă profil</button>
      {profile && (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
    </div>
  );
}
