import Link from 'next/link';
import { useState } from 'react';
import { Card, CardBody, Collapse } from 'reactstrap';
import MenuItems from '../../pages/api/menu';

const MobileMenu = () => {
  const [isMenuShow, setMenuShow] = useState(false);
  const [isOpen, setOpen] = useState(-1);

  const menuHandler = () => {
    setMenuShow(!isMenuShow);
  };

  const setIsOpen = (id: number) => () => {
    setOpen(id === isOpen ? 0 : id);
  };

  return (
    <div>
      <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
        <div className='menu-close'>
          <div className='clox' onClick={menuHandler}>
            <i className='ti-close'></i>
          </div>
        </div>

        <ul className='responsivemenu'>
          {MenuItems.map((item, i) => {
            return (
              <li key={item.title}>
                {item.children ? (
                  <p onClick={setIsOpen(i)}>
                    {item.title}
                    {item.children ? (
                      <i className='fa fa-angle-right' aria-hidden='true'></i>
                    ) : (
                      ''
                    )}
                  </p>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                {item.children ? (
                  <Collapse isOpen={i === isOpen}>
                    <Card>
                      <CardBody>
                        <ul>
                          {item.children.map((submenu) => (
                            <li key={submenu.link}>
                              <Link href={submenu.link}>
                                <a className='active' onClick={() => setMenuShow(false)}>
                                  {submenu.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Collapse>
                ) : (
                  ''
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className='showmenu' onClick={menuHandler}>
        <button type='button' className='navbar-toggler open-btn'>
          <span className='icon-bar first-angle'></span>
          <span className='icon-bar middle-angle'></span>
          <span className='icon-bar last-angle'></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
