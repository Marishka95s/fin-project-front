const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused ? '#FFFFFF' : 'inherit',
    paddingLeft: 20,
    paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    boxShadow: 'none',
    borderRadius: 20,
    backgroundColor: 'inherit',
    // backdropFilter: 'blur(50px)',
  }),
  menuList: provided => ({
    ...provided,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // backdropFilter: 'blur(50px)',
    borderRadius: 20,
    filter:
      'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 408,
    },
    height: 34,
  }),
  placeholder: provided => ({
    ...provided,
    color: '#BDBDBD',
    fontSize: 18,
    lineHeight: 1.44,
  }),
  valueContainer: provided => ({
    ...provided,
    paddingLeft: 20,
    paddingBottom: 10,
    maxHeight: 34,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  container: provided => ({
    ...provided,
    borderBottom: '1px solid #BDBDBD',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#4a56e2',
    },
    '&:focus': {
      borderColor: '#4a56e2',
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default customStyles;