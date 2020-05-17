import React, { useContext } from "react";
import styled from "styled-components/native";
import { ProductsContext } from "../../context/productsProvider";
import { View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import ProductCard from "../product/ProductCard";
import SkeletonProductCard from "../product/SkeletonProductCard";

const ListProduct = (props) => {
  const { products, onRemoveProduct } = useContext(ProductsContext);

  let skeletons = [];
  for (let index = 0; index < 7; index++) {
    skeletons.push(<SkeletonProductCard key={index} />);
  }

  if (products.length === 0) return <View>{skeletons}</View>;

  return (
    <SListProduct>
      <SwipeListView
        keyExtractor={(item) => item.productId}
        data={products}
        renderItem={(data) => <ProductCard product={data.item} />}
        renderHiddenItem={(data, rowMap) => (
          <SHiddenItem>
            <SEdit onPress={() => {}}>
              <SText>Edit</SText>
            </SEdit>
            <SRemove
              onPress={() => {
                onRemoveProduct(data.item.productId);
              }}
            >
              <SText>Remove</SText>
            </SRemove>
          </SHiddenItem>
        )}
        leftOpenValue={80}
        rightOpenValue={-80}
        stopLeftSwipe={80}
        stopRightSwipe={-80}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
            rowMap[rowKey] && rowMap[rowKey].closeRow();
          }, 2000);
        }}
        style={{ marginHorizontal: 10 }}
      />
    </SListProduct>
  );
};

const SListProduct = styled.View`
  height: 100%;
`;

const SHiddenItem = styled.View`
  flex-direction: row;
  height: 80px;
  margin: 5px;
  border-radius: 5px;
`;

const SEdit = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.primaryBlue};
  height: 80px;
  width: 80px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const SRemove = styled.TouchableOpacity`
  margin-left: auto;
  background-color: ${({ theme }) => theme.color.primaryRed};
  height: 80px;
  width: 80px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const SText = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  color: white;
  font-weight: bold;
`;

export default ListProduct;
