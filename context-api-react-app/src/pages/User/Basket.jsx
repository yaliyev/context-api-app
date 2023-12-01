import React, { useContext } from 'react'
import { Table } from 'antd'
import {Button} from 'antd'
import { BasketContext } from '../../services/context';



const Basket = () => {

  const { basket, setBasket } = useContext(BasketContext);

  
  function increaseQuantity(item){
    let resultBasketItemIndex = -1;
    const resultBasketItem = basket.find((basketItem,index)=>{
      resultBasketItemIndex = index;
      return basketItem.item.id == item.id
    });
    resultBasketItem.quantity++;
    const data = [...basket];

    data[resultBasketItemIndex] = resultBasketItem;
    setBasket(data);
    localStorage.setItem('context-app-basket', JSON.stringify(data));
    
  }
  function decreaseQuantity(item){
    let resultBasketItemIndex = -1;
    const resultBasketItem = basket.find((basketItem,index)=>{
      resultBasketItemIndex = index;
      return basketItem.item.id == item.id
    });
    if(resultBasketItem.quantity > 0){
      resultBasketItem.quantity--;
    }
    const data = [...basket];

    data[resultBasketItemIndex] = resultBasketItem;
    setBasket(data);
    localStorage.setItem('context-app-basket', JSON.stringify(data));
    
  }

  function removeBasketItem(item){
    let resultBasketItemIndex = -1;
    const resultBasketItem = basket.find((basketItem,index)=>{
      resultBasketItemIndex = index;
      return basketItem.item.id == item.id
    });
    
    const data = [...basket];

    data.splice(resultBasketItemIndex,1);
    setBasket(data);
    localStorage.setItem('context-app-basket', JSON.stringify(data));
    
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a,b) =>{return Number(a.id) - Number(b.id)},
      sortDirections: ['ascend','descend']
  
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
    onFilter: (value, record) => record.name[0].toLowerCase() == 'c'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title:'Actions',
      render: (text, record) => (
                <>
                    <Button onClick={()=>{increaseQuantity(record)}} style={{marginInline:'10px'}} type="primary">
                        Increase
                    </Button>
                    <Button onClick={()=>{decreaseQuantity(record)}} style={{marginInline:'10px'}} type="primary" danger>
                        Decrease
                    </Button>
                    <Button onClick={()=>{removeBasketItem(record)}} style={{marginInline:'10px'}} type="primary" danger>
                        Remove
                    </Button>
  
                </>
  
            )
    }
  
  ];

  const data = basket.map(basketItem => {
    return {
      ...basketItem.item,
      quantity:basketItem.quantity,
      key: basketItem.item.id
    }
  });
  


  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Basket