import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <hr style={{margin: '15px 0'}}/>
            <MyInput
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                placeholder = "Поиск..."
            />
            <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter,sort: selectedSort})} defaultValue='Сортировака по' option={[
                {value:'title',name: 'По названию'},
                {value:'body',name: 'По описанию'}
            ]}/>
        </div>
    );
};

export default PostFilter;