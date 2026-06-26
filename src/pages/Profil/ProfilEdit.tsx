import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import toast from "react-hot-toast";
import "./profilEdit.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faUser,
  faCalendar,
  faVenusMars,
  faEnvelope,
  faPhone,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

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

  const [usernameError, setUsernameError] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!username.trim()) {
      setUsernameError(true);
      toast.error("Bitte gib einen Benutzernamen ein");
      return;
    }
    setUsernameError(false);

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

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      `Möchtest du ${username} wirklich löschen? Dies kann nicht rückgängig gemacht werden.`,
    );
    if (!isConfirmed) return;

    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = existingUsers.filter((u) => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success(`${username} wurde gelöscht`);
    navigate("/overview");
  };

  return (
    <div className="page">
      <Banner
        image={profileImage ?? undefined}
        username={username}
        imageAlt="profilbild"
        title="Bearbeiten"
        subTitle={` aktualisiere ${username}'s daten`}
        onDelete={handleDelete}
      />
      <div className="formPage">
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="Username*"
            type="text"
            value={username}
            placeholder={"Benutzername eingeben"}
            onChange={(value) => {
              setusername(value);
              if (usernameError) setUsernameError(false);
            }}
            error={usernameError}
            icon={faUser}
            iconColor="#4f7df3"
            iconBg="#e8edfc"
          />
          <Input
            label="Geburtsdatum"
            type="date"
            value={birthDate}
            onChange={setBirthDate}
            icon={faCalendar}
            iconColor="#1d9e75"
            iconBg="#e1f5ee"
          />
          <Select
            label="Geschlecht"
            value={gender}
            onChange={setGender}
            placeholder="Geschlecht auswählen"
            icon={faVenusMars}
            iconColor="#e0a020"
            iconBg="#fbf0d8"
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
            placeholder={"https://example.com"}
            onChange={setemail}
            icon={faEnvelope}
            iconColor="#4f7df3"
            iconBg="#e8edfc"
          />
          <Input
            label="Telefonnummer"
            type="tel"
            value={telefon}
            placeholder={"Telefonnummer eingeben"}
            onChange={setTelefon}
            icon={faPhone}
            iconColor="#9b7fe8"
            iconBg="#f0ecfd"
          />
          <Input
            label="Webseite"
            type="url"
            value={website}
            placeholder={"Webseiten eingeben"}
            onChange={setWebsite}
            icon={faGlobe}
            iconColor="#e85a9b"
            iconBg="#fce8f1"
          />
          <Input
            label="Post Adresse"
            type="text"
            value={address}
            placeholder={"Post Adresse eingeben"}
            onChange={setAddress}
            className="form__full-width"
            icon={faLocationDot}
            iconColor="#1d9e75"
            iconBg="#e1f5ee"
          />
          <div className="form__img-upload">
            <label className="Input__label">Profilbild</label>
            <ImageUpload value={profileImage} onChange={setProfileImage} />
          </div>
          <button className="form__btn" type="submit">
            <FontAwesomeIcon icon={faFloppyDisk} />
            Speichern
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfilEdit;
