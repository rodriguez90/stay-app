export const regularExpresions = {
    Nombre: '(([a-zA-Z]+)|([a-zA-Z]+[ ]{0,1}[a-zA-Z]+))+',
    NombreCompuesto: '[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+',
    NombreUsuario: '([a-zA-Z]+)',
    CedulaPeru: '[A-Z0-9]+$',
    SoloUnDigito: '^[0-9]$',
    NumeroTelefono: '^\\d{10}$',
    Digitos: '^\\d+$',
    IMEI: '^\\d{15}$'
};
