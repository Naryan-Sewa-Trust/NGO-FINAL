import Children from "./Children";
import cards from "./constant";
function CSP() {
  return (
    <div className="container-xxl ">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp mw-500"
          data-wow-delay="0.1s"
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Child Sponsorship Program
          </div>
          <h1 className="display-6 mb-5">
            Every Child Deserves The Opportunity To Learn
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <Children key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CSP;
