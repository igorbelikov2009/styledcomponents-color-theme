import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "../Container";
import { HeaderEl, ModeSwitcher, Title, Wrapper } from "./styles";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    // Проверь тему: если он светлая, то установи тёмную. Если не тёмная, то установи светлую
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Тему будем устанавливать на наш боди.
    // Обращаемся к документу, через документ обращаемся к body и говорим ему:
    // "Установи атрибут, назови его 'data-theme' и установи ему значение: 'theme' ".
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toogleTheme}>
            {theme === "light" ? <IoMoonOutline size={"14px"} /> : <IoMoon size={"14px"} />}
            <span style={{ marginLeft: "0.75rem" }}> {theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
