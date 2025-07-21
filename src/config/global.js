export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Cifrado y autenticación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Algoritmos de cifrado simétrico y asimétrico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos del cifrado en seguridad informática',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cifrado simétrico: concepto y funcionamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cifrado asimétrico: concepto y funcionamiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de autenticación (OAuth, SAML)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Introducción a la autenticación y autorización en sistemas seguros',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fundamentos de OAuth',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Fundamentos de SAML (<em>Security Assertion Markup Language</em>)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Comparación entre OAuth y SAML',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Implementación práctica y buenas prácticas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/1106511',
    },
    {
      referencia: 'Hernández Encinas, L. (2016). La criptografía: ( ed.). Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41843',
    },
    {
      referencia: 'Costas Santos, J. (2015). Seguridad y alta disponibilidad: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62477',
    },
    {
      referencia: 'González Manzano, L., & De Fuentes García-Romero de Tejada, J. M. (2023). Sistemas seguros de acceso y transmisión de datos. IFCT0109: (2 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232694',
    },
    {
      referencia: 'Gómez Vieites, Á. (2015). Sistemas seguros de acceso y transmisión de datos: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62465',
    },
    {
      referencia: 'González Manzano, L., & De Fuentes García-Romero de Tejada, J. M. (2023). Sistemas seguros de acceso y transmisión de datos. IFCT0109: (2 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232694',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado: 'proceso mediante el cual un sistema verifica que una persona o entidad es quien dice ser, utilizando credenciales como contraseñas, tokens o certificados digitales.'
    },
    {
      termino: 'Autoridad de certificación (CA)',
      significado: 'entidad confiable encargada de emitir, validar y revocar certificados digitales. Actúa como el núcleo de confianza dentro de la Infraestructura de Clave Pública (PKI).'
    },
    {
      termino: 'Certificado digital',
      significado: 'archivo electrónico que asocia una clave pública con la identidad de su propietario, garantizando la seguridad en procesos como el cifrado, la firma digital y la autenticación.'
    },
    {
      termino: 'Cifrado asimétrico',
      significado: 'método criptográfico que utiliza un par de claves (una pública y una privada) para proteger la información. La clave pública cifra los datos, y la privada los descifra.'
    },
    {
      termino: 'Cifrado simétrico',
      significado: 'técnica de cifrado donde se emplea la misma clave para cifrar y descifrar la información. Es más rápido que el cifrado asimétrico, pero requiere una forma segura de compartir la clave.'
    },
    {
      termino: 'Clave privada',
      significado: 'clave secreta utilizada en el cifrado asimétrico para descifrar mensajes cifrados con la clave pública o para firmar digitalmente. Debe mantenerse protegida en todo momento.'
    },
    {
      termino: 'Clave pública',
      significado: 'clave utilizada para cifrar datos en el esquema de cifrado asimétrico. Está disponible públicamente y se asocia con una clave privada correspondiente.'
    },
    {
      termino: 'Firma digital',
      significado: 'técnica criptográfica que garantiza que un mensaje o documento no ha sido alterado y que proviene de una fuente legítima. Se basa en el uso de claves públicas y privadas.'
    },
    {
      termino: 'OpenID Connect',
      significado: 'extensión del protocolo OAuth 2.0 que añade funciones de autenticación de usuarios. Permite a las aplicaciones confirmar la identidad de manera segura y estandarizada.'
    },
    {
      termino: 'OAuth 2.0',
      significado: 'protocolo de autorización que permite a aplicaciones acceder a recursos protegidos en nombre del usuario sin necesidad de compartir contraseñas directamente.'
    },
    {
      termino: 'PKI (Infraestructura de Clave Pública)',
      significado: 'conjunto de tecnologías, políticas y procedimientos para gestionar certificados digitales y claves criptográficas, facilitando comunicaciones seguras.'
    },
    {
      termino: 'SAML (Security Assertion Markup Language)',
      significado: 'estándar basado en XML utilizado para intercambiar información de autenticación y autorización entre diferentes sistemas de manera segura.'
    },
  ],
}
