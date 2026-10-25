/**
 * Función para hacer scroll suave a una sección específica.
 * @param {string} sectionId - El ID de la sección a la que se desea hacer scroll.
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}