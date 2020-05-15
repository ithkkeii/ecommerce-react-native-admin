import React, { useContext } from "react";
import { View, Text } from "react-native";
import * as Feather from "react-native-vector-icons/Feather";
import * as AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import CartIconWithBadge from "./CartIconWithBadge";

const InteractiveButton = (props) => {
  const { navigate } = useNavigation();

  return (
    <SInteractiveButton>
      <Feather.default name="search" size={25} />
      <CartIconWithBadge />
      <AntDesign.default
        name="home"
        size={25}
        onPress={() => navigate("Home")}
      />
    </SInteractiveButton>
  );
};

const SInteractiveButton = styled.View`
  flex-direction: row;
  width: 150px;
  justify-content: space-around;
`;

export default InteractiveButton;
