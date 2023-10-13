import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import MassageCard from "./MassageCard";
import massageService from "../../services/massage.service";
import { TelegramContext } from "../../context/context";

const MassageList = () => {
  const [massages, setMassages] = useState();
  const navigate = useNavigate();
  const {getCurrentMassage} = useContext(TelegramContext)
  const sendOrder = (massage) => {
    getCurrentMassage(massage);
    navigate("/sendform")
  }
  
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
        <MassageCard key={el._id} massage={el} onClick={sendOrder}/>
      ))}
    </div>
  );
};

export default MassageList;
