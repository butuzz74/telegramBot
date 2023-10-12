import React, { useEffect, useState } from "react";
import MassageCard from "./MassageCard";
import massageService from "../../services/massage.service";

const MassageList = () => {
  const [massages, setMassages] = useState();
  
  useEffect(() => {
    const fetch = async () => {
      const data = await massageService.getAll();
      setMassages(data);
    };
    fetch();
  }, []);

  return (
    massages && <div className="massagelist">
      {massages.map((el) => (
        <MassageCard key={el._id} massage={el}/>
      ))}
    </div>
  );
};

export default MassageList;
