import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import toast from "react-hot-toast";
import "./profilEdit.scss";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: string;
  username: string;
  birthDate: string;
  gender: string;
  email: string;
  address: string;
  telefon: string;
  website: string;
  profileImage: string | null;
}

function ProfilEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [telefon, setTelefon] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userToEdit = existingUsers.find((u) => u.id === id);

    if (userToEdit) {
      setusername(userToEdit.username);
      setBirthDate(userToEdit.birthDate);
      setGender(userToEdit.gender);
      setemail(userToEdit.email);
      setAddress(userToEdit.address);
      setTelefon(userToEdit.telefon);
      setWebsite(userToEdit.website);
      setProfileImage(userToEdit.profileImage);
    } else {
      toast.error("User nicht gefunden");
      navigate("/overview");
    }
  }, [id, navigate]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const updatedUsers = existingUsers.map((u) =>
      u.id === id
        ? { ...u, username, birthDate, gender, email, address, telefon, website, profileImage }
        : u,
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success(`${username} wurde erfolgreich aktualisiert`);
    navigate("/overview");
  };

  return (
    <div className="page">
      <Banner title="Bearbeiten" subTitle="aktualisiere User daten" />
      <div className="edit-formPage">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Username"
            type="text"
            value={username}
            placeholder={"Benutzername eingeben"}
            onChange={setusername}
          />
          <Input label="Geburtsdatum" type="date" value={birthDate} onChange={setBirthDate} />
          <Select
            label="Geschlecht"
            value={gender}
            onChange={setGender}
            placeholder="Geschlecht auswählen"
            options={[
              { value: "Divers", label: "Divers" },
              { value: "Weiblich", label: "Weiblich" },
              { value: "Männlich", label: "Männlich" },
            ]}
          />
          <Input
            label="Email Adresse"
            type="email"
            value={email}
            placeholder={"E-Mail Adresse eingeben"}
            onChange={setemail}
          />
          <Input
            label="Telefonnummer"
            type="tel"
            value={telefon}
            placeholder={"Telefonnummer eingeben"}
            onChange={setTelefon}
          />
          <Input
            label="Webseite"
            type="url"
            value={website}
            placeholder={"Webseiten eingeben"}
            onChange={setWebsite}
          />
          <Input
            label="Post Adresse"
            type="text"
            value={address}
            placeholder={"Post Adresse eingeben"}
            onChange={setAddress}
            className="form__full-width"
          />
          <div className="form__img-upload">
            <label className="Input__label">Profilbild</label>
            <ImageUpload value={profileImage} onChange={setProfileImage} />
          </div>
          <button className="form__btn" type="submit">
            Speichern
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfilEdit;
