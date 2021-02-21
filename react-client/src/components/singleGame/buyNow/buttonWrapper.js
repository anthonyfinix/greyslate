import React from "react";
import BuyButton from './buyButton';

const ButtonWrapper = ({ stores }) => {
  return stores.map((store) => (
    <BuyButton
      key={store.id}
      name={store.storeDetail.name}
      slug={store.storeDetail.slug}
      url={store.url}
    />
  ));
};

export default ButtonWrapper;
