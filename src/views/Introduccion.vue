<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.mb-5
  
      .row.mb-5.align-items-stretch
        .col-lg-4.mb-4.mb-lg-0
          .bg-color-2.p-4.tarjeta.h-100
            p.mb-0 En el desarrollo de software actual, caracterizado por constantes amenazas y vulnerabilidades, es crucial garantizar la confidencialidad, integridad y autenticidad de la información. Esta unidad busca dotar al estudiante de conocimientos sólidos sobre cifrado y autenticación, esenciales para construir sistemas confiables y seguros.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/intro/1.png", alt="")
        .col-lg-4
          .bg-color-7.p-4.tarjeta.h-100
            p.mb-0 Se estudian algoritmos de cifrado simétrico y asimétrico, como AES, DES, RSA y ECC, destacando sus funciones, ventajas y limitaciones en la protección de datos. Además, se analizan protocolos de autenticación como OAuth y SAML, útiles para verificar identidades y controlar accesos de forma segura.
  
  
      .bg-full-width.bg-color-1.mb-0
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              p.mb-0 La unidad también aborda el uso de certificados digitales en la infraestructura de clave pública (PKI), fundamentales para establecer confianza digital. Se explican procesos de generación, instalación, renovación y revocación de certificados, y su aplicación en entornos seguros como HTTPS y firmas digitales.
  
  
  </template>
