import { useEffect } from "react";
import { addToCart,getAllProduct,getProductsByCategory } from "../../API";
import { useState } from "react";
import { Badge,  Button,  Card, Image, List, message, Rate, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";


const Products = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState([]) 

    const param = useParams()

    // useEffect(()=>{
    //     setLoading(true)
    //     ( param?.categoryId
    //       ? getProductsByCategory(param.categoryId)
    //       : getAllProduct()
    //     )
    //     .then(res=>{
    //       setItem(res.products)
    //       setLoading(false)
    //     })
    // },[param])

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

    if(loading){
      return <Spin className=" flex items-center justify-center mt-80 text-7xl" ></Spin>
    }

    return (
        <div  className=" m-6" >
            <List
            
            grid={{  gutter: [17, 16], 
    xs: 1,  // 1 column on extra small devices (mobile)
    sm: 2,  // 2 columns on small devices (tablets)
    md: 2,  // 2 columns on medium devices (small desktops)
    lg: 3,  // 3 columns on large devices (desktops)
    xl: 3  }}  
            
            renderItem={(product,index)=>{
                return  <Badge.Ribbon className=" my-4 font-bold p-2 m-1 bg-pink-600" text={product.discountPercentage} > <Card 
                title={product.title} 
                cover={<Image className="thumbnail" src={product.thumbnail} />}
                key={index} 
                
                    actions={[
                    <Rate allowHalf disabled value={product.rating} key={index} ></Rate>, 
                         <AddToCartButton key={index} item={product} ></AddToCartButton>
                  ]}
                >



                    <Card.Meta title={
                        <Typography.Paragraph className=" text-lg font-bold" > Price: ${product.price} 
                          <Typography.Text delete type="danger" className=" mx-3 font-semibold" > Discount { parseFloat( product.price + product.price * product.discountPercentage/100).toFixed(2)} </Typography.Text>
                        </Typography.Paragraph>

                       

                    } 
                    description={
                        <Typography.Paragraph
                          ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                        >
                          {product.description}
                        </Typography.Paragraph>
                      }
                    
                    >    </Card.Meta>
                </Card>
                </Badge.Ribbon> 
            }} dataSource={item} ></List> 
        </div>
    );
};


function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id)
   .then(() => {
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
  );}


export default Products;