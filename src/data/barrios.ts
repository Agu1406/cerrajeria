export type Barrio = {
  slug: string;
  nombre: string;
  introExtra: string;
  llegadaTexto: string;
  comoTrabajamos: string;
  faqLlegada: string;
  faqPrecio: string;
  faqFestivos: string;
};

export const barrios: Barrio[] = [
  {
    slug: 'getafe',
    nombre: 'Getafe',
    introExtra:
      'En Getafe trabajamos a diario en portales de edificios residenciales, comunidades de vecinos y viviendas unifamiliares. Estamos acostumbrados a lidiar con cerraduras antiguas, bombines desgastados y puertas que han sufrido muchos años de uso.',
    llegadaTexto:
      'En Getafe solemos tardar entre 25 y 35 minutos desde que confirmamos el aviso, dependiendo del tráfico y la zona concreta.',
    comoTrabajamos:
      'Cuando recibimos una llamada desde Getafe intentamos siempre hacer una valoración previa por teléfono, explicando las posibles soluciones y un rango de precio aproximado. Al llegar revisamos la puerta o cerradura, confirmamos el presupuesto y solo empezamos a trabajar cuando tú lo aceptas.',
    faqLlegada:
      'En condiciones normales llegamos a cualquier zona de Getafe en unos 25–35 minutos desde que se confirma el aviso. En horas punta o días de lluvia puede alargarse ligeramente, pero te avisamos siempre por teléfono.',
    faqPrecio:
      'Antes de desplazarnos te explicamos el precio orientativo de la apertura o reparación. Una vez vemos la puerta en persona confirmamos el importe final y solo empezamos si estás de acuerdo, sin sorpresas al terminar.',
    faqFestivos:
      'Sí, prestamos servicio de cerrajería urgente en Getafe las 24 horas todos los días del año, incluidos fines de semana, festivos y noches.',
  },
  {
    slug: 'las-rozas',
    nombre: 'Las Rozas',
    introExtra:
      'En Las Rozas es muy habitual encontrar chalets, adosados y urbanizaciones privadas con diferentes tipos de puertas y cerraduras de acceso. Trabajamos tanto en viviendas unifamiliares como en locales y oficinas de la zona.',
    llegadaTexto:
      'En Las Rozas nuestro tiempo medio de llegada suele situarse entre 30 y 40 minutos, según el tráfico en la A‑6 y la localización exacta dentro del municipio.',
    comoTrabajamos:
      'En urbanizaciones y chalets de Las Rozas es frecuente que existan varias puertas de acceso. Siempre buscamos la opción menos invasiva para abrir o reforzar la seguridad, explicando ventajas e inconvenientes de cada solución antes de que tomes una decisión.',
    faqLlegada:
      'Normalmente estamos en tu domicilio de Las Rozas en unos 30–40 minutos. Si el tráfico en la A‑6 es especialmente denso, te avisamos con un tiempo estimado realista para que sepas cuándo estaremos allí.',
    faqPrecio:
      'En zonas de chalets y urbanizaciones el trabajo puede variar mucho según el tipo de puerta y cerradura. Por eso, antes de empezar revisamos la situación, te explicamos opciones y precios y solo comenzamos cuando nos das el visto bueno.',
    faqFestivos:
      'Sí, atendemos avisos en Las Rozas las 24 horas, también en festivos y noches. El precio puede variar en horario nocturno, pero siempre lo indicamos antes de desplazarnos.',
  },
  {
    slug: 'pinto',
    nombre: 'Pinto',
    introExtra:
      'En Pinto atendemos emergencias tanto en pisos de bloque como en pequeñas viviendas y locales comerciales. Muchas de las cerraduras con las que nos encontramos son modelos antiguos que conviene revisar o sustituir por opciones más seguras.',
    llegadaTexto:
      'En Pinto solemos llegar entre 25 y 35 minutos después de tu llamada, siempre que no haya incidencias especiales de tráfico.',
    comoTrabajamos:
      'Siempre que podemos evitamos romper la cerradura y, si hay que cambiarla, te recomendamos modelos acordes con el tipo de vivienda y su nivel de exposición a la calle. Nuestro objetivo es que salgas ganando en seguridad después de cada intervención, no solo resolver la urgencia.',
    faqLlegada:
      'Nuestro tiempo medio de llegada a Pinto oscila entre 25 y 35 minutos. En momentos puntuales de tráfico intenso puede alargarse un poco, pero intentamos avisarte siempre si vemos retraso.',
    faqPrecio:
      'Te explicamos el precio orientativo por teléfono y, al llegar, confirmamos el presupuesto definitivo antes de empezar. Si detectamos que la puerta necesita algún extra (por ejemplo, cambiar un bombín muy deteriorado), lo comentamos contigo antes.',
    faqFestivos:
      'Sí, también trabajamos en Pinto por la noche y en festivos. La tarifa de urgencia se explica siempre antes de desplazarnos para que puedas decidir con toda la información.',
  },
  {
    slug: 'leganes',
    nombre: 'Leganés',
    introExtra:
      'En Leganés trabajamos tanto en bloques de pisos antiguos como en edificios más modernos y locales comerciales de barrio. Es frecuente encontrar puertas de madera muy usadas y cerraduras que nunca se han cambiado desde la instalación inicial.',
    llegadaTexto:
      'En Leganés nuestro tiempo de llegada suele estar entre 25 y 35 minutos, ajustando rutas según el barrio y la hora del día.',
    comoTrabajamos:
      'Al llegar a tu vivienda o local en Leganés revisamos primero el estado general de la puerta y la cerradura. Si solo es necesario abrir, priorizamos técnicas sin daños; si vemos que la cerradura está muy deteriorada, te proponemos un cambio por un modelo más seguro y te explicamos la diferencia de precio.',
    faqLlegada:
      'La mayoría de avisos en Leganés los atendemos en unos 25–35 minutos. Si la ruta está muy cargada por tráfico o climatología, te lo indicamos durante la llamada para que tengas un margen realista.',
    faqPrecio:
      'En Leganés aplicamos la misma política que en el resto de zonas: precio orientativo por teléfono, confirmación in situ antes de empezar y ninguna sorpresa al final del trabajo.',
    faqFestivos:
      'Sí, ofrecemos servicio de cerrajería urgente en Leganés las 24 horas, incluyendo fines de semana, noches y festivos. Cualquier recargo por horario se explica siempre por adelantado.',
  },
];

