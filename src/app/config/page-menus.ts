const administrationMenuItem =  {
  'icon': 'fa fa-cog',
  'title': 'Administración',
  'url': '',
  'caret': 'true',
  'submenu': [{
    'url': '',
    'title': 'Supervisores',
  },
    {
      'url': '/administracion/departamentos',
      'title': 'Departamentos',
    },
    {
      'url': '/administracion/tipo-documentos',
      'title': 'Tipos de Documentos',
    },
    {
      'url': '/administracion/gestion-tramites',
      'title': 'Gestión Trámites',
    }],
};

const homeMenuItem = {
  'icon': 'fa fa-home',
  'title': 'Inicio',
  'url': '/inicio'
};

const tramiteMenuItem =  {
  'icon': 'fa fa-address-book ',
  'title': 'Trámites',
  'url': '',
};

const pageMenus = [
  homeMenuItem,
  tramiteMenuItem,
  administrationMenuItem,
];

export default pageMenus;
