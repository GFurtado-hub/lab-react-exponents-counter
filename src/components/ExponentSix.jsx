const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁶</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{Math.pow(count, 6)}</span></p>
  </div>
);

export default ExponentSix;