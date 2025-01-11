const Exponent = ({ num, exponent }) => {
    const result = Math.pow(num, exponent);
    const expression = Array(exponent).fill(num).join(' * ');
  
    // Function to convert exponent to superscript
    const toSuperscript = (num) => {
      const superscripts = {
        0: '⁰',
        1: '¹',
        2: '²',
        3: '³',
        4: '⁴',
        5: '⁵',
        6: '⁶',
        7: '⁷',
        8: '⁸',
        9: '⁹'
      };
      return num.toString().split('').map(digit => superscripts[digit]).join('');
    };
  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{num}{toSuperscript(exponent)}</p>
        <p className="exponent-result">{expression} = <span className="total">{result}</span></p>
      </div>
    );
  };
  
  export default Exponent;