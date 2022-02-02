/**
 * Información sobre todos los proyectos.
 *
 * @returns {array} un array de objetos con datos de cada proyecto.
 *
 */
export const imagesCarrouselCode = () => {
  return [
    {
      id: 1,
      src: {
        root: '/img/source',
        avif: 'source-starwars.avif',
        jpg: null,
        png: 'source-starwars.png',
        webp: 'source-starwars.webp',
      },
      alt: 'source code',
      title: 'Source code Star Wars Community',
      project: {
        text: 'Comunidad para agregar y editar vehículos y personajes',
        name: 'Star Wars Community',
      },
      site: 'https://starwarsg4.netlify.app',
      github:
        'https://github.com/norbix14/bootcamp-react-final-project-starwars',
    },
    {
      id: 2,
      src: {
        root: '/img/source',
        avif: 'source-crm.avif',
        jpg: null,
        png: 'source-crm.png',
        webp: 'source-crm.webp',
      },
      alt: 'source code',
      title: 'Source code CRM',
      project: {
        text: 'API de un CRM y Frontend hecho en React',
        name: 'CRM API y Frontend',
      },
      site: 'https://simple-crm-react.netlify.app',
      github: 'https://github.com/norbix14/crmapi',
    },
    {
      id: 3,
      src: {
        root: '/img/source',
        avif: 'source-mern.avif',
        jpg: null,
        png: 'source-mern.png',
        webp: 'source-mern.webp',
      },
      alt: 'source code',
      title: 'Source code MERN',
      project: {
        text: 'API de un CRUD y Frontend hecho en React',
        name: 'MERN API y Frontend',
      },
      site: 'https://simple-mern-crud-react.netlify.app',
      github: 'https://github.com/norbix14/mernapi',
    },
    {
      id: 4,
      src: {
        root: '/img/source',
        avif: 'source-devjobs.avif',
        jpg: null,
        png: 'source-devjobs.png',
        webp: 'source-devjobs.webp',
      },
      alt: 'source code',
      title: 'Source code devJobs',
      project: {
        text: 'Proyecto para publicar empleos IT',
        name: 'devJobs',
      },
      site: 'https://infinite-peak-70937.herokuapp.com',
      github: 'https://github.com/norbix14/devjobs',
    },
  ];
};
