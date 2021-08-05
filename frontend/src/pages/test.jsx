// import react
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
// import npm
// import style
import '@css/test.scoped.css';
// import assets
// import api
import { getChartDataURL } from '@api/api';
// import helper
import { useFetch } from '@pages/utils/common';
// import components

const Test = () => {
  const { data: products, isPending, error } = useFetch(getChartDataURL);
  let amount = useSelector((state) => state.bank);
  let dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  let list = '';
  if (isPending) list = <div>Loading</div>;
  if (error) list = <div>{error}</div>;
  if (products) {
    console.log(amount);
    list = products.slice(0, amount).map((i, index) => {
      return (
        <article key={index}>
          <h2>{i.item_name}</h2>
          <p>ID: {i.item_id}</p>
          <div>Count: {i.count}</div>
        </article>
      );
    });
  }
  return (
    <>
      <div className="App">
        <h1>{amount}</h1>
        <button onClick={() => depositMoney(1)}>Deposit</button>
        <button onClick={() => withdrawMoney(1)}>Withdraw</button>
      </div>
      <div>{list}</div>
    </>
  );
};

export default Test;
