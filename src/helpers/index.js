export const getYear = () => 
  Array.from( 
    new Array(20),
    (_, index) => ({id: (index + 1), name: new Date().getFullYear() - index})
  );
