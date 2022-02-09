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
        project: {
          description: 'Portal para publicar empleos IT',
          name: 'devJobs',
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
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/node',
              avif: 'project-devjobs.avif',
              jpg: null,
              png: 'project-devjobs.png',
              webp: 'project-devjobs.webp',
            },
            alt: 'project',
            title: 'devJobs',
          },
          links: {
            heroku: 'https://infinite-peak-70937.herokuapp.com',
            netlify: null,
            github: 'https://github.com/norbix14/devjobs',
          },
        },
      },
      {
        id: 2,
        project: {
          description: 'API para ser consumida por React',
          name: 'CRM API',
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
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/node',
              avif: 'project-crmapi.avif',
              jpg: null,
              png: 'project-crmapi.png',
              webp: 'project-crmapi.webp',
            },
            alt: 'project',
            title: 'CRM API',
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
          description: 'API para ser consumida por React',
          name: 'MERN API',
          stack: [
            'node',
            'express',
            'mongodb',
            'mongoose',
            'cors',
            'jsonwebtoken',
            'bcrypt',
          ],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/node',
              avif: 'project-mernapi.avif',
              jpg: null,
              png: 'project-mernapi.png',
              webp: 'project-mernapi.webp',
            },
            alt: 'project',
            title: 'MERN API',
          },
          links: {
            heroku: null,
            netlify: 'https://simple-mern-crud-react.netlify.app',
            github: 'https://github.com/norbix14/mernapi',
          },
        },
      },
    ],
    react: [
      {
        id: 1,
        project: {
          description: 'Comunidad para agregar y editar vehículos y personajes',
          name: 'Star Wars Community',
          stack: ['react', 'node', 'express', 'mysql', 'sweetalert2', 'axios'],
          team: {
            group: true,
            individual: false,
            members: 4,
          },
          image: {
            src: {
              root: '/img/projects/react',
              avif: 'project-starwars.avif',
              jpg: null,
              png: 'project-starwars.png',
              webp: 'project-starwars.webp',
            },
            alt: 'project',
            title: 'Star Wars Community',
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
          description: 'Frontend hecho en React',
          name: 'CRM Frontend',
          stack: ['react', 'node', 'express', 'sweetalert2', 'uuid', 'axios'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/react',
              avif: 'project-crm.avif',
              jpg: null,
              png: 'project-crm.png',
              webp: 'project-crm.webp',
            },
            alt: 'project',
            title: 'CRM Frontend',
          },
          links: {
            heroku: null,
            netlify: 'https://simple-crm-react.netlify.app',
            github: 'https://github.com/norbix14/crm',
          },
        },
      },
      {
        id: 3,
        project: {
          description: 'Frontend hecho en React',
          name: 'MERN Frontend',
          stack: ['react', 'node', 'axios'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/react',
              avif: 'project-mern.avif',
              jpg: null,
              png: 'project-mern.png',
              webp: 'project-mern.webp',
            },
            alt: 'project',
            title: 'MERN Frontend',
          },
          links: {
            heroku: null,
            netlify: 'https://simple-mern-crud-react.netlify.app',
            github: 'https://github.com/norbix14/merncliente',
          },
        },
      },
      {
        id: 4,
        project: {
          description: 'Control de pacientes en una veterinaria',
          name: 'Patients control',
          stack: ['react', 'node', 'localStorage', 'tailwindcss'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/react',
              avif: 'project-patients-control.avif',
              jpg: null,
              png: 'project-patients-control.png',
              webp: 'project-patients-control.webp',
            },
            alt: 'project',
            title: 'Patients control',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/react-patients-control',
          },
        },
      },
      {
        id: 5,
        project: {
          description: 'Control de gastos',
          name: 'Expenses control',
          stack: [
            'react',
            'node',
            'localStorage',
            'reactSwipeableList',
            'reactCircularProgressbar',
          ],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/react',
              avif: 'project-expenses-control.avif',
              jpg: null,
              png: 'project-expenses-control.png',
              webp: 'project-expenses-control.webp',
            },
            alt: 'project',
            title: 'Expenses control',
          },
          links: {
            heroku: null,
            netlify: 'https://react-expenses-control.netlify.app',
            github: 'https://github.com/norbix14/react-expenses-control',
          },
        },
      },
    ],
    vanilla: [
      {
        id: 1,
        project: {
          description: 'Proyecto de Frontend Mentor',
          name: 'Frontend Mentor Challenge',
          stack: ['html', 'css', 'javascript'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-space-tourism.avif',
              jpg: null,
              png: 'project-space-tourism.png',
              webp: 'project-space-tourism.webp',
            },
            alt: 'project',
            title: 'Space Tourism',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s04-space-tourism',
          },
        },
      },
      {
        id: 2,
        project: {
          description: 'Maquetado de la página inicial de Trello',
          name: 'Trello Clone',
          stack: ['html', 'css'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-trello.avif',
              jpg: null,
              png: 'project-trello.png',
              webp: 'project-trello.webp',
            },
            alt: 'project',
            title: 'Trello Clone',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s05-trello-clone',
          },
        },
      },
      {
        id: 3,
        project: {
          description:
            'Maquetación de la página inicial de Mercado Libre Argentina',
          name: 'Mercado Libre Clone',
          stack: ['html', 'css'],
          team: {
            group: true,
            individual: false,
            members: 4,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-mercado-libre.avif',
              jpg: null,
              png: 'project-mercado-libre.png',
              webp: 'project-mercado-libre.webp',
            },
            alt: 'project',
            title: 'Mercado Libre Clone',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s04-mercado-libre-clone',
          },
        },
      },
      {
        id: 4,
        project: {
          description: 'Maquetación de una Landing Page',
          name: 'Landing Page',
          stack: ['html', 'css', 'javascript'],
          team: {
            group: true,
            individual: false,
            members: 3,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-landing-page.avif',
              jpg: null,
              png: 'project-landing-page.png',
              webp: 'project-landing-page.webp',
            },
            alt: 'project',
            title: 'Landing Page',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s04-landing-page',
          },
        },
      },
      {
        id: 5,
        project: {
          description:
            'Galería de películas usando Fetch API y una API pública',
          name: 'Movie Gallery',
          stack: ['html', 'css', 'javascript', 'fetch api', 'themoviedb api'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-movie-gallery.avif',
              jpg: null,
              png: 'project-movie-gallery.png',
              webp: 'project-movie-gallery.webp',
            },
            alt: 'project',
            title: 'Movie Gallery',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/movie-gallery-with-fetch-api',
          },
        },
      },
      {
        id: 6,
        project: {
          description: 'Maquetación de la página inicial de Starbucks',
          name: 'Starbucks Clone',
          stack: ['html', 'css'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-starbucks.avif',
              jpg: null,
              png: 'project-starbucks.png',
              webp: 'project-starbucks.webp',
            },
            alt: 'project',
            title: 'Starbucks Clone',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s03-starbucks-clone',
          },
        },
      },
      {
        id: 7,
        project: {
          description: 'Maquetación de la página inicial de Shopify',
          name: 'Shopify Clone',
          stack: ['html', 'css'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-shopify.avif',
              jpg: null,
              png: 'project-shopify.png',
              webp: 'project-shopify.webp',
            },
            alt: 'project',
            title: 'Shopify Clone',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s03-shopify-clone',
          },
        },
      },
      {
        id: 8,
        project: {
          description: 'Maquetación de la página de inicio de Netflix',
          name: 'Netflix Clone',
          stack: ['html', 'css'],
          team: {
            group: true,
            individual: false,
            members: 2,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-netflix.avif',
              jpg: null,
              png: 'project-netflix.png',
              webp: 'project-netflix.webp',
            },
            alt: 'project',
            title: 'Netflix Clone',
          },
          links: {
            heroku: null,
            netlify: null,
            github:
              'https://github.com/norbix14/bootcamp-react-s03-netflix-clone',
          },
        },
      },
      {
        id: 9,
        project: {
          description: 'Landing page para una tienda de muebles',
          name: 'Forniture E-commerce',
          stack: ['html', 'css', 'javascript'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-forniture-ecommerce.avif',
              jpg: null,
              png: 'project-forniture-ecommerce.png',
              webp: 'project-forniture-ecommerce.webp',
            },
            alt: 'project',
            title: 'Forniture E-commerce',
          },
          links: {
            heroku: null,
            netlify: 'https://forniture-ecommerce.netlify.app',
            github: 'https://github.com/norbix14/css-forniture-ecommerce',
          },
        },
      },
      {
        id: 10,
        project: {
          description: 'Landing page para estudio de arquitectura',
          name: 'Architecture',
          stack: ['html', 'css', 'javascript'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-architecture.avif',
              jpg: null,
              png: 'project-architecture.png',
              webp: 'project-architecture.webp',
            },
            alt: 'project',
            title: 'Architecture',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-architecture',
          },
        },
      },
      {
        id: 11,
        project: {
          description: 'Landing page para una línea de auriculares',
          name: 'TechPRO',
          stack: ['html', 'css', 'javascript'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-techpro.avif',
              jpg: null,
              png: 'project-techpro.png',
              webp: 'project-techpro.webp',
            },
            alt: 'project',
            title: 'TechPRO',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-techpro',
          },
        },
      },
      {
        id: 12,
        project: {
          description: 'Landing page para una billetera virtual',
          name: 'Nucleus wallet',
          stack: ['html', 'css', 'bem', 'javascript'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-nucleus.avif',
              jpg: null,
              png: 'project-nucleus.png',
              webp: 'project-nucleus.webp',
            },
            alt: 'project',
            title: 'Nucleus wallet',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-nucleus',
          },
        },
      },
      {
        id: 13,
        project: {
          description: 'Landing page para una cafetería',
          name: 'Coffee Shop',
          stack: ['html', 'css', 'javascript', 'node', 'gulp'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-coffeeshop.avif',
              jpg: null,
              png: 'project-coffeeshop.png',
              webp: 'project-coffeeshop.webp',
            },
            alt: 'project',
            title: 'Coffee Shop',
          },
          links: {
            heroku: null,
            netlify: 'https://css-coffee-shop.netlify.app',
            github: 'https://github.com/norbix14/css-coffeeshop',
          },
        },
      },
      {
        id: 14,
        project: {
          description: 'Landing page para una aplicación de delivery',
          name: 'Delivery App',
          stack: ['html', 'css', 'javascript', 'node', 'gulp', 'bem'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-delivery-app.avif',
              jpg: null,
              png: 'project-delivery-app.png',
              webp: 'project-delivery-app.webp',
            },
            alt: 'project',
            title: 'Delivery App',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-delivery-app',
          },
        },
      },
      {
        id: 15,
        project: {
          description: 'Landing page para una aplicación de podcasts',
          name: 'Podcast FM',
          stack: ['html', 'css', 'javascript', 'node', 'gulp'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-podcast-fm.avif',
              jpg: null,
              png: 'project-podcast-fm.png',
              webp: 'project-podcast-fm.webp',
            },
            alt: 'project',
            title: 'Podcast FM',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-podcast-fm',
          },
        },
      },
    ],
  };
};
