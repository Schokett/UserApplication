import { useState } from "react";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import "./profilcreate.scss";
import logo from "../../assets/logo.png";

function ProfilCreate() {
  const [username, setusername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [telefon, setTelefon] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newUser = {
      username,
      birthDate,
      gender,
      email,
      address,
      telefon,
      website,
    };

    console.log(newUser);
  };

  return (
    <div className="page">
      <div className="page-banner">
        <img src={logo} alt="test" style={{ width: "200px" }} />
        <div className="page-banner__text-wrapper">
          <span className="page-banner__title">Benutzerprofil</span>
          <span className="page-banner__sub-title">Erstellen Sie ein Benutzerkonto</span>
        </div>
      </div>
      <div className="create-form">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Username"
            type="text"
            value={username}
            placeholder={"Benutzername eingeben"}
            onChange={setusername}
          />
          <Input label="Geburtsdatum" type="date" value={birthDate} onChange={setBirthDate} />
          {/* hier selectFeld */}
          <Select
            label="Geschlecht"
            value={gender}
            onChange={setGender}
            placeholder="Geschlecht auswählen"
            options={[
              { value: "divers", label: "Divers" },
              { value: "female", label: "Weiblich" },
              { value: "male", label: "Männlich" },
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
          <button className="form__btn" type="submit">
            Speichern
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfilCreate;
