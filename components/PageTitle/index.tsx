import Link from 'next/link';
import React from 'react';

interface IProps {
  pageTitle: string;
  pageSub: string;
}

const PageTitle = (props: IProps) => {
  return (
    <section className='wpo-page-title'>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-12'>
            <div className='wpo-breadcumb-wrap'>
              <h2>{props.pageTitle}</h2>
              <ol className='wpo-breadcumb-wrap'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <span>{props.pageSub}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
