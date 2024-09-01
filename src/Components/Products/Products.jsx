import { useEffect } from "react";
import { addToCart, getAllProduct, getProductsByCategory } from "../../API";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Select,
  Spin,
  Typography,
} from "antd";
import { useParams } from "react-router-dom";

const Products = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const param = useParams();

  useEffect(() => {
    setLoading(true);
    (param?.categoryId
      ? getProductsByCategory(param.categoryId)
      : getAllProduct()
    ).then((res) => {
      setItem(res.products);
      setLoading(false);
    });
  }, [param]);

  if (loading) {
    return (
      <Spin className=" flex items-center justify-center mt-80 text-7xl"></Spin>
    );
  }


  const getSortedItems = () => {
    const sortedItems = [...item];
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title.toLowerCase();
      const bLowerCaseTitle = b.title.toLowerCase();

      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };

  return (
    <div className=" m-6 max-w-7xl mx-auto">


         <div className=" flex items-center justify-center gap-4 " >
        <Typography.Text style={{fontFamily:"sans-serif", fontSize:30,}} > View Items Sorted By ❤ </Typography.Text>
        <Select
          className=" w-60 text-center"
          onChange={(value) => {
            setSortOrder(value);
          }}
          defaultValue={"az"}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
          
        ></Select> 
      </div>



      <List 

        grid={{
          gutter: [17, 16],
          xs: 1, // 1 column on extra small devices (mobile)
          sm: 2, // 2 columns on small devices (tablets)
          md: 2, // 2 columns on medium devices (small desktops)
          lg: 3, // 3 columns on large devices (desktops)
          xl: 3,
        }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon
              className=" my-4 font-bold p-2 m-1 bg-pink-600"
              text={`${product.discountPercentage}% Off`}
            >
              {" "}
              <Card
               className=" m-3"
                title={product.title}
                cover={<Image className="thumbnail" src={product.thumbnail} />}
                key={index}
                actions={[
                  <Rate
                    allowHalf
                    disabled
                    value={product.rating}
                    key={index}
                  ></Rate>,
                  <AddToCartButton
                    key={index}
                    item={product}
                  ></AddToCartButton>,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph className=" text-lg font-bold">
                      {" "}
                      Price: ${product.price}
                      <Typography.Text
                        delete
                        type="danger"
                        className=" mx-3 font-semibold"
                      >
                        {" "}
                        Discount{" "}
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}{" "}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                >
                  {" "}
                </Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={getSortedItems()}
      ></List>
    </div>
  );
};

function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then(() => {
      message.success(`${item.title} has been added to cart!`);
      setLoading(false);
    });
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
}

export default Products;
