import { useState } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import "./profilCreate.scss";
import Banner from "../../components/banner/Banner";
import ImageUpload from "../../components/imageUpload/ImageUpload";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFloppyDisk,
  faCalendar,
  faVenusMars,
  faEnvelope,
  faPhone,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function ProfilCreate() {
  const [username, setusername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [telefon, setTelefon] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const resetForm = () => {
    setusername("");
    setBirthDate("");
    setGender("");
    setemail("");
    setAddress("");
    setTelefon("");
    setWebsite("");
    setProfileImage(null);
  };

  const [usernameError, setUsernameError] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!username.trim()) {
      setUsernameError(true);
      toast.error("Bitte gib einen Benutzernamen ein");
      return;
    }
    setUsernameError(false);

    const newUser = {
      id: crypto.randomUUID(),
      username,
      birthDate,
      gender,
      email,
      address,
      telefon,
      website,
      profileImage,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    resetForm();
    toast.success(`${newUser.username} wurde erfolgreich angelegt`);
  };

  return (
    <div className="page">
      <Banner title="Erstellen" subTitle="Lege einen neuen User an" icon={faUser} />
      <div className="formPage">
        <form className="form" onSubmit={handleSubmit} noValidate>
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
            placeholder={"E-Mail Adresse eingeben"}
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
export default ProfilCreate;
