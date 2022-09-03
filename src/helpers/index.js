export const getYear = () => 
  Array.from( 
    new Array(20),
    (_, index) => ({id: index, name: new Date().getFullYear() - index})
  );
