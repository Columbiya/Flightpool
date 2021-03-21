import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import promotion1 from '../assets/images/MainPromotions/promotion1.jpg';
import promotion2 from '../assets/images/MainPromotions/promotion2.jpg';
import promotion3 from '../assets/images/MainPromotions/promotion3.jpg';
import promotion4 from '../assets/images/MainPromotions/promotion4.jpg';
import generator from '../utils/validators/idGenerator/idGenerator';


const weAreTrustedIdGenerator = generator()
const promotionsIdGenerator = generator();

const SET_MY_FLIGHT = 'SET_MY_FLIGHT';
const SET_SUBSCRIBERS = 'SET_SUBSCRIBERS';

let initialState = {
    whyWereTrusted: [{ text: "Успешный полет гарантирован в 99% процентов случаев!", icon: faHome, id: weAreTrustedIdGenerator.next().value },
    { text: "Мы подаем кофе на наших полетах", icon: faCoffee, id: weAreTrustedIdGenerator.next().value },
    { text: "Записываем жалобы посетителей", icon: faAddressBook, id: weAreTrustedIdGenerator.next().value },
    { text: "Всегда имеем доктора в самолете", icon: faAmbulance, id: weAreTrustedIdGenerator.next().value },
    { text: "Прислушиваемся к нашим клиентам", icon: faAddressCard, id: weAreTrustedIdGenerator.next().value },
    { text: "Частые скидки и акции", icon: faCalculator, id: weAreTrustedIdGenerator.next().value }],
    myFlight: {
        from: null,
        to: null,
        whenThere: null,
        whenBack: null
    },
    promotions: [
        {
            header: 'Returning and Changing Your Tickets',
            body: `The pandemic has changed many travelers plans, but we know that it will not last forever. 
                Once all of this is over, we will continue exploring this world the way we used to. 
                Special rules that have been developed for this challenging situation will help you cancel your trip
                or postpone it until later.`,
            image: promotion1,
            id: promotionsIdGenerator.next().value
        },
        {
            header: 'Best offers',
            body: `To see again the streets that witnessed so much. To hug your beloved ones and look back to see
                what you’ve come through. And to think of new dreams that will be so special!`,
            image: promotion2,
            id: promotionsIdGenerator.next().value
        },
        {
            header: 'See you more often',
            body: `Since the beginning of January, we have been expanding the geography of flights in Russia so that you can
                see your loved ones more often. Choose our company to fly to where you are always expected.`,
            image: promotion3,
            id: promotionsIdGenerator.next().value
        },
        {
            header: 'Everything is on again',
            body: `From August 10, we will resume flights to Turkey. Flights from Moscow to Antalya will be operated twice
            a day daily, and flights on the Moscow-Dalaman route will be operated three to seven times a week.`,
            image: promotion4,
            id: promotionsIdGenerator.next().value
        }],
    subscribers: []
};

const mainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_FLIGHT:
            return {
                ...state,
                myFlight: {
                    from: action.from,
                    to: action.to,
                    whenThere: action.whenThere,
                    whenBack: action.whenBack
                }
            };
        case SET_SUBSCRIBERS:
            return {
                ...state,
                subscribers: [...state.subscribers, action.subscriber]
            }
        default:
            return state;
    }
};

export const setMyFlight = (from, to, whenThere, whenBack) => ({ type: SET_MY_FLIGHT, from, to, whenThere, whenBack });
export const setSubscribers = subscriber => ({ type: SET_SUBSCRIBERS, subscriber });

export default mainPage;