// import react
import { useState, useEffect } from 'react';
// import npm
// import style
import '@css/test.scoped.css';
// import assets
// import api
import { getProductDataURL, getChartDataURL } from '@api/api';
// import helper
import { useFetch } from '@pages/common/common';
// import components




const Test = () => {
  const { data: products, isPending, error } = useFetch(getChartDataURL);

  let list = '';
  if (isPending) list = <div>Loading</div>;
  if (error) list = <div>{error}</div>;
  if (products) {
    list = products.map((i, index) => {
      return (
        <article key={index}>
          <h2>{i.item_name}</h2>
          <p>ID: {i.item_id}</p>
          <div>Count: {i.count}</div>
        </article>
      );
    });
  }
  return <div>{list}</div>;
};

export default Test;
