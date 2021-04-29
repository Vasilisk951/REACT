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
                    autoFocus={true}
                />
                <Button variant="contained" color='primary' onClick={handleAreaSubmit} disabled={!areaValue}>{TODOItem.TODOValue ? 'edit' : 'add'}</Button>
            </form>
            <div className='todoList__components'>
                {TODOList.map((item, index) => (
                    <div className='todoList__item'>
                        <div>
                            <Button variant="contained" color='primary' onClick={() => editTODOListItem(index)}>&#128395;</Button>
                            <Button variant="contained" color='secondary' onClick={() => handleRemoveOpenModal(index)}>&#10060;</Button>
                        </div>
                        <div>{item}</div>
                    </div>
                ))}
            </div>
            <div className={modalClass.className}>
                <div className='modal__fon' onClick={handleCloseModal}></div>
                <div className='modal__content'>
                    <p>do you really want to delete the entry</p>
                    <Button variant="contained" color='primary' onClick={removeTODOItem}>yes</Button>
                    <Button variant="contained" color='secondary' onClick={handleCloseModal}>no</Button>
                </div>
            </div>
        </div>
    )
};

export default FormPageLayout;