// import { IconName } from "react-icons/fa";


import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from 'data/upcoming-events.json';

import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </AppContainer>
  );
};
