

export const baseUrl = () => {
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3333' : 'https://api.plushere.com.br';

  return url

}