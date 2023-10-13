import React, { useContext, useState } from "react";
import TextField from "../form/TextField";
import Button from "../common/Button";
import { TelegramContext } from "../../context/context";
import useTelegram from "../../hooks/useTelegram";

const FormSend = () => {
  const { massage } = useContext(TelegramContext);
  const inisialState = {
    name: "",
    surname: "",
    phone: "",
    male: "",
  };
  const [data, setData] = useState(inisialState);

  const onChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(inisialState);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ textAlign: "center" }}>
        Привет {useTelegram.user}! Вы выбрали {massage.toLowerCase()}. Спасибо!{" "}
      </h3>
      <form onSubmit={onSubmit}>
        <TextField
          label={"Ваше имя"}
          name="name"
          value={data.name}
          type={"text"}
          id={"name"}
          onChange={onChange}
        />
        <TextField
          label={"Ваша фамилия"}
          name="surname"
          value={data.surname}
          type={"text"}
          id={"surname"}
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
