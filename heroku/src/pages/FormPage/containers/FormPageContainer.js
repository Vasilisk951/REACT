import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormPageLayout from '../components/FormPageLayout';
import {
    HANDLE_AREA_CHANGE,
    HANDLE_AREA_SUBMIT,
    REMOVE_TODO_ITEM,
    HANDLE_REMOVE_OPEN_MODAL,
    HANDLE_CLOSE_MODAL,
    EDIT_TODO_LIST_ITEM
} from '../actions'

const FormPageContainer = () => {

    const dispatch = useDispatch();
    const TODOState = useSelector((state) => state.formPageContainerReducer)

    const handleAreaChange = useCallback((event) => {
        dispatch(HANDLE_AREA_CHANGE(event));
    }, [dispatch]);

    const handleAreaSubmit = useCallback(() => {
        dispatch(HANDLE_AREA_SUBMIT())
    }, [dispatch]);

    const handleRemoveOpenModal = useCallback((index) => {
        dispatch(HANDLE_REMOVE_OPEN_MODAL(index))
    }, [dispatch]);

    const handleCloseModal = useCallback(() => {
        dispatch(HANDLE_CLOSE_MODAL())
    }, [dispatch]);

    const handleRemoveTODOListItem = useCallback(() => {
        dispatch(REMOVE_TODO_ITEM())
    }, [dispatch]);

    const handleEditTODOListItem = useCallback((index) => {
        dispatch(EDIT_TODO_LIST_ITEM(index))
    }, [dispatch]);


    return (
        <FormPageLayout
            areaValue={TODOState.initialState.areaValue}
            TODOItem={TODOState.initialState.TODOItem}
            handleAreaChange={handleAreaChange}
            handleAreaSubmit={handleAreaSubmit}
            TODOList={TODOState.initialState.TODOList}
            removeTODOItem={handleRemoveTODOListItem}
            editTODOListItem={handleEditTODOListItem}
            modalClass={TODOState.initialState.TODORemove}
            handleRemoveOpenModal={handleRemoveOpenModal}
            handleCloseModal={handleCloseModal}
        />
    )








    /* const [areaValue, setAreaValue] = useState('');
    const [TODOList, setTODOList] = useState([]);
    const [TODOItem, setTODOItem] = useState({
        TODOValue: '',
        index: '',
    })
    const [TODORemove, setTODORemove] = useState({
        className: 'modal',
        index: NaN
    }) */

    /* const handleAreaChange = useCallback((event) => {
       setAreaValue(() => {
           return event.target.value
       })
   }); */

    /* const resetAreaValue = useCallback(() => {
        setAreaValue(() => {
            return '';
        })
    }); */

    /* const handleAreaSubmit = useCallback((event) => {
        event.preventDefault();
        if (TODOItem.TODOValue) {
            setTODOList((state) => {
                const stateCopy = [...state];
                stateCopy[TODOItem.index] = areaValue;
                console.log(stateCopy)
                return stateCopy;
            })
            setTODOItem(() => {
                TODOItem.TODOValue = '';
                TODOItem.index = '';
                return TODOItem
            })
            resetAreaValue();
        } else {
            setTODOList((state) => {
                if (areaValue !== '') {
                    const stateCopy = [...state];
                    stateCopy.push(areaValue);
                    resetAreaValue();
                    return stateCopy;
                }
                return state;
            })
        }
    }, []); */

    /* const handleRemoveOpenModal = useCallback((index) => {
        setTODORemove((state) => {
            const stateCopy = state;
            stateCopy.className = 'modal modal-active'
            stateCopy.index = index;
            return { ...stateCopy }
        })
    }, [TODORemove])

    const handleCloseModal = useCallback(() => {
        setTODORemove((state) => {
            const stateCopy = state;
            stateCopy.className = 'modal';
            stateCopy.index = NaN
            return { ...stateCopy }
        })
    }, [TODORemove]);

    const handleRemoveTODOListItem = useCallback(() => {
        setTODOList((state) => {
            const stateCopy = [...state];
            stateCopy.splice(TODORemove.index, 1);
            return [...stateCopy];
        })
        handleCloseModal();
    }, [TODORemove]);

    const handleEditTODOListItem = useCallback((index) => {
        setTODOItem((state) => {
            const stateCopy = state;
            stateCopy.TODOValue = TODOList[index];
            stateCopy.index = index;
            return stateCopy;
        })
        setAreaValue(() => {
            return TODOItem.TODOValue;
        })
    });
 */

    /* return (
        <FormPageLayout
            areaValue={TODOState.areaValue}
            TODOItem={TODOState.TODOItem}
            handleAreaChange={handleAreaChange}
            handleAreaSubmit={handleAreaSubmit}
            TODOList={TODOState.TODOList}
            //removeTODOItem={handleRemoveTODOListItem}
            //editTODOListItem={handleEditTODOListItem}
            modalClass={TODOState.TODORemove}
        handleRemoveOpenModal={handleRemoveOpenModal}
        handleCloseModal={handleCloseModal}
        />
    )
 */
};

export default FormPageContainer;