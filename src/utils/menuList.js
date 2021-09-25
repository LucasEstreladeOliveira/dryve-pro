import summaryWhite from '../assets/summary-white.svg'
import summaryBlue from '../assets/summary-blue.svg'
import oportunitiesWhite from '../assets/oportunities-white.svg'
import oportunitiesBlue from '../assets/oportunities-blue.svg'
import calendarWhite from '../assets/calendar-white.svg'
import calendarBlue from '../assets/calendar-blue.svg'
import vehiclesWhite from '../assets/vehicles-white.svg'
import vehiclesBlue from '../assets/vehicles-blue.svg'
import publicationWhite from '../assets/publication-white.svg'
import publicationBlue from '../assets/publication-blue.svg'
import contactsWhite from '../assets/contacts-white.svg'
import contactsBlue from '../assets/contacts-blue.svg'
import analyticsWhite from '../assets/analytics-white.svg'
import analyticsBlue from '../assets/analytics-blue.svg'
import financingWhite from '../assets/financing-white.svg'
import financingBlue from '../assets/financing-blue.svg'


const menuList = [
  {
    label: 'Resumo',
    iconActive: summaryWhite,
    iconNotActive: summaryBlue,
    route: '/resumo',
    selected: true
  },
  {
    label: 'Oportunidades',
    iconActive: oportunitiesWhite,
    iconNotActive: oportunitiesBlue,
  },
  {
    label: 'Agenda',
    iconActive: calendarWhite,
    iconNotActive: calendarBlue,
  },
  {
    label: 'Veículos',
    iconActive: vehiclesWhite,
    iconNotActive: vehiclesBlue,
  },
  {
    label: 'Publicação',
    iconActive: publicationWhite,
    iconNotActive: publicationBlue,
  },
  {
    label: 'Contatos',
    iconActive: contactsWhite,
    iconNotActive: contactsBlue,
    route: '/contatos'
  },
  {
    label: 'Analytics',
    iconActive: analyticsWhite,
    iconNotActive: analyticsBlue,
  },
  {
    label: 'Financiamento',
    iconActive: financingWhite,
    iconNotActive: financingBlue,
  },
]

export default menuList
