import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import ProfilCard from "../../components/profilCard/ProfilCard";
import "./overview.scss";

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

const ITEMS_PER_PAGE = 6;

function Overview() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="page">
      <Banner title="128" subTitle="Angelegte User" />
      <div className="profilView-formPage">
        {currentUsers.map((user) => (
          <ProfilCard key={user.id} user={user} onClick={() => navigate(`/Edit/${user.id}`)} />
        ))}

        <div className="profilView-formPage__pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
            Zurück
          </button>

          <span>
            Seite {currentPage} von {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}
export default Overview;
