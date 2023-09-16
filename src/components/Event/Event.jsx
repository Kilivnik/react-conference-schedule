import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt,FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constant';
import {EventCard, EventTitle, EventInfo, Chip } from './Event.styled';


export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const formattedDuration = formatEventDuration(start, end);
    return (
        <EventCard>
            <EventTitle>{name}</EventTitle>
            <EventInfo>
                <FaMapMarkerAlt size={iconSize.small} />
                {location}
            </EventInfo>
            <EventInfo>
                <FaUserAlt size={iconSize.small}/>
                {speaker}
            </EventInfo>
            <EventInfo>
                <FaCalendarAlt size={iconSize.small} />
                {formattedStart}
            </EventInfo>
            <EventInfo>
                <FaClock size={iconSize.small}/>
                {formattedDuration}
            </EventInfo>
            <Chip eventType={type}>{type}</Chip>
        </EventCard>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}

