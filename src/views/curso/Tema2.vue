<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Protocolos de autenticación (OAuth, SAML)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.h-100(data-aos="fade-left")
          p.mb-0 Los protocolos de autenticación como OAuth y SAML desempeñan un papel esencial en la seguridad de los sistemas informáticos modernos al permitir el acceso controlado a recursos digitales sin comprometer las credenciales del usuario. Mientras OAuth facilita la autorización delegada entre aplicaciones mediante el uso de tokens temporales, SAML se orienta a la autenticación federada basada en XML, permitiendo que las identidades se validen entre dominios distintos. Ambos mecanismos garantizan que los usuarios accedan a servicios de forma segura, minimizando riesgos y fortaleciendo el control de acceso en entornos distribuidos, como plataformas en la nube o sistemas empresariales integrados (González Manzano & De Fuentes García-Romero de Tejada, 2023).
    
    .titulo-figura.mb-4
      h5 Figura 2.
      span OAuth 2.0 Workflow  
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Deviniciative. (2023, mayo). [Esquema visual sobre desarrollo de <em><em>SOFTWARE</em></em>] [Imagen]. Dev Initiative. 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Introducción a la autenticación y autorización en sistemas seguros
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/3.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") En el ámbito de la seguridad informática, la autenticación y la autorización representan dos procesos fundamentales para garantizar que los usuarios accedan a los recursos adecuados, con los permisos correctos y dentro de un entorno protegido contra accesos indebidos. Aunque a menudo se utilizan de forma conjunta, estos términos hacen referencia a etapas distintas dentro del control de acceso en sistemas seguros.
    
    h2(data-aos="fade-left") Autenticación: identificación de la identidad
    p.mb-5 La autenticación consiste en verificar que el usuario, sistema o dispositivo que solicita acceso es quien afirma ser (Costas Santos, 2015). Tradicionalmente, esto se realiza mediante credenciales como el nombre de usuario y la contraseña. Sin embargo, hoy en día es común implementar mecanismos más avanzados:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Autenticación de dos factores (2FA)
              p.mb-0 Por ejemplo, introducir una contraseña seguida de un código enviado al teléfono móvil.
        .bg-color-11.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Autenticación biométrica
              p.mb-0 Uso de huellas dactilares, reconocimiento facial o escaneo de iris.
        .bg-color-11.p-3.mb-3(data-aos="fade-left")
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Certificados digitales
              p.mb-0 Utilizados especialmente en redes empresariales o plataformas gubernamentales.
       
    .bg-full-width.bg-color-7.mb-5
      .p-4.px-md-5.py-4
        p.mb-0 Un ejemplo cotidiano es cuando un empleado intenta acceder a un sistema empresarial y debe introducir su correo institucional y contraseña. Si los datos coinciden con los registros del servidor, el sistema le permite el acceso.

    .bg-full-width.bg-color-5
      .p-4.px-md-5
        h2(data-aos="fade-left") Autorización: control del acceso
        p.mb-5 Una vez autenticado, el sistema debe determinar qué recursos puede usar el usuario y qué acciones puede realizar (Costas Santos, 2015). A este proceso se le conoce como autorización, y su aplicación depende del modelo de seguridad utilizado. A continuación, se presentan los modelos más comunes:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 RBAC (<em>Role-Based Access Control</em>)
                p.mb-0 Los permisos se asignan según el rol del usuario (ej. administrador, editor, lector).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/9.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 ABAC (<em>Attribute-Based Access Control</em>)
                p.mb-0 Las decisiones se basan en atributos del usuario, del recurso y del entorno (ej. ubicación, tipo de dispositivo).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/10.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 ACL (<em>Access Control List</em>)
                p.mb-0 Define de manera explícita qué usuarios o grupos pueden acceder a determinados recursos.

    .bg-full-width.bg-color-1.mb-5
      .p-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Por ejemplo, en un sistema académico, un profesor puede tener autorización para subir calificaciones, pero no para modificar datos financieros del estudiante, tarea reservada al personal administrativo.

    h2.mb-5(data-aos="fade-left") Relación entre autenticación y autorización

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Es crucial entender que la autorización solo puede realizarse después de una autenticación exitosa. No basta con conocer la identidad del usuario; también es necesario definir lo que tiene permitido hacer. Esta separación permite construir sistemas más seguros, modulares y escalables (Costas Santos, 2015).
    
        .bg-color-12.p-5(data-aos="fade-left")
          h5 Importancia en sistemas seguros
          p.mb-0 Un fallo en la autenticación puede permitir que un intruso acceda al sistema suplantando a otro usuario. Por otro lado, un error en la autorización podría dar a un usuario legítimo permisos indebidos, como borrar archivos o consultar información confidencial. Por ello, estos procesos deben diseñarse cuidadosamente, incorporando buenas prácticas como cifrado de contraseñas, auditorías de acceso y actualización constante de políticas de seguridad (González Manzano & De Fuentes García-Romero de Tejada, 2023).

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Fundamentos de OAuth
    
    p.mb-5 OAuth (O<em>Open Authorization</em>) es un protocolo de autorización estándar y abierto que permite a las aplicaciones acceder a recursos protegidos en nombre del usuario, sin necesidad de compartir sus credenciales. Es ampliamente utilizado en sistemas modernos para facilitar un acceso seguro y controlado a APIs, servicios <em>web</em> y plataformas digitales.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") ¿Qué es OAuth?
        p.mb-5 OAuth no es un mecanismo de autenticación (aunque puede complementarse con uno), sino un marco de autorización que permite a un usuario conceder a una aplicación de terceros un acceso limitado a sus recursos, sin necesidad de entregar su contraseña. En lugar de compartir credenciales, el usuario otorga un token de acceso que la aplicación puede usar para realizar acciones autorizadas.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Por ejemplo, al iniciar sesión en una aplicación externa usando una cuenta de Google, la app no obtiene la contraseña del usuario. En su lugar, Google emite un token temporal que permite acceder a ciertos datos, como el nombre y el correo electrónico del usuario (González Manzano & De Fuentes García-Romero de Tejada, 2023).

    .bg-full-width.bg-color-5
      .p-4.px-md-5
        h2(data-aos="fade-left") Componentes principales de OAuth
        p.mb-5 El funcionamiento de OAuth se basa en la interacción de los siguientes elementos:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/14.svg" alt="" style="width: 90px")
              h5.text-center Propietario del recurso (<em>Resource Owner</em>)
              p.mb-0.text-center Usuario final que posee los datos o recursos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/15.svg" alt="" style="width: 90px")
              h5.text-center Servidor de recursos (<em>Resource Server</em>)
              p.mb-0.text-center Entidad que aloja los datos del usuario (por ejemplo, Google o Facebook).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/16.svg" alt="" style="width: 90px")
              h5.text-center <em>Client</em>e (<em>Client</em>)
              p.mb-0.text-center Aplicación que solicita acceso a los recursos (como una app móvil).
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/17.svg" alt="" style="width: 90px")
              h5.text-center Servidor de autorización (<em>Authorization Server</em>)
              p.mb-0.text-center Autentica al usuario y emite los tokens de acceso.
    
    p.mb-5 Estos componentes colaboran mediante flujos definidos para garantizar un acceso seguro y segmentado (Costas Santos, 2015).

    h2(data-aos="fade-left") Flujos (<em>grant types</em>) de OAuth
    p.mb-5 OAuth define distintos flujos de autorización, que se emplean según el tipo de aplicación y contexto de seguridad:

    .bg-full-width.bg-color-7.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b><em>Authorization Code Flow</em></b>. Utilizado en aplicaciones <em>web</em> del lado del servidor. Es el más seguro, pues requiere un paso adicional para obtener el token.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b><em>Implicit Flow (obsoleto)</em></b>: Antiguamente usado en apps del lado del <em>client</em>e; actualmente desaconsejado por razones de seguridad.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b><em><em>Client</em> Credentials Flow</em></b>: Se emplea cuando la aplicación accede a sus propios recursos sin intervención del usuario.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b><em><em>Resource Owner</em> Password Credentials Flow</em></b>. Usa directamente las credenciales del usuario; se recomienda solo en entornos altamente confiables.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Una aplicación de edición de imágenes desea acceder a las fotos de un usuario almacenadas en Google. El flujo sería el siguiente:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El usuario es redirigido al servidor de autorización de Google.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Google solicita iniciar sesión y aceptar los permisos solicitados.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Al aceptar, se emite un código de autorización hacia la app.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La app intercambia ese código por un token de acceso.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Finalmente, la app usa el token para recuperar las imágenes desde el servidor de recursos.
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 En todo el proceso, la contraseña del usuario nunca es compartida, lo que reduce significativamente el riesgo de exposición.

    .bg-full-width.bg-color-6.mb-5
      .p-4.px-md-5
        p.mb-5 Las ventajas del uso de OAuth son: 
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/20.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Mayor seguridad
                p.mb-0 Al no compartir credenciales, se reduce el riesgo de suplantación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/21.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Acceso limitado
                p.mb-0 Los tokens pueden restringirse a recursos específicos y a un tiempo definido.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/22.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Revocación sencilla
                p.mb-0 El usuario puede revocar el token sin comprometer toda su cuenta.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/23.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Experiencia fluida
                p.mb-0 Permite el inicio de sesión único (<em>Single Sign-On</em>, SSO) en múltiples aplicaciones.
    
    p OAuth se ha consolidado como estándar clave para la autorización segura entre servicios, especialmente en entornos con múltiples sistemas integrados. Su correcta implementación resulta esencial para proteger la integridad y privacidad de los datos del usuario (Costas Santos, 2015).

    .titulo-figura.mb-4
      h5 Figura 3.  
      span Esquema gráfico sobre transformación digital en empresas
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/24.png", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Sngular. (s.f.). [Esquema gráfico sobre transformación digital en empresas] 

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Fundamentos de SAML (<em>Security Assertion Markup Language</em>)
    
    p.mb-5 SAML (<em>Security Assertion Markup Language</em>) es un estándar abierto basado en XML que permite el intercambio seguro de información de autenticación y autorización entre dominios distintos. Diseñado principalmente para entornos empresariales, facilita la implementación del inicio de sesión único (<em>Single Sign-On</em>, SSO), permitiendo a los usuarios acceder a múltiples servicios o aplicaciones mediante una única autenticación (González Manzano & De Fuentes García-Romero de Tejada, 2023).

    h2.mb-5(data-aos="fade-left") ¿Qué es SAML?

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/25.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 SAML actúa como un puente de confianza entre dos entidades principales: el Proveedor de Identidad (IdP), que autentica al usuario, y el Proveedor de Servicio (SP), que ofrece la aplicación o servicio al cual se desea acceder. El usuario se autentica una sola vez ante el IdP y, gracias a esa autenticación, puede ingresar sin repetir credenciales en distintos servicios que confían en ese proveedor.
    
    h2(data-aos="fade-left") Componentes principales de SAML
    p.mb-5 El funcionamiento de SAML involucra varios elementos clave:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/27.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="33.5%" numero="+")
                h5 Usuario (Sujeto)
                p Persona que intenta acceder a un recurso protegido.
    
              .bg-color-white.box-shadow.p-3(x="31%" y="18%" numero="+")
                h5 Proveedor de Identidad (IdP)
                p Autentica al usuario y emite las aserciones SAML con información sobre su identidad y permisos.
    
              .bg-color-white.box-shadow.p-3(x="70%" y="16%" numero="+")
                h5 Proveedor de Servicio (SP)
                p Recibe las aserciones y otorga acceso según los datos recibidos.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="34%" numero="+")
                h5 Aserción SAML
                p Documento XML firmado digitalmente que contiene los datos de autenticación del usuario, como nombre, correo electrónico y roles.
    
    h2(data-aos="fade-left") Funcionamiento básico
    p.mb-5 El flujo de autenticación típico con SAML incluye los siguientes pasos:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/29.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-2.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El usuario intenta acceder a un servicio <em>web</em> (SP).
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El SP redirige al usuario al IdP para autenticación.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El usuario se autentica ante el IdP (ej. usuario y contraseña institucional).
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El IdP genera una aserción <b>SAML firmada digitalmente</b> con los datos del usuario.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El SP valida la aserción y, si es válida, concede el acceso al recurso.
    
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Una organización empresarial utiliza múltiples aplicaciones <em>web</em> (correo, CRM, intranet), todas integradas bajo un sistema SSO. Al iniciar sesión en el portal institucional (IdP), un empleado puede acceder sin autenticarse nuevamente a las demás aplicaciones (SP). Cada servicio verifica la aserción SAML emitida por el IdP antes de permitir el acceso, lo cual garantiza un control unificado. Los beneficios de SAML son:

    .bg-full-width.bg-color-12.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Inicio de sesión único (SSO)</b>: Mejora la experiencia del usuario y disminuye la carga de recordar múltiples contraseñas.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Interoperabilidad</b>: Compatible con múltiples tecnologías, independientemente del lenguaje o plataforma.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Seguridad robusta</b>: Las aserciones están firmadas digitalmente, lo que protege la integridad y autenticidad de los datos.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Control centralizado</b>: La gestión de identidades se realiza desde el IdP, facilitando la administración y auditoría (González Manzano & De Fuentes García-Romero de Tejada, 2023).
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/30.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
         
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/31.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Casos de uso comunes
        p.mb-5 SAML se aplica ampliamente en:
    
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Acceso a plataformas universitarias (campus virtual, bibliotecas, correo institucional) con un solo inicio de sesión.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Integración entre servicios en la nube y sistemas internos empresariales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Plataformas educativas que permiten iniciar sesión mediante credenciales institucionales basadas en SAML.

    .titulo-figura.mb-4
      h5 Figura 4.
      span SAML.
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/32.png", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Entrust. (s.f.). SAML <em>flow illustration</em> [Imagen]. Entrust.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Comparación entre OAuth y SAML
    
    p.mb-5 OAuth y SAML son dos estándares ampliamente utilizados para la gestión de acceso seguro en sistemas y aplicaciones. Aunque ambos permiten implementar <em>Single Sign-On</em> (SSO), fueron diseñados con propósitos distintos y operan bajo tecnologías diferentes. Su elección depende del tipo de entorno, los requisitos de seguridad y la experiencia del usuario (Costas Santos, 2015).

    h2.mb-5(data-aos="fade-left") Propósito y enfoque

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p SAML fue desarrollado principalmente como un protocolo de autenticación, cuya función es verificar la identidad del usuario y transmitirla de forma segura a las aplicaciones de terceros (<em>Service Providers</em>). En cambio, OAuth fue concebido como un mecanismo de autorización, cuyo fin es permitir que una aplicación acceda a recursos del usuario en otro servicio sin que este comparta sus credenciales.
                h5 Por ejemplo:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Si un empleado accede a un sistema corporativo a través del portal institucional, está utilizando SAML.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Si un usuario permite que una app de calendario acceda a su cuenta de Google para ver sus eventos, está usando OAuth.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/33.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación técnica y funcional
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr.text-center
            th.bg-color-13.text-white Criterio
            th.bg-color-13.text-white SAML
            th.bg-color-13.text-white OAuth
        tbody.bg-color-9
          tr
            td Tipo de protocolo
            td Autenticación
            td Autorización
          tr
            td Formato de datos
            td XML
            td JSON (usualmente JWT)
          tr
            td Método de comunicación
            td Redirecciones del navegador (browser-based)
            td Entornos <em>web</em>, móviles y APIs
          tr
            td SSO
            td Sí, especialmente en entornos institucionales
            td Sí, en integraciones modernas con terceros
          tr
            td Casos de uso comunes
            td Portales empresariales, educativos, institucionales
            td Apps móviles, acceso a APIs, servicios en la nube
          tr
            td Experiencia de usuario
            td Acceso automático a servicios tras un inicio de sesión institucional
            td El usuario autoriza explícitamente el acceso a partes específicas de su información
          tr
            td Seguridad
            td Control centralizado, robusto en identidad
            td Flexible, pero requiere cuidadosa configuración para evitar vulnerabilidades

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/34.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-5 Los casos de uso comunes son: 
    
        .bg-color-12.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>SAML</b> es preferido en entornos empresariales y educativos, donde múltiples aplicaciones internas comparten el mismo proveedor de identidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>OAuth</b> es ideal para aplicaciones móviles, servicios en la nube o integraciones entre plataformas modernas, como iniciar sesión en una app usando cuentas de Google o Facebook.
    
    h2.mb-5(data-aos="fade-left") Experiencia del usuario
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/35.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1

        p Ambos protocolos permiten una experiencia de SSO, pero con diferencias:
    
        .bg-color-17.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Con SAML, el usuario inicia sesión en su sistema institucional y accede automáticamente a los servicios autorizados (González Manzano & De Fuentes García-Romero de Tejada, 2023).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Con OAuth, el usuario concede permisos específicos y puede revocar el acceso en cualquier momento.

    h2.mb-5(data-aos="fade-left") Seguridad

    .bg-color-2.mb-5
      .p-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/36.svg", style="max-width: 190px").mx-auto
          .col-lg.mb-3.mb-lg-0
            p.mb-0 SAML ofrece un modelo más centralizado y robusto para autenticación y gestión de identidades. Por su parte, OAuth es más flexible, pero requiere atención especial en la gestión de tokens y en prevenir ataques como el phishing (Costas Santos, 2015).

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] <em>OpenID Connect</em>: extensión moderna de OAuth 2.0

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/37.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") OpenID Connect (OIDC) es una capa de identidad construida sobre el protocolo de autorización OAuth 2.0, diseñada para agregar funcionalidades de autenticación federada a aplicaciones modernas. Mientras que OAuth 2.0 permite únicamente la autorización segura a recursos protegidos, OIDC amplía ese marco para incluir el inicio de sesión del usuario y la obtención de su información de identidad de forma estandarizada y segura (Costas Santos, 2015).

    h2(data-aos="fade-left") ¿Qué aporta OIDC a OAuth 2.0?
    p.mb-5 OAuth 2.0 no puede autenticar usuarios por sí solo; solo gestiona el acceso. OIDC introduce el concepto de ID Token, un token en formato JWT (JSON <em>web</em> Token) que contiene información verificada del usuario autenticado, como su identificador único, nombre y correo electrónico. Este token, generado por el proveedor de identidad (como Google, Microsoft o Auth0), permite que la aplicación <em>client</em>e confíe en la identidad del usuario sin manejar directamente sus credenciales (González Manzano & De Fuentes García-Romero de Tejada, 2023).

    h2(data-aos="fade-left") ¿Cómo funciona OpenID Connect?
    p.mb-5 El flujo básico de OIDC sigue estos pasos:

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    p.mb-0 <b>a)</b>	El usuario intenta iniciar sesión en una aplicación <em>client</em>e.
                  li.mb-0.d-flex
                    p.mb-0 <b>b)</b>	La aplicación redirige al usuario al proveedor de identidad (por ejemplo, Google).
                  li.mb-0.d-flex
                    p.mb-0 <b>c)</b>	El usuario se autentica en dicho proveedor.
                  li.mb-0.d-flex
                    p.mb-0 <b>d)</b>	El proveedor emite dos tokens: un ID Token con los datos del usuario y un Access Token para recursos protegidos.
                  li.mb-0.d-flex
                    p.mb-0 <b>e)</b>	La aplicación valida el ID Token y permite el ingreso del usuario.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema4/38.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11
        p.banner-text Este mecanismo posibilita la <b>autenticación única (SSO)</b> entre múltiples plataformas sin que las aplicaciones almacenen contraseñas (González Manzano & De Fuentes García-Romero de Tejada, 2023).
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Ventajas de <em>OpenID Connect</em>
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr.text-center
            th.bg-color-13.text-white Ventaja
            th.bg-color-13.text-white Descripción
        tbody.bg-color-9
          tr
            th Simplicidad
            td Implementación directa mediante bibliotecas modernas.
          tr
            th Seguridad
            td Utiliza tokens firmados digitalmente y flujos seguros.
          tr
            th Interoperabilidad
            td Permite confiar en una identidad común entre múltiples sistemas.
          tr
            th Escalabilidad
            td Soporta aplicaciones <em>web</em>, móviles, APIs y dispositivos IoT.


    h2.mb-5(data-aos="fade-left") Casos de uso comunes

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/39.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p OIDC se emplea para: 
    
        .bg-color-16.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Iniciar sesión en aplicaciones mediante cuentas sociales como Google, Facebook o Microsoft.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Integrar SSO en plataformas empresariales con múltiples sistemas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Conectar apps móviles a servicios de usuario sin gestionar contraseñas
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 OpenID Connect ha transformado la gestión de identidad digital en aplicaciones modernas, al ofrecer una solución simple, segura y estandarizada basada en OAuth 2.0. Su compatibilidad con tecnologías actuales, el respaldo de grandes proveedores y su capacidad de federación lo posicionan como el estándar preferido para autenticación en entornos distribuidos (González Manzano & De Fuentes García-Romero de Tejada, 2023).

    #t_4_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.6] Implementación práctica y buenas prácticas

    p.mb-5 La implementación de <em>OpenID Connect</em> (OIDC) permite integrar en una aplicación <em>client</em>e un sistema de autenticación seguro y estandarizado, basado en un proveedor externo de identidad (Costas Santos, 2015). Este proceso implica comprender el flujo de autenticación, configurar correctamente los elementos técnicos clave y aplicar buenas prácticas que garanticen integridad, confidencialidad y una experiencia de usuario sólida.

    h2(data-aos="fade-left") Implementación práctica paso a paso
    p.mb-5 El flujo típico para adoptar OIDC en una aplicación incluye las siguientes etapas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/40.png")
            .col-lg-7
              h5 A.	Registro de la aplicación
              p El desarrollador registra la app en el portal del proveedor de identidad (Google, Auth0, Azure AD), obteniendo un <em>Client</em> ID y un <em>Client</em> Secret.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/41.png")
            .col-lg-7
              h5 B.	Configuración del proveedor OIDC
              p Se define el <em>redirect</em> URI (URL de redirección tras autenticación) y los scopes requeridos como openid, profile, email.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/42.png")
            .col-lg-7
              h5 C.	Inicio del flujo de autenticación
              p La app redirige al usuario a la URL de autorización del proveedor, incluyendo <em>client</em>_id, scope, redirect_uri y state para prevenir ataques CSRF.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/43.png")
            .col-lg-7
              h5 D.	Autenticación del usuario
              p El usuario se autentica directamente en el proveedor de identidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/44.png")
            .col-lg-7
              h5 E.	Recepción del token
              p Tras autenticarse, el proveedor redirige al <em>client</em>e con un código de autorización que se intercambia por un <b>ID Token</b> y un <b><em>Access Token</em></b>.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/45.png")
            .col-lg-7
              h5 F.	Validación y creación de sesión
              p La app valida el <b>ID Token</b> (firma, emisor, vencimiento) y crea la sesión interna del usuario autenticado.

    h2(data-aos="fade-left") Recomendaciones para una implementación segura
    p.mb-5 A continuación, se presentan las principales buenas prácticas para una adopción segura y eficiente de <em>OpenID Connect</em>:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/46.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Validar el ID Token")
            p Verificar la firma, aud (audiencia), iss (emisor) y vencimiento (exp). 
    
          .div(titulo="Usar HTTPS")
            p Todo el flujo debe realizarse sobre conexiones cifradas para proteger tokens y credenciales.
    
          .div(titulo="Controlar state y nonce")
            p El parámetro state evita CSRF; nonce protege contra ataques de replay.
    
          .div(titulo="Almacenamiento seguro de tokens")
            p Evitar localStorage; usar cookies seguras con HttpOnly.
          

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/47.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Gestión de sesiones")
            p Controlar expiración, permitir cierre remoto y renovar tokens cuando sea necesario.
    
          .div(titulo="Controlar permisos por scopes")
            p Solicitar solo los permisos estrictamente necesarios.
    
          .div(titulo="Auditoría y monitoreo")
            p Registrar accesos, errores y comportamientos anómalos en el flujo de autenticación.
    
    h2.mb-5(data-aos="fade-left") Ejemplo de uso práctico.

    .bg-color-7.mb-5
      .p-4.px-md-5
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema4/48.svg", style="max-width: 190px").mx-auto
          .col-lg.mb-3.mb-lg-0.order-1
            p.mb-0 Una empresa desarrolla una plataforma <em>web</em> para la gestión de empleados. En lugar de implementar un sistema propio de autenticación, decide integrar OpenID Connect con <b>Azure Active Directory</b>. Cada vez que un empleado accede, es redirigido a Microsoft para iniciar sesión. Tras validar su identidad, se devuelve un <b>ID Token</b>, que la aplicación usa para identificar al usuario y aplicar políticas de acceso según su cargo (por ejemplo, recursos humanos, finanzas o TI) (Costas Santos, 2015).
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white.order-lg-2
            h2.mb-4(data-aos="flip-up") Manejo de certificados digitales
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Manejo de certificados digitales, donde se aborda el papel esencial de los certificados digitales en la seguridad de las comunicaciones electrónicas.   
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Manejo de certificados digitales
    
          .col-lg-4.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/49.png', alt='')
    
    h2.mb-5(data-aos="fade-left") Pongamos en práctica

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/50.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") En este capítulo, se presenta un recurso audiovisual enfocado en la comprensión del protocolo OAuth, una de las soluciones más utilizadas actualmente para gestionar la autenticación y autorización segura en aplicaciones <em>web</em> y móviles. El video introduce los fundamentos de OAuth, explicando cómo permite que un usuario autorice a una aplicación a acceder a sus datos sin compartir sus credenciales directamente.
    
        .bg-color-12.p-4(data-aos="fade-left")
          p.mb-0 Mediante ejemplos prácticos, se ilustran los flujos más comunes de OAuth, como el flujo de autorización y el flujo de <em>client</em>e confidencial, destacando la interacción entre los actores principales: el recurso, el propietario del recurso, el <em>client</em>e y el servidor de autorización. Se detalla cómo este mecanismo fortalece la seguridad y mejora la experiencia del usuario al integrarse con servicios de terceros (como Google o Facebook) sin comprometer su privacidad.
    
    .bg-full-width.bg-color-1.mb-5
      .p-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/51.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este material permite al estudiante adquirir una visión clara de cómo implementar esquemas de autenticación modernos, seguros y escalables. Comprender el funcionamiento de OAuth es esencial para diseñar aplicaciones que cumplan con estándares actuales de protección de datos y control de accesos.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/44101 " target="_blank" rel="noopener noreferrer") Chicano Tejada, E. (2015). Gestión de incidentes de seguridad informática (MF0488_3): ( ed.). IC Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50603 " target="_blank" rel="noopener noreferrer") Guillamón Morales, A. (2013). Manual desarrollo de elementos <em>software</em> para gestión de sistemas: ( ed.). Editorial CEP, S.L. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GeXbsMezj8s&t=30s " target="_blank" rel="noopener noreferrer") Open<em>web</em>inars. [@open<em>web</em>inarsnet] (2019, 16 de diciembre). QUÉ ES OAUTH 2. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.youtube.com/watch?v=ry2i9dXonxU  " target="_blank" rel="noopener noreferrer") Unidad de Innovación UMU. [@UnidadInnova] (2013, 30 de enero). Certificados digitales Parte 1. [Video]. YouTube.




          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'SEGURIDAD DE <em>SOFTWARE</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes características distingue al cifrado asimétrico del simétrico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Utiliza la misma clave para cifrar y descifrar',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Es más rápido que el cifrado simétrico',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Utiliza un par de claves: pública y privada',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'No requiere intercambio de claves entre las partes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes algoritmos es un ejemplo de cifrado simétrico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'RSA', esCorrecta: false },
              { id: 'b', texto: 'SHA-256', esCorrecta: false },
              { id: 'c', texto: 'AES', esCorrecta: true },
              { id: 'd', texto: 'DSA', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el propósito principal del protocolo OAuth en una aplicación web?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Cifrar las comunicaciones entre el cliente y el servidor',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Validar la identidad de los usuarios a través de tokens',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Establecer una conexión segura mediante HTTPS',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Gestionar certificados digitales en la red',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento es fundamental en el uso de certificados digitales dentro de la seguridad informática?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'La velocidad de cifrado', esCorrecta: false },
              {
                id: 'b',
                texto: 'La disponibilidad de hardware especializado',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La verificación de la identidad a través de una Autoridad Certificadora (CA)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El almacenamiento local de las claves',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes protocolos se basa en el intercambio de aserciones XML para autenticar usuarios entre dominios?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'SFTP', esCorrecta: false },
              { id: 'b', texto: 'HTTPS', esCorrecta: false },
              { id: 'c', texto: 'OAuth', esCorrecta: false },
              { id: 'd', texto: 'SAML', esCorrecta: true },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
