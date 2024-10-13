const removeSpecialCharacters = (str: string): string => {
  // Expressão regular que mantém apenas letras, números e espaços
  return str.replace(/[^\w\s]/gi, '');
};

export { removeSpecialCharacters };
