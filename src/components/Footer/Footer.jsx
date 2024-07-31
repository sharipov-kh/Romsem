import "./Footer.scss";
import React from "react" 
 const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
         <div className="item item1">
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Лента материалов</p>
            <p>Политика возврата</p>
         </div>
         <div className="item item2">
            <div className="content">
               <p id="nomerTell">Введите номер :</p>
               <form action="sharipov khushnud">
                  <input id="phone" type="tel" placeholder="+992 ( __ ) ___ __ __"/>
               </form>
            </div>
            <p>Выберите удобный <br/>
               мессенджер для общения</p>
         </div>
         <div className="item item2 item3">
            <p>Тел:+992 705 188 855 </p>
            <p>Тел:+992 715 188 955</p>
            <p>Адрес: Н. Карабаев</p>
         </div>
      </div>
   </footer>
  );   
   };   
    
export default Footer;
