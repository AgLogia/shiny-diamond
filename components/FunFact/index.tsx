import React from 'react';

interface IProps {
  fnClass: string;
}

const FunFact = (props: IProps) => {
  const funfact = [
    {
      title: '10',
      subTitle: 'Years Of Experience',
    },
    {
      title: '15',
      subTitle: 'Expert Specialist',
    },
    {
      title: '81+',
      subTitle: 'Successful Project',
    },
    {
      title: '75',
      subTitle: 'Happy Customers',
    },
  ];

  return (
    <section className={`wpo-fun-fact-section pb-120 ${props.fnClass}`}>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='wpo-fun-fact-grids clearfix'>
              {funfact.map((funfact, fitem) => (
                <div className='grid' key={fitem}>
                  <div className='info'>
                    <h3>{funfact.title}</h3> 
                    <p>{funfact.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
