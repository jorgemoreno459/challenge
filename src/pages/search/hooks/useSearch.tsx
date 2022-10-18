import {useState} from 'react';

import {useNavigate} from "react-router-dom";

import logo from '../../../assets/imgs/logo.png';
import searchLogo from '../../../assets/imgs/search.png';


const useSearch = () => {
    const navigation = useNavigate();
    const [text, setText] = useState('')
    const search = (text: string, e:any) => {
        e.preventDefault();
        if(text === '') return;
        navigation(`/items/search/${text}`,{state:{search:text}});
    }

    const clearStates = () => {
        setText('');
        navigation(`/`);
    }

    return{
        text,
        setText,
        search,
        logo,
        searchLogo,
        clearStates
    }
}

export default useSearch;