<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Algoritmos de cifrado simétrico y asimétrico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-15.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los algoritmos de cifrado simétrico y asimétrico constituyen pilares fundamentales en la seguridad de la información. El cifrado simétrico utiliza una única clave para cifrar y descifrar los datos, lo que lo hace rápido y eficiente, aunque presenta desafíos en la distribución segura de la clave. En contraste, el cifrado asimétrico emplea un par de claves una pública y otra privada permitiendo un intercambio seguro de información incluso entre partes que no se conocen previamente. Ambos métodos se complementan en sistemas modernos, donde la velocidad del cifrado simétrico se combina con la seguridad del cifrado asimétrico para lograr comunicaciones cifradas más robustas y confiables.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fundamentos del cifrado en seguridad informática
    
    p.mb-5 A continuación, se presenta un video que explora los fundamentos del cifrado en seguridad informática, destacando sus principios esenciales, tipos, aplicaciones y buenas prácticas en la protección de la información digital.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XNFNVFUHByw?si=a-BUqatmTEyIzO6L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Cifrado simétrico: concepto y funcionamiento
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El cifrado simétrico es una técnica de protección de la información que utiliza una única clave secreta para transformar datos legibles (texto plano) en datos codificados (texto cifrado) y viceversa (Hernández Encinas, 2016). Tanto el emisor como el receptor deben poseer la misma clave para que la comunicación sea exitosa. Este método destaca por su velocidad y eficiencia, especialmente en el manejo de grandes volúmenes de datos.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Principio de funcionamiento
        p El proceso consta de dos etapas principales: 
    
        .bg-color-16.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Cifrado</b>: el remitente convierte el mensaje original en texto cifrado utilizando un algoritmo y la clave secreta.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Descifrado</b>: el receptor utiliza la misma clave y algoritmo para recuperar el mensaje original.
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 A diferencia del cifrado asimétrico, que emplea claves distintas, el simétrico depende exclusivamente de la protección y distribución segura de una única clave compartida.
      
    h2.mb-5(data-aos="fade-left") Ejemplo ilustrativo

    .bg-full-width.bg-color-6
      .p-4.px-md-5
        .bg-color-7.mb-5
          .p-4.px-md-5
            .row.align-items-center
              .col-lg-auto.order-2
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 190px").mx-auto
              .col-lg.order-1.mb-3.mb-lg-0
                p.mb-0 Imaginemos una empresa que necesita enviar archivos confidenciales a su sede internacional. Ambas partes acuerdan previamente una clave secreta: ABC123!. El remitente cifra el archivo con esa clave, y el destinatario, que ya la conoce, la emplea para descifrarlo. Si un tercero intercepta el archivo sin conocer la clave, no podrá acceder a su contenido (Hernández Encinas, 2016).
        
        h2(data-aos="fade-left") Algoritmos comunes de cifrado simétrico
        p.mb-5 A continuación, se presentan los algoritmos más representativos del cifrado simétrico:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 AES (Advanced Encryption Standard)
                p.mb-0 Estándar moderno, rápido y muy seguro. Usado por gobiernos, empresas y servicios en la nube.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 DES (<em>Data Encryption Standard</em>)
                p.mb-0 Popular en el pasado, pero hoy considerado obsoleto por sus vulnerabilidades.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 3DES (Triple DES)
                p.mb-0 Mejora del DES, aunque también ha sido superado por AES en seguridad y eficiencia.

    p.mb-5 Las ventajas del cifrado simétrico son: 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Rendimiento eficiente
              p.mb-0 Ideal para cifrar grandes cantidades de datos rápidamente.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Implementación sencilla
              p.mb-0 Su lógica es directa y fácil de aplicar con herramientas estándar (Ortega Candel, 2018).
    
    p.mb-5 Las desventajas del cifrado simétrico son:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Distribución de claves
              p.mb-0 El principal reto es compartir la clave de forma segura.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Falta de autenticación
              p.mb-0 No verifica la identidad del remitente por sí solo.
    
    h2(data-aos="fade-left") Ámbitos de aplicación
    p.mb-5 El cifrado simétrico se utiliza en diversos contextos, como:

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Almacenamiento cifrado en discos duros o unidades USB.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Comunicaciones internas entre servidores o procesos. 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Archivos comprimidos con contraseña (ZIP cifrados).
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Sistemas de bases de datos que protegen campos sensibles.
              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Seguridad Informática. 
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Autor desconocido. (2021, marzo). [Ilustración relacionada con seguridad informática] [Imagen]. GSDTIC Trabajo Seguridad Informática. 

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Cifrado asimétrico: concepto y funcionamiento
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.text-white.p-4.h-100(data-aos="fade-left")
          p.mb-0 El cifrado asimétrico, también conocido como criptografía de clave pública, es un método de protección de la información que utiliza dos claves diferentes pero relacionadas matemáticamente: una clave pública y una clave privada (Ortega Candel, 2018). La clave pública se distribuye libremente, mientras que la clave privada se mantiene en secreto. Este sistema garantiza tanto confidencialidad como autenticación, ya que lo cifrado con una clave solo puede ser descifrado con la otra.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Principio de funcionamiento
        p Este tipo de cifrado opera con la siguiente lógica:
    
        .bg-color-17.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Cifrado con clave pública</b>. Cualquier persona puede cifrar un mensaje utilizando la clave pública del destinatario.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Descifrado con clave privada</b>. Solo el destinatario, que posee la clave privada correspondiente, puede descifrar el mensaje.
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-0 Además, permite la verificación de identidad y la firma digital, ya que también es posible cifrar con la clave privada para que cualquiera pueda descifrar con la clave pública y confirmar el origen del mensaje.

    h2.mb-5(data-aos="fade-left") Ejemplo ilustrativo

    .bg-full-width.bg-color-6
      .p-4.px-md-5
        .bg-color-12.mb-5
          .p-4.px-md-5
            .row.align-items-center
              .col-lg-auto.order-2
                img(src="@/assets/curso/tema3/17.svg", style="max-width: 190px").mx-auto
              .col-lg.order-1.mb-3.mb-lg-0
                p.mb-0 Supongamos que Ana quiere enviar un mensaje seguro a Luis. Luis le proporciona su clave pública. Ana la utiliza para cifrar el mensaje, que luego envía. Si un tercero lo intercepta, no podrá entenderlo, ya que solo Luis tiene la clave privada necesaria para descifrarlo. Asimismo, si Luis quiere asegurar a Ana que el mensaje es auténtico, puede firmarlo con su clave privada, y Ana podrá verificarlo con la clave pública de Luis.
        
        h2(data-aos="fade-left") Algoritmos comunes de cifrado asimétrico
        p.mb-5 A continuación se presentan algunos de los algoritmos más utilizados:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/18.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 RSA
                p.mb-0 Uno de los algoritmos más extendidos. Muy utilizado para el intercambio seguro de datos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/19.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 ECC (<em>Elliptic Curve Cryptography</em>)
                p.mb-0 Proporciona seguridad similar a RSA con claves más pequeñas, ideal para dispositivos con recursos limitados.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/20.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 DSA (<em>Digital Signature Algorithm</em>)
                p.mb-0 Especialmente diseñado para la creación de firmas digitales y autenticación.

    p.mb-5 Las ventajas del cifrado asimétrico son:

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Seguridad en la distribución de claves</b>. No es necesario compartir claves privadas, lo que disminuye los riesgos de filtración.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Autenticación y no repudio</b>. Permite verificar la identidad del remitente y garantizar que el mensaje no ha sido alterado (Ortega Candel, 2018). 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Apropiado para comunicaciones abiertas</b>. Funciona bien incluso cuando los usuarios no se conocen previamente.
              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p.mb-5(data-aos="fade-left") Las desventajas del cifrado asimétrico son:
    
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Mayor complejidad y menor velocidad</b>. El proceso de cifrado y descifrado es más lento que en el cifrado simétrico.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Mayor demanda computacional</b>. Requiere más recursos, por lo que no resulta eficiente para grandes volúmenes de datos.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/23.png", data-aos="zoom-in")
      .col-lg-7
        h2(data-aos="fade-left") Ámbitos de aplicación
        p.mb-5 El cifrado asimétrico se emplea en diversos entornos:
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Protocolos de seguridad en internet, como <b>HTTPS</b> y <b>TLS</b>.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Correos electrónicos cifrados y firmas digitales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Sistemas de autenticación y gestión de identidades.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Infraestructura de clave pública (PKI).

    .bg-full-width.bg-color-11.mb-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Comparación entre cifrado simétrico y asimétrico: fundamentos, usos y herramientas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Comparación entre cifrado simétrico y asimétrico, donde se aborda de forma detallada los fundamentos, diferencias clave, aplicaciones prácticas y herramientas asociadas a ambos métodos de cifrado.  
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación entre cifrado simétrico y asimétrico: fundamentos, usos y herramientas
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/24.png', alt='')








    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40458 " target="_blank" rel="noopener noreferrer") Baca Urbina, G. (2016). Introducción a la seguridad informática: ( ed.). Grupo Editorial Patria.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=5BYhdr5n3es  " target="_blank" rel="noopener noreferrer") AlbertoLopez TECH TIPS. [@AlbertoLopezVLOG] (2020, 2 de diciembre). Cifrado SIMÉTRICO y ASIMÉTRICO  5 DIFERENCIAS | Seguridad de la información. [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
