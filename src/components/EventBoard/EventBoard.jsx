import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import {EventBoardContainer} from './EventBoard.styled';

export const EventBoard = ({ events }) => {
    console.log(events);
    return <EventBoardContainer>
        {events.map(({name, location, speaker, type, time}) => (
            <Event
                key={name}
                name={name}
                location={location}
                speaker={speaker}
                type={type}
                start={time.start}
                end={time.end}
            />
        ))}
    </EventBoardContainer>
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired
            })

        }),
    )
}