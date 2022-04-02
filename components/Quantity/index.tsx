import { useState } from "react";

const Quantity = () => {
  const [qnt, setQnt] = useState(2);

    return (
      <div className='handle-counter' id='handleCounter'>
        <input
          type='text'
          value={qnt}
          onChange={() => console.log()}
        />
        <div className='lft-cntrs'>
          <div onClick={() => setQnt(qnt+1)} className='counter-plus btn'>
            <i className='fa fa-caret-up'></i>
          </div>
          <div onClick={() => setQnt(qnt-1)} className='counter-minus btn'>
            <i className='fa fa-caret-down'></i>
          </div>
        </div>
      </div>
    );
}
export default Quantity;
