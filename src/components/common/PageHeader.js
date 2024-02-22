import { Link } from "react-router-dom";

function PageHeader(props) {
  const title = props.pagetitle;
  return (
    <>
      <div
        className="container-fluid page-header mb-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            {title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
export default PageHeader;
