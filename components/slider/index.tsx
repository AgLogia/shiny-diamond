import { Slider, withStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/use-window-size';

interface IProps {
  onMarkSelected: (value: number, label: string) => void;
}

const marks = [
  {
    value: 1,
    label: '1-999 sq.ft',
  },
  {
    value: 2,
    label: '1000-2390 sq.ft',
  },
  {
    value: 3,
    label: '2400-3390 sq.ft',
  },
  {
    value: 4,
    label: '3400-4999 sq.ft',
  },
  {
    value: 5,
    label: '5000-6999 sq.ft',
  },
  {
    value: 6,
    label: '7000-8000 sq.ft',
  },
];

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    width: '90%',
    color: '#caab06',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: iOSBoxShadow,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 10px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000000',
      textAlign: 'center',
      width: '85px',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#caab06',
  },
  mark: {
    backgroundColor: '#caab06',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const AGSlider = (props: IProps) => {
  const [size, setSize] = useState<number>(1);
  const [isMobile, setMobile] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setMobile(width <= 768);
  }, [width]);

  const valueLabelFormat = (value: number) => {
    return marks[marks.findIndex((mark) => mark.value === value)]
      .label;
  };

  const getMarks = () => {
    return isMobile
      ? marks.map((m) => ({ value: m.value }))
      : marks;
  };

  return (
    <div className='container'>
      <div className='row mb-4 text-center'>
        <div className='col'>
          <IOSSlider
            defaultValue={1}
            step={1}
            marks={getMarks()}
            valueLabelDisplay='off'
            min={1}
            max={6}
            onChangeCommitted={(event, newValue) => {
              setSize(newValue as number);
              props.onMarkSelected(newValue as number, marks[newValue as number - 1].label);
            }}
          />
        </div>
      </div>
      {isMobile && (
        <div className='row my-4 text-center'>
          <div className='col'>
            <span>
              Property Size: <strong>{valueLabelFormat(size)}</strong>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AGSlider;