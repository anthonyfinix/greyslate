import React from "react";
import axios from "../../../util/axios";
import LoadingGif from "../../loading/index";
import ButtonWrapper from "./buttonWrapper";
import "./buyNow.css";

const BuyNowWrapper = ({ gameId }) => {
  const [stores, setStore] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get(`/api/game/${gameId}/stores`).then((response) => {
      let promises = response.data.results.map((store) => {
        store.storeDetail = axios
          .get(`/api/stores/${store.store_id}`)
          .then((storeResponse) => storeResponse.data);
        return store;
      });
      let storeExpandedDetails = promises.map((store) => {
        return store.storeDetail;
      });
      Promise.all(storeExpandedDetails).then((storeDetails) => {
        storeDetails.forEach((storeDetail, i) => {
          promises[i].storeDetail = storeDetail;
        });
        setStore(promises);
        setLoading(false);
      });
    });
  }, []);
  return (
    <div className="buy-now-buttons-wrapper">
      {loading ? <LoadingGif /> : <ButtonWrapper stores={stores} />}
    </div>
  );
};

export default BuyNowWrapper;
