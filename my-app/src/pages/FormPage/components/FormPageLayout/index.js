import React from 'react';
import { Button, TextField } from '@material-ui/core';

import './index.css';


const FormPageLayout = ({
    areaValue,
    TODOItem,
    handleAreaChange,
    handleAreaSubmit,
    TODOList,
    removeTODOItem,
    editTODOListItem,
    modalClass,
    handleRemoveOpenModal,
    handleCloseModal }) => {

    return (
        <div className='todoList'>
            <form className='todoList__form'>
                <TextField
                    id="outlined-multiline-static"
                    label="Todo List"
                    multiline
                    rows={4}
                    value={areaValue}
                    onChange={(event) => handleAreaChange(event)}
                    variant="outlined"
                />
                <Button variant="contained" color='primary' onClick={(event) => handleAreaSubmit(event)}>{TODOItem.TODOValue ? 'edit' : 'add'}</Button>
            </form>
            <div className='todoList__components'>
                {TODOList.map((item, index) => (
                    <div className='todoList__item'>
                        <div>
                            <Button variant="contained" color='primary' onClick={() => editTODOListItem(index)}>edit</Button>
                            <Button variant="contained" color='secondary' onClick={() => handleRemoveOpenModal(index)}>remove</Button>
                        </div>
                        <div>{item}</div>
                    </div>
                ))}
            </div>
            <div className={modalClass.className}>
                <div className='modal__fon'></div>
                <div className='modal__content'>
                    <p>do you really want to delete the entry</p>
                    <Button variant="contained" color='primary' onClick={removeTODOItem}>yes</Button>
                    <Button variant="contained" color='secondary' onClick={() => handleCloseModal()}>no</Button>
                </div>
            </div>
        </div>
    )
};

export default FormPageLayout;