import React from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'


export const Header = () => {
    return(
        <div className='header'>
           <div className='header-container'>
                <  div className='header-logo'>
                    <img src='http://fastortheme.com/toys/image/catalog/toys/logo.png'></img>
                </div>
                <div className='btn-group'>
                    <div className='search-group'>
                        <input className='search-box' placeholder='Type here to search!'></input>
                        <button><SearchTwoToneIcon /></button>
                    </div>
                    <div className='outline-icon'>
                        <button>
                            <PersonIcon />
                        </button>
                    </div>
                    <div className='items'>
                            <span>0</span>
                    </div>
                    <div className='outline-icon'>
                        <button>
                            <ShoppingCartIcon />
                        </button>
                    </div>
                    <div className='total-money'>
                        <span>$0.00</span>
                    </div>
                </div>
           </div>
        </div>
    )
}
