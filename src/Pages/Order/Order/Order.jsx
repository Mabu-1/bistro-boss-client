import  { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, Box } from '@mui/material';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/Usemenu';
import OrderTab from '../OrderTab/Ordertab';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const handleChange = (_, newValue) => {
        setTabIndex(newValue);
    };

    const desserts = menu.filter((item) => item.category === 'dessert');
    const soup = menu.filter((item) => item.category === 'soup');
    const salad = menu.filter((item) => item.category === 'salad');
    const pizza = menu.filter((item) => item.category === 'pizza');
    const drinks = menu.filter((item) => item.category === 'drinks');

    return (
        <div className='mb-10'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" />
            <Box className="my-10 ">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    centered
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#BB8506', 
                        },
                        '& .Mui-selected': {
                            color: '#BB8506', 
                        },
                    }}
                >
                    <Tab label="Salad" />
                    <Tab label="Pizza" />
                    <Tab label="Soup" />
                    <Tab label="Dessert" />
                    <Tab label="Drinks" />
                </Tabs>
            </Box>
          
            {tabIndex === 0 && <OrderTab items={salad} />}
            {tabIndex === 1 && <OrderTab items={pizza} />}
            {tabIndex === 2 && <OrderTab items={soup} />}
            {tabIndex === 3 && <OrderTab items={desserts} />}
            {tabIndex === 4 && <OrderTab items={drinks} />}
        </div>
    );
};

export default Order;
