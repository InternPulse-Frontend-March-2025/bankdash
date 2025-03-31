import { useState, useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Logo from '../components/general/Logo'
import Navigation from '../components/general/Navigation'
import Header from '../components/general/Header'
import SearchOverlay from '../components/general/SearchOverlay'
import MobileNav from '../components/general/MobileNav'


function Layout() {
  const [contentPage, setContentPage] = useState('Overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearchList, setShowSearchList] = useState(false)
  const [showNav, setShowNav ] = useState(false)

  const location = useLocation().pathname
  
  let displayTitle

  switch(location){
    case '/banking':
      displayTitle = 'Overview';
      break;

    case '/banking/':
      displayTitle = 'Overview';
      break;
    
    case '/banking/transactions':
      displayTitle = 'Transactions';
      break;
    
    case '/banking/accounts':
      displayTitle = 'Accounts';
      break;
    
    case '/banking/investments':
      displayTitle = 'Investments';
      break;
    
    case '/banking/credit_cards':
      displayTitle = 'Credit Cards';
      break;
    
    case '/banking/loans':
      displayTitle = 'Loans';
      break;
    
    case '/banking/services':
      displayTitle = 'Services';
      break;
    
    case '/banking/setting':
      displayTitle = 'Setting';
      break; 
    
  }



  return (
    <>
      <div className="w-screen flex flex-col bg-gray-fill">
        <div className="header-container sm:h-35 md:h-25 w-full flex gap-1">
          <div className="sm:w-1/4 lg:w-1/6 bg-white sm:hidden md:flex large-screens-only">
            {/*Brand logo here */}
            <Logo />
          </div>
          <div className="w-full sm:w-3/4 lg:w-5/6 bg-white">
            {/*Header here */}
            <Header 
              pageTitle={displayTitle} 
              navFunc={setContentPage}
              setShowNav={setShowNav}
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm}
              showSearchList={showSearchList}
              setShowSearchList={setShowSearchList}
            />
          </div>
        </div>
        <div className="flex w-full h-full gap-1">
          <div className="sm:w-1/4 lg:w-1/6 bg-white sidebar md:flex sm:hidden large-screens-only">
            <Navigation viewPage={displayTitle} navFunc={setContentPage} />
          </div>
          <div className="w-full sm:w-3/4 lg:w-5/6 main-content">
            {/*Main content here */}
            <Outlet />
          </div>
        </div>

      </div>
      <SearchOverlay
        showSearchList={showSearchList}
        setShowSearchList={setShowSearchList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        navFunc={setContentPage}
      />

      <MobileNav
        showNav={showNav}
        setShowNav={setShowNav}
        viewPage={displayTitle}
        navFunc={setContentPage} 
      />
    </>
  );
}

export default Layout