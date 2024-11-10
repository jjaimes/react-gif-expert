import { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1 ) return;
    
        // setCategories( (categories) => [inputValue, ...categories] );
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
        
    }
    
    return (
        <form onSubmit={ handleSubmit}>
            <input 
                type="text" 
                placeholder="Buscar GIFs" 
                value = { inputValue }
                onChange={ (event) => onInputChange (event) }
                />
        </form>
    );
};

PropTypes.propTypes ={
    onNewCategory : PropTypes.node,
}
