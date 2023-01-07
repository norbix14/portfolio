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
      {
        id: 4,
        project: {
          description: 'Crear proyectos y tareas',
          name: 'Uptask',
          stack: [
            'node',
            'express',
            'mysql',
            'sequelize',
            'cors',
            'passport',
            'bcryptjs',
            'pug',
            'connectflash',
            'nanoid',
            'slug',
            'sweetalert2',
            'axios',
          ],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/node',
              avif: 'project-uptask.avif',
              jpg: null,
              png: 'project-uptask.png',
              webp: 'project-uptask.webp',
            },
            alt: 'project',
            title: 'Uptask',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/uptasknode',
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
          stack: ['react', 'node', 'local storage', 'tailwind css'],
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
            'local storage',
            'react swipeable list',
            'react circular progressbar',
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
          description: 'Maquetación de la página de inicio de Trello',
          name: 'Trello',
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
            title: 'Trello',
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
            'Maquetación de la página de inicio de Mercado Libre Argentina',
          name: 'Mercado Libre',
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
            title: 'Mercado Libre',
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
          description: 'Maquetación de la página de inicio de Starbucks',
          name: 'Starbucks',
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
            title: 'Starbucks',
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
          description: 'Maquetación de la página de inicio de Shopify',
          name: 'Shopify',
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
            title: 'Shopify',
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
          name: 'Netflix',
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
            title: 'Netflix',
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
          stack: ['html', 'sass', 'javascript', 'node', 'gulp'],
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
          stack: ['html', 'sass', 'javascript', 'node', 'gulp', 'bem'],
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
          stack: ['html', 'sass', 'javascript', 'node', 'gulp'],
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
      {
        id: 16,
        project: {
          description: 'Clon de la página de inicio de Airbnb',
          name: 'Airbnb',
          stack: ['html', 'sass', 'javascript', 'node', 'gulp', 'bem'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-airbnb-clone.avif',
              jpg: null,
              png: 'project-airbnb-clone.png',
              webp: 'project-airbnb-clone.webp',
            },
            alt: 'project',
            title: 'Airbnb',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-airbnb-clone',
          },
        },
      },
      {
        id: 17,
        project: {
          description: 'Landing page para una empresa de bienes raíces',
          name: 'Real State',
          stack: ['html', 'sass', 'javascript', 'node', 'gulp', 'bem'],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-real-state.avif',
              jpg: null,
              png: 'project-real-state.png',
              webp: 'project-real-state.webp',
            },
            alt: 'project',
            title: 'Real State',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-real-state',
          },
        },
      },
      {
        id: 18,
        project: {
          description: 'Landing page para un salón de belleza y spa',
          name: 'Carolina Spa',
          stack: [
            'html',
            'sass',
            'javascript',
            'node',
            'gulp',
            'bem',
            'swiper js',
          ],
          team: {
            group: false,
            individual: true,
            members: 0,
          },
          image: {
            src: {
              root: '/img/projects/vanilla',
              avif: 'project-carolina-spa.avif',
              jpg: null,
              png: 'project-carolina-spa.png',
              webp: 'project-carolina-spa.webp',
            },
            alt: 'project',
            title: 'Carolina Spa',
          },
          links: {
            heroku: null,
            netlify: null,
            github: 'https://github.com/norbix14/css-carolina-spa',
          },
        },
      },
    ],
  };
};
