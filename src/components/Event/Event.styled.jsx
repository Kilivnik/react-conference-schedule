import styled from '@emotion/styled'

export const EventCard = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 8px;
    border-radius: 4px;
    `

export const EventTitle = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    `

export const EventInfo = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--color-primary-text);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;

    svg{
        display: block;
        margin-right: 8px;
        color: var(--color-secondary-text);
    }
    `

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: aliceblue;
    color: #fff;

    background-color: ${({ eventType }) => {
        switch (eventType) {
            case 'free':
            // передаєм колір в залежності від типу події з глбальних змінних

                return "var(--color-green)" ;
            case 'paid':
                return "var(--color-red)" ;
            case 'vip':
                return  "var(--color-blue)";
            default:
                return '#000)';
        }
    }};
`