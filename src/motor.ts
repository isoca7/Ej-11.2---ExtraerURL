export const extraerURLS = (texto: string) => {
  const patron = /<img\s[^>]*?src\s*=\s*(['"])(?<url>.*?)\1[^>]*?>/g;
  const urls :string [] = []
  if (texto) {
    const coincidencias = texto.match(patron);
    if (coincidencias) {
      coincidencias.forEach((match) => {
        const url = match.replace(/.*src="([^"]*)".*/, '$1');
        urls.push(url);
      });
    }
  }
 return urls   
}

  
