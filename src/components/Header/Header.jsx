import './Header.css';

import headerData from '../HeaderData/HeaderData';

function Header() {
     return (
       
          
          
          
               <div className="header">
                   {
                    headerData.map((header) =>(
                         <div style={{flexGrow:"1",position:"relative",height:"45px",}}>
                    <div style={{display:'flex',gap:'10px',alignItems:'center',position:'absolute',left:0,right:0,top:0,bottom:0,overflowX:'auto'}}>
                         <img className="header__logo" src={header.image} alt="wagamama" />
                         <div className="header__restaurant-name">
                          <h1>{header.name}</h1>
                         </div>
                         
                    </div>
                    </div>

                    ))
                   }
               </div>
          
              
                   
     );
}

export default Header;