import { useEffect, useState } from "react";
function Digimon() {
  let [nama, setNama] = useState("Dellila");
  let [digimon, setDigimon] = useState([]);
  console.log(digimon);

  useEffect(() => {
    console.log("perubahan");
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((result) => setDigimon(result));
  }, []);
  return (
    <div>
      <h2>{nama}</h2>
      <input type="nama" onChange={(e) => setNama(e.target.value)} />
      {digimon.map((item) => (
        <div>
          <img src={item.img} alt="" width="100" />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}
export default Digimon;
