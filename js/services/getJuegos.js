/**
 * @returns Devuelve todos los juegos almacenados en el localStorage bajo la clave 'juegos'.
 */
export const getJuegos = () => {
    return JSON.parse(localStorage.getItem("juegos"));
};