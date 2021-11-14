import * as FaIcon from 'react-icons/fa'

const SideNavData = [
  {
    title: 'Início',
    path: '/',
    icon: <FaIcon.FaHome />,
    cName: 'nav-item'
  },
  {
    title: 'Cadastre sua Loja',
    path: '/cadastroloja',
    icon: <FaIcon.FaStore />,
    cName: 'nav-item'
  },
  {
    title: 'Localização',
    path: '/localizacao',
    icon: <FaIcon.FaMapMarkerAlt />,
    cName: 'nav-item'
  },
  {
    title: 'Categorias',
    path: '/categorias',
    icon: <FaIcon.FaBoxes />,
    cName: 'nav-item'
  },
  {
    title: 'Quem somos?',
    path: '/quemsomos',
    icon: <FaIcon.FaQuestionCircle />,
    cName: 'nav-item'
  },
  {
    title: 'Configurações',
    path: '/configuracoes',
    icon: <FaIcon.FaCog />,
    cName: 'nav-item'
  },
  {
    title: 'Sair',
    path: '/sair',
    icon: <FaIcon.FaSignOutAlt />,
    cName: 'nav-item'
  },
]

export default SideNavData