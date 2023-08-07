import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {PiCaretDownLight} from "react-icons/pi";
import "./Header.scss";

function Header({ data }) {
    const [active, setActive] = useState(false);
    const [headerActive, setHeaderActive] = useState('');

    const path = useLocation();
    const loc = path.pathname.split('/');

    const setHeader = (item) => {
      setHeaderActive(item);
      
    }
    useEffect(() => {
      setHeader("dashboard");
      setHeader('sales');
      setHeader('suppliers');
    }, []);
  return (
    <div className="Header border-bottom w-100 d-flex align-items-center justify-content-center">
      <div className="header w-100 border d-flex text-center justify-content-center">
        {data.map(
          (item, idx) =>
            item.link ? (
              <Link onClick={() => setHeader(item.name)} className={`header__link ${headerActive===item.name ? 'active' : ''}`} key={idx}>
                {item.name}
              </Link>)
              :
              (<div key={idx} className={`more__link `} onClick={() => setActive(!active)}>
                <span>{item.name}
                <PiCaretDownLight /></span>
                {active && <div className="sub__links border bg-white px-4">
                    {
                        item.subname.map((item, idx) => (
                            <Link className="link d-block py-1">{item.name}</Link>
                        ))
                    }
                </div>}
              </div>
            )
        )}
        
      </div>
      <div className="Header__2">
        jdhjsdghj
      </div>
    </div>
  );
}

export default Header;
