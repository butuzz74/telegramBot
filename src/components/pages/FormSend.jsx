import React, { useContext, useEffect, useState } from "react";
import TextField from "../form/TextField";
import Button from "../common/Button";
import { TelegramContext } from "../../context/context";
import useTelegram from "../../hooks/useTelegram";
import orderService from "../../services/order.service";

const FormSend = () => {
  const { massage } = useContext(TelegramContext);
  const inisialState = {
    nick: "",
    phone: "",
  };
  const [data, setData] = useState(inisialState);

  const onChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const newData = { ...data, serviceId: massage._id, massage: massage.type };
    try {
      await orderService.create(newData);
      // useTelegram.tg.sendData(JSON.stringify(newData));
      useTelegram.tg.answerWebAppQuery()
    } catch (error) {
      console.log(error);
    }
    setData(inisialState);
  };
  // useEffect(() => {
  //   if (data.nick.length && data.phone.length) {
  //     useTelegram.tg.MainButton.show();
  //   }
  // }, [data.nick.length, data.phone.length]);

  return (
    <div style={{ padding: "2rem" }}>
      <h3
        style={{ textAlign: "center", marginBottom: "1rem", color: "#2F4F4F	" }}
      >
        Привет {useTelegram.user}! Вы выбрали {massage.type.toLowerCase()}.
        Оставьте пожалуйста Ваши координаты для связи! Спасибо!{" "}
      </h3>
      <form onSubmit={onSubmit}>
        <TextField
          label={"Ваше имя"}
          name="nick"
          value={data.nick}
          type={"text"}
          id={"nick"}
          onChange={onChange}
        />
        <TextField
          label={"Ваш телефон для связи"}
          name="phone"
          value={data.phone}
          type={"text"}
          id={"phone"}
          onChange={onChange}
        />
        <Button type={"submit"}>Отправить</Button>
      </form>
    </div>
  );
};

export default FormSend;
