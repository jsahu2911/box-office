import React from 'react';
import Navs from './Navs';
import Titel from './Titel';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Titel
        title="Box Office"
        subtitle="Are  you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
