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
      project: {
        description: 'Comunidad para agregar y editar vehículos y personajes',
        name: 'Star Wars Community',
        image: {
          src: {
            root: '/img/source',
            avif: 'source-starwars.avif',
            jpg: null,
            png: 'source-starwars.png',
            webp: 'source-starwars.webp',
          },
          alt: 'source code',
          title: 'Source code Star Wars Community',
        },
        links: {
          heroku: null,
          netlify: 'https://starwarsg4.netlify.app',
          github:
            'https://github.com/norbix14/bootcamp-react-final-project-starwars',
        },
      },
    },
    {
      id: 2,
      project: {
        description: 'API de un CRM y Frontend hecho en React',
        name: 'CRM API y Frontend',
        image: {
          src: {
            root: '/img/source',
            avif: 'source-crm.avif',
            jpg: null,
            png: 'source-crm.png',
            webp: 'source-crm.webp',
          },
          alt: 'source code',
          title: 'Source code CRM',
        },
        links: {
          heroku: null,
          netlify: 'https://simple-crm-react.netlify.app',
          github: 'https://github.com/norbix14/crmapi',
        },
      },
    },
    {
      id: 3,
      project: {
        description: 'API de un CRUD y Frontend hecho en React',
        name: 'MERN API y Frontend',
        image: {
          src: {
            root: '/img/source',
            avif: 'source-mern.avif',
            jpg: null,
            png: 'source-mern.png',
            webp: 'source-mern.webp',
          },
          alt: 'source code',
          title: 'Source code MERN',
        },
        links: {
          heroku: null,
          netlify: 'https://simple-mern-crud-react.netlify.app',
          github: 'https://github.com/norbix14/mernapi',
        },
      },
    },
    {
      id: 4,
      project: {
        description: 'Proyecto para publicar empleos IT',
        name: 'devJobs',
        image: {
          src: {
            root: '/img/source',
            avif: 'source-devjobs.avif',
            jpg: null,
            png: 'source-devjobs.png',
            webp: 'source-devjobs.webp',
          },
          alt: 'source code',
          title: 'Source code devJobs',
        },
        links: {
          heroku: 'https://infinite-peak-70937.herokuapp.com',
          netlify: null,
          github: 'https://github.com/norbix14/devjobs',
        },
      },
    },
  ];
};
