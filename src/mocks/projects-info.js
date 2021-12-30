/**
 * Información de todos los proyectos.
 *
 * @returns {object} un objeto con diferentes claves según las tecnologías
 * utilizadas.
 *
 */
export const projectsInfo = () => {
  return {
    node: [
      {
        id: 1,
        src: '/img/projects/project-devjobs.png',
        alt: 'project',
        title: 'devJobs',
        project: {
          description: 'Página para publicar empleos IT',
          title: 'devJobs',
          stack: [
            'node',
            'express',
            'mongodb',
            'passport',
            'cloudinary',
            'mongoose',
            'handlebars',
            'axios',
            'bcryptjs',
            'nanoid',
            'slug',
            'sweetalert2',
            'sha1',
          ],
        },
        site: 'https://infinite-peak-70937.herokuapp.com',
        github: 'https://github.com/norbix14/devjobs',
      },
      {
        id: 2,
        src: '/img/projects/project-crmapi.png',
        alt: 'project',
        title: 'CRM API',
        project: {
          description:
            'CRM API que es consumida por el Frontend hecho en React',
          title: 'CRM API',
          stack: [
            'node',
            'express',
            'mongodb',
            'mongoose',
            'bcryptjs',
            'cors',
            'cloudinary',
            'jsonwebtoken',
            'sha1',
          ],
        },
        site: 'https://simple-crm-react.netlify.app',
        github: 'https://github.com/norbix14/crmapi',
      },
      {
        id: 3,
        src: '/img/projects/project-mernapi.png',
        alt: 'project',
        title: 'MERN API',
        project: {
          description:
            'MERN API que es consumida por el Frontend hecho en React',
          title: 'MERN API',
          stack: [
            'node',
            'express',
            'mongodb',
            'mongoose',
            'cors',
            'jsonwebtoken',
            'bcrypt',
          ],
        },
        site: 'https://simple-mern-crud-react.netlify.app',
        github: 'https://github.com/norbix14/mernapi',
      },
    ],
    react: [
      {
        id: 1,
        src: '/img/projects/project-starwars.png',
        alt: 'project',
        title: 'Star Wars Community',
        project: {
          description: 'Comunidad para agregar y editar vehículos y personajes',
          title: 'Star Wars Community',
          stack: ['react', 'node', 'express', 'mysql', 'sweetalert2', 'axios'],
        },
        site: 'https://starwarsg4.netlify.app',
        github:
          'https://github.com/norbix14/bootcamp-react-final-project-starwars',
      },
      {
        id: 2,
        src: '/img/projects/project-crm.png',
        alt: 'project',
        title: 'CRM Frontend',
        project: {
          description: 'Frontend hecho en React',
          title: 'CRM Frontend',
          stack: ['react', 'node', 'express', 'sweetalert2', 'uuid', 'axios'],
        },
        site: 'https://simple-crm-react.netlify.app',
        github: 'https://github.com/norbix14/crm',
      },
      {
        id: 3,
        src: '/img/projects/project-mern.png',
        alt: 'project',
        title: 'MERN Frontend',
        project: {
          description: 'Frontend hecho en React',
          title: 'MERN Frontend',
          stack: ['react', 'node', 'axios'],
        },
        site: 'https://simple-mern-crud-react.netlify.app',
        github: 'https://github.com/norbix14/merncliente',
      },
    ],
    vanilla: [
      {
        id: 1,
        src: '/img/projects/project-space-tourism.png',
        alt: 'project',
        title: 'Space Tourism',
        project: {
          description: 'Proyecto de Frontend Mentor',
          title: 'Frontend Mentor Challenge',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s04-space-tourism',
        github: 'https://github.com/norbix14/bootcamp-react-s04-space-tourism',
      },
      {
        id: 2,
        src: '/img/projects/project-trello.png',
        alt: 'project',
        title: 'Trello Clone',
        project: {
          description: 'Maquetado de la página de Trello',
          title: 'Trello Clone',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s05-trello-clone',
        github: 'https://github.com/norbix14/bootcamp-react-s05-trello-clone',
      },
      {
        id: 3,
        src: '/img/projects/project-mercado-libre.png',
        alt: 'project',
        title: 'Mercado Libre Clone',
        project: {
          description:
            'Maquetación de la página inicial de Mercado Libre Argentina',
          title: 'Mercado Libre Clone',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s04-mercado-libre-clone',
        github:
          'https://github.com/norbix14/bootcamp-react-s04-mercado-libre-clone',
      },
      {
        id: 4,
        src: '/img/projects/project-landing-page.png',
        alt: 'project',
        title: 'Landing Page',
        project: {
          description: 'Maquetación de una Landing Page',
          title: 'Landing Page',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s04-landing-page',
        github: 'https://github.com/norbix14/bootcamp-react-s04-landing-page',
      },
      {
        id: 5,
        src: '/img/projects/project-movie-gallery.png',
        alt: 'project',
        title: 'Movie Gallery',
        project: {
          description:
            'Galería de películas usando Fetch API y una API pública con datos de las películas',
          title: 'Movie Gallery',
          stack: ['html', 'css', 'javascript', 'fetch api', 'themoviedb api'],
        },
        site: 'https://github.com/norbix14/movie-gallery-with-fetch-api',
        github: 'https://github.com/norbix14/movie-gallery-with-fetch-api',
      },
      {
        id: 6,
        src: '/img/projects/project-starbucks.png',
        alt: 'project',
        title: 'Starbucks Clone',
        project: {
          description: 'Maquetación de la página de Starbucks',
          title: 'Starbucks Clone',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s03-starbucks-clone',
        github:
          'https://github.com/norbix14/bootcamp-react-s03-starbucks-clone',
      },
      {
        id: 7,
        src: '/img/projects/project-shopify.png',
        alt: 'project',
        title: 'Shopify Clone',
        project: {
          description: 'Maquetación de la página de Shopify',
          title: 'Shopify Clone',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s03-shopify-clone',
        github: 'https://github.com/norbix14/bootcamp-react-s03-shopify-clone',
      },
      {
        id: 8,
        src: '/img/projects/project-netflix.png',
        alt: 'project',
        title: 'Netflix Clone',
        project: {
          description: 'Maquetación de la página de inicio de Netflix',
          title: 'Netflix Clone',
          stack: ['html', 'css'],
        },
        site: 'https://github.com/norbix14/bootcamp-react-s03-netflix-clone',
        github: 'https://github.com/norbix14/bootcamp-react-s03-netflix-clone',
      },
    ],
  };
};
