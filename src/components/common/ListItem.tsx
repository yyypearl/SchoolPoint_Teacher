import { theme } from "@/styles/theme";
import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import Image from "next/image";
import Category from "./Category";

const categoryClass = ["가정통신문", "준비물", "숙제", "기타"];

const ListItem = () => {
  const [todo, setTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <ListBox>
      <Description>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="내용을 입력해주세요"
        />
      </Description>
      <Checkbox />
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        data={categoryClass}
      />
      <DeadLine>
        <Image
          src="/assets/icons/ic_calender_orange.svg"
          alt="calendar"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
        />
      </DeadLine>
    </ListBox>
  );
};

export default ListItem;

const ListBox = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.b100};
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;
`;
const Description = styled.div`
  height: 100%;
  padding: 13px 16px;
  background: ${theme.colors.b80};
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  color: ${theme.colors.b700};
  ${(props) => props.theme.fonts.body2_m};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.b300};
    ${(props) => props.theme.fonts.body2_r};
  }
`;

const DeadLine = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
`;
