import Header from '../component/header/header';
import Sidebar from '../component/sidebar/sidebar';

import { Outlet, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <div className="main-layout">
   
      <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <div className="main-content ">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <section
          className={`page-content ${sidebarOpen ? 'overlay-active' : ''}`}
        >
          <TransitionGroup component={null}>
            
            <CSSTransition
              key={location.key}
              nodeRef={nodeRef}
              timeout={700}
              classNames="page-slide"
            >
              <div ref={nodeRef} className="page-content-wrapper">
                <Outlet />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
