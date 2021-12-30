import { networksInfo } from '../../mocks/networks-info';

function Footer() {
  const networks = networksInfo();
  return (
    <div className="container-footer" id="footer">
      <h2>Mis redes</h2>
      <div className="container-contact">
        <div className="container-social-networks">
          {networks.map((net, i) => (
            <a
              key={i}
              className="social-network-link"
              href={net.link}
              target={'_blank'}
              rel="noreferrer"
              title={`${net.description} ${net.page}: ${net.owner}`}
            >
              <i className={`fab ${net.icon} fa-3x`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
