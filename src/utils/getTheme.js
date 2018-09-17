const getTheme = color => {
  switch (color) {
    case 'red':
      return { primary: '#ff613d', dark: '#B2432A', light: '#FF9077' };
    case 'pink':
      return { primary: '#ff4bda', dark: '#B23499', light: '#FF81E5' };
    case 'orange':
      return { primary: '#ff9f00', dark: '#B26D00', light: '#ffd048' };
    case 'yellow':
      return { primary: '#ffcb00', dark: '#cca300', light: '#FFBA4C' };
    case 'green':
      return { primary: '#51cd00', dark: '#398F00', light: '#85DC4C' };
    case 'turquoise':
      return { primary: '#00c79a', dark: '#008B6B', light: '#4CD7B7' };
    case 'blue':
      return { primary: '#37adff', dark: '#2678B2', light: '#73C4FF' };
    case 'purple':
      return { primary: '#af51f5', dark: '#7938AB', light: '#C685F8' };
    default:
      return { primary: '#C4B793', dark: '#898066', light: '#D5CCB3' };
  }
};

export default getTheme;
