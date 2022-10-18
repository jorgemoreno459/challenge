import React from "react";
import { Link } from 'react-router-dom';
import '../assets/sass/search/search.scss';

interface Search {
    search: any;
    text: string;
    setText: any;
    logo:any;
    logoSearch:any;
    clearStates:any;
}
const SearchComponent = (
    {
        search,
        text,
        setText,
        logoSearch,
        logo,
        clearStates
    } : Search) => {

    return(
        <div data-testid={'search'} className={'search'}>
            <div className={'wrapper'}>
                <Link
                    data-testid={'logo'}
                    onClick={clearStates}
                    className={'logo'} to='/'
                >
                    <img src={logo} alt={'MercadoLibre'} />
                </Link>
                <form onSubmit={(e) => search(text,e)} className={'searchForm'}>
                    <input
                        data-testid={'searchInput'}
                        className={'searchInput'}
                        type="text"
                        placeholder={'ingrese un producto'}
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                    <button type='submit' className={'submit'} data-testid={'submitButton'}>
                        <img src={logoSearch} alt={'search'} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchComponent;