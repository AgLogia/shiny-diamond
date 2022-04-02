interface IProps {
  subTitle: string;
  mainTitle: string;
}

const SectionTitle = (props: IProps) => {
  return (
    <div className='row'>
      <div className='wpo-section-title'>
        <span>{props.subTitle}</span>
        <h2>{props.mainTitle}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
