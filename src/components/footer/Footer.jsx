import { networksInfo } from '../../mocks/networks-info';

function Footer() {
  const networks = networksInfo();
  return (
    <div className="container-footer" id="footer">
      <h2>Mis redes</h2>
      <div className="container-contact">
        <div className="container-social-networks">
          {networks.map(({ id, link, description, page, owner, icon }) => (
            <a
              className="social-network-link"
              rel="noreferrer"
              target={'_blank'}
              key={id}
              href={link}
              title={`${description} ${page}: ${owner}`}
            >
              <i className={`fab ${icon} fa-3x`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
