import IconsSprite from './icons.svg';

const Icons = ({ name, size, className, color }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSprite}#icon-${name}`} />
    </svg>
  );
};

export default Icons;
