import './CategoriesSection.css';
import { useState } from "react";

import { Link } from 'react-router-dom';

import categories from '../CategoriesData/CategoriesData';
import MenuProduct from '../MenuProduct/MenuProduct';

function CategoriesSection() {
     
     return (
          <> 
             {/* {
              categories.map((item) => (
               <section className="categories-section ">
                    <div className="categories-section__container">
                         <div className="menu-category" data-category-id="-2" data-long-press-delay="1000">
                               <div className="menu-category__highlight" id="menu-category__highlight" style={{transform: 'translateX(7.95001px)', display: 'block' }}></div> 

                              <div class="menu-category__highlight" id="menu-category__highlight" style={{ transform: 'translateX(85.9125px)',display: 'block' }}></div>
                              <div className="menu-category__img">
                                   <Link to={item.categoryUrl}>
                                   <img src={item.categoryImage}/>
                                   </Link>
                              </div>
                              <div className="menu-category__name no-wrap">
                                   <div>
                                        <Link href={item.categoryUrl}>
                                        {item.categoryName}
                                        </Link>
                                   </div>
                              </div>
                         </div>    
                    </div>
               </section>
     
                  ))  */}

                

                  
                    <section className="categories-section ">
                         <div className="categories-section__container">
                         
                            {
                              categories.map((item) => (
                                   <div className="menu-category menu-categor--active" data-category-id="-2" data-long-press-delay="1000">
                                   <div className="menu-category__highlight" id="menu-category__highlight" style={{transform: 'translateX(7.95001px)', display: 'block' }}></div>
     
                                   <div class="menu-category__highlight" id="menu-category__highlight" style={{ transform: 'translateX(85.9125px)',display: 'block' }}></div>
                                   <div className="menu-category__img">
                                        
                                        <Link to={item.categoryUrl} onClick={() =>{}}>
                                        <img src={item.categoryImage}/>
                                        </Link>
                                   </div>
                                   <div className="menu-category__name no-wrap">
                                        <div>
                                             <Link to={item.categoryUrl} onClick={() => {}}>
                                             {item.categoryName}
                                             </Link>
                                        </div>
                                   </div>
                               
                                  </div>  
                              )) 
                            }
                           
                         
                         </div>
                    </section>
          
                      
            
             
          </>
          
          

          
          

          


         
          
     );
}

export default CategoriesSection;
