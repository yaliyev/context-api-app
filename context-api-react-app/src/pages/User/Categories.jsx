import React, { useContext, useEffect } from 'react'
import { Table } from 'antd'
import {Button} from 'antd'
import { CategoriesContext } from '../../services/context'
import { getCategories } from '../../services/api/categories_request'
const Categories = () => {

  const { categories, setCategories } = useContext(CategoriesContext);
  useEffect(() => {
    async function loadData() {
      let data = await getCategories();
      setCategories(data);
    }
    loadData();

  }, [])


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
      filters:[
        {
            text:'Categories starting with C letter',
            value: ''
        }
    ],
    onFilter: (value, record) => record.name[0].toLowerCase() == 'c'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title:'Actions',
      render: (text, record) => (
                <>
                    <Button type="primary">
                        Basket
                    </Button>

                </>

            )
    }

  ];
  const data = categories.map(category => {
    return {
      ...category,
      key: category.id
    }
  });

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Categories