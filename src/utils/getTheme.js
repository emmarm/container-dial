const getTheme = color => {
  switch (color) {
    case 'red':
      return {
        primary: '#ff613d',
        dark: '#c52c11',
        light: '#ff936a'
      };
    case 'pink':
      return {
        primary: '#ff4bda',
        dark: '#c800a8',
        light: '#ff84ff'
      };
    case 'orange':
      return {
        primary: '#ff9f00',
        dark: '#c67000',
        light: '#ffd048'
      };
    case 'yellow':
      return {
        primary: '#ffcb00',
        dark: '#c79b00',
        light: '#fffe50'
      };
    case 'green':
      return {
        primary: '#51cd00',
        dark: '#009b00',
        light: '#8aff4c'
      };
    case 'turquoise':
      return {
        primary: '#00c79a',
        dark: '#00956c',
        light: '#5efbcb'
      };
    case 'blue':
      return {
        primary: '#37adff',
        dark: '#007ecb',
        light: '#7bdfff'
      };
    case 'purple':
      return {
        primary: '#af51f5',
        dark: '#7a1bc1',
        light: '#e583ff'
      };
    default:
      return {
        primary: '#333',
        dark: '#0c0c0c',
        light: '#5c5c5c'
      };
  }
};

export default getTheme;
