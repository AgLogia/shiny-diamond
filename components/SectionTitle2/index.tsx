interface IProps {
  subTitle: string;
  mainTitle: string;
  vText: string;
}

const SectionTitle2 = (props: IProps) => {
  return (
    <div className='row'>
      <div className='wpo-section-title-s2'>
        <span>{props.subTitle}</span>
        <h2>{props.mainTitle}</h2>
        <div className='invisible-text'>
          <h2>{props.vText}</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle2;
