const getTheme = color => {
  switch (color) {
    case 'red':
      return { primary: '#ff613d', dark: '#b2432a', light: '#ff9077' };
    case 'pink':
      return { primary: '#ff4bda', dark: '#b23499', light: '#ff81e5' };
    case 'orange':
      return { primary: '#ff9f00', dark: '#b26d00', light: '#ffd048' };
    case 'yellow':
      return { primary: '#ffcb00', dark: '#cca300', light: '#ffba4c' };
    case 'green':
      return { primary: '#51cd00', dark: '#398f00', light: '#85dc4c' };
    case 'turquoise':
      return { primary: '#00c79a', dark: '#008b6b', light: '#4cd7b7' };
    case 'blue':
      return { primary: '#37adff', dark: '#2678b2', light: '#73c4ff' };
    case 'purple':
      return { primary: '#af51f5', dark: '#7938ab', light: '#c685f8' };
    default:
      // 'pale beige'
      return { primary: '#c4b793', dark: '#898066', light: '#d5ccb3' };
  }
};

export default getTheme;
