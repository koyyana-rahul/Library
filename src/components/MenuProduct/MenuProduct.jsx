import './MenuProduct.css';
import MenuProductItem  from '../MenuProductData/MenuProductData';
import cse from '../MenuProductData/CSE';
import ece from '../MenuProductData/ECE';
import eee from '../MenuProductData/ECE';
import mech from '../MenuProductData/MECH';
import civil from '../MenuProductData/CIVIL';



function MenuProduct() {
     return (
          <>



          
          

                          
                          
          <div class="menu-content--categories-medium-photo menu-content">
          <section className="menu-products-section menu-products-section--grid" style={{paddingBottom: '160px'}}>
               <div className="menu-grid">
                    
                         {
                              MenuProductItem.map((menuItem) =>(

                              <div className="menu-product">
                                   <div className="menu-product__item">
                                        <div className="menu-product__item__img">
                                           <img className="menu-product__item__img__full" src={menuItem.itemImage} alt="Item image" decoding="async"/>
                                        </div>
 
                                        <div className="menu-product__item__top-block">
                                         <div className="menu-product__item__name text-overflow">{menuItem.itemName}</div>
                                         <div className="menu-product__item__price no-wrap">{menuItem.itemNav}</div>
                                        </div>

                                   </div>
                              </div>

                              ))
                         }

                    
                    
               </div>
          </section>
               
          </div>         
                                  
                             
          </>
          
     )
}

export default MenuProduct;