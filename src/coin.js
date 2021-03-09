import React from "react";

export const CoinsData = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="crpto" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div>
          <p>${price}</p>
          <p>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p>{priceChange.toFixed(2)}%</p>
          ) : (
            <p>{priceChange.toFixed()}%</p>
          )}
          <p> Mkt Cap:${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
