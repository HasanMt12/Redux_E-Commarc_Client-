import { addProduct } from "../../actions/productAction";
import { toast } from "react-hot-toast";
const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://server-nine-lovat.vercel.app/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...product,
        })
      );
      toast.success("Product added successfully")
    }
  };
};

export default addProductData;
