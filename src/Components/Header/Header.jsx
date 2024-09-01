import { HomeFilled,  MenuOutlined, } from "@ant-design/icons";
import {   Button, Drawer, Menu, } from "antd";
import { useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppCart from "./AppCart";

const Header = () => {

    const navigate = useNavigate()

    const onMenuClick=(item)=>{
         navigate(`/${item.key}`)
    }


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    // const onMenuClicks = (e) => {
    //   console.log(e.key);
    //   // Handle the menu click events
    //   onClose(); // Close the drawer when a menu item is clicked
    // };

    return (
        // <div>
        //     <Menu 

        //     onClick={onMenuClick}
        //      mode="horizontal"
        //     items={[
                
        //         {
        //           label: <HomeFilled/> ,
        //           key:""
        //         },

        //           {
        //             label:"Man",
        //             key:"man",
        //             children: [
        //                 {
        //                   label: "Men's Shirts",
        //                   key: "mens-shirts",
        //                 },
        //                 {
        //                   label: "Men's Shoes",
        //                   key: "mens-shoes",
        //                 },
        //                 {
        //                   label: "Men's Watches",
        //                   key: "mens-watches",
        //                 },
        //               ],
        //           },

        //           {
        //             label:"Woman",
        //             key:"woman",
        //             children: [
        //                 {
        //                   label: "Women's Dresses",
        //                   key: "womens-dresses",
        //                 },
        //                 {
        //                   label: "Women's Shoes",
        //                   key: "womens-shoes",
        //                 },
        //                 {
        //                   label: "Women's Watches",
        //                   key: "womens-watches",
        //                 },
        //                 {
        //                   label: "Women's Bags",
        //                   key: "womens-bags",
        //                 },
        //                 {
        //                   label: "Women's Jewellery",
        //                   key: "womens-jewellery",
        //                 },
        //               ],
        //           },
        //           {
        //             label:"Fragrances",
        //             key:"fragrances"
        //           }
            
        //     ]} />

        //   <h1> Ant_Shop </h1>
        //    <ShoppingCartOutlined/>

        // </div>
        <div className=" m-6 border-s-2 border-e-2 border-black" >
        <div className="mobile-header m-6 ">
          <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
          <h1 className=" text-4xl font-bold text-orange-500 shadow-2xl shadow-red-400" >Ant_Shop</h1>
          <AppCart/>
        </div>
  
        <Drawer
          title="Menu"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <Menu
            onClick={onMenuClick}
            mode="inline"
            items={[
              {
                label: <HomeFilled />,
                key: "",
              },
              {
                label: "Man",
                key: "man",
                children: [
                  {
                    label: "Men's Shirts",
                    key: "mens-shirts",
                  },
                  {
                    label: "Men's Shoes",
                    key: "mens-shoes",
                  },
                  {
                    label: "Men's Watches",
                    key: "mens-watches",
                  },
                ],
              },
              {
                label: "Woman",
                key: "woman",
                children: [
                  {
                    label: "Women's Dresses",
                    key: "womens-dresses",
                  },
                  {
                    label: "Women's Shoes",
                    key: "womens-shoes",
                  },
                  {
                    label: "Women's Watches",
                    key: "womens-watches",
                  },
                  {
                    label: "Women's Bags",
                    key: "womens-bags",
                  },
                  {
                    label: "Women's Jewellery",
                    key: "womens-jewellery",
                  },
                ],
              },
              {
                label: "Fragrances",
                key: "fragrances",
              },
            ]}
          />
        </Drawer>
  
       
      <div className=" md:block hidden" >
      <div  className="desktop-header  flex items-center justify-between max-w-6xl mx-auto mt-3 ">
          <Menu
            className=" text-2xl font-bold p-3"
            onClick={onMenuClick}
            mode="horizontal"
            items={[
              {
                label: "Home",
                key: "",
              },
              {
                label: "Man",
                key: "man",
                children: [
                  {
                    label: "Men's Shirts",
                    key: "mens-shirts",
                  },
                  {
                    label: "Men's Shoes",
                    key: "mens-shoes",
                  },
                  {
                    label: "Men's Watches",
                    key: "mens-watches",
                  },
                ],
              },
              {
                label: "Woman",
                key: "woman",
                children: [
                  {
                    label: "Women's Dresses",
                    key: "womens-dresses",
                  },
                  {
                    label: "Women's Shoes",
                    key: "womens-shoes",
                  },
                  {
                    label: "Women's Watches",
                    key: "womens-watches",
                  },
                  {
                    label: "Women's Bags",
                    key: "womens-bags",
                  },
                  {
                    label: "Women's Jewellery",
                    key: "womens-jewellery",
                  },
                ],
              },
              {
                label: "Fragrances",
                key: "fragrances",
              },
            ]}
          />
              <h1 className=" text-4xl font-bold text-orange-500 shadow-2xl shadow-red-400" >Ant_Shop</h1>
                <AppCart/>
        </div>
      </div>
 
      </div>
    );
};

export default Header;