import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          pageTitle: "Medellín Air Quality",
          quickFacts: {
            title: "Quick Facts",
            fact1: "PM2.5 is a major air pollutant in Medellín",
            fact2: "Aburrá Valley topography traps pollutants",
            fact3: "Vehicle emissions are the primary pollution source",
            fact4: "Wind patterns affect pollutant dispersion",
            fact5: "Temperature inversions worsen air quality",
            fact6: "Rainfall helps cleanse the air"
          },
          intro: {
            title: "Understanding Air Pollution in Medellín",
            paragraph1: "Medellín, nestled in the narrow Aburrá Valley, suffers from poor air circulation due to its topography. Air pollution, particularly PM2.5 (fine particulate matter), poses significant risks to public health, affecting the lungs and increasing the risk of heart and respiratory diseases.",
            paragraph2: "Citizens and decision-makers need to understand that improving air quality is not just a matter of reducing emissions but also addressing urban development and transportation policies.",
            imageAlt: "Medellín cityscape and air pollution factors"
          },
          airQualityMonitoring: {
            title: "Air Quality Monitoring Workflow",
            paragraph1: "Monitoring air quality in Medellín involves a complex workflow: data collection, pre-processing, and analytical processing. Field sensors collect raw data, which is cleaned and analyzed to provide actionable insights.",
            paragraph2: "This pipeline ensures decision-makers have access to high-quality, actionable data for developing targeted solutions to the city's air quality problems.",
            imageAlt: "Air quality monitoring workflow diagram"
          },
          currentLevels: {
            title: "Current PM2.5 Levels Across Medellín",
            paragraph1: "Monitoring PM2.5 levels is essential in understanding pollution hotspots across Medellín. The city center, La Candelaria, has the highest levels due to dense traffic, while residential areas like El Poblado show slightly better air quality.",
            paragraph2: "Understanding these differences can help target interventions, such as reducing traffic during peak hours and increasing green spaces in the most affected areas.",
            yAxisLabel: "PM2.5 (μg/m³)",
            barName: "PM2.5 Level"
          },
          airQualityTrends: {
            title: "Air Quality Trends",
            paragraph1: "Air quality fluctuates throughout the year in Medellín, with pollution spikes during the dry months from December to March. These patterns are influenced by seasonal weather, such as rain that helps clear the air.",
            paragraph2: "For policy-makers, this insight is crucial for designing mitigation strategies, such as increasing air quality monitoring during the dry season or enforcing stricter vehicle emission controls.",
            yAxisLabelLeft: "PM2.5 (μg/m³)",
            yAxisLabelRight: "AQI",
            lineName1: "PM2.5 Level",
            lineName2: "Air Quality Index"
          },
          pollutionSources: {
            title: "Pollution Sources in Medellín",
            paragraph1: "Vehicle emissions contribute significantly to Medellín's air pollution, accounting for 45% of PM2.5 emissions. Industrial activities and household energy use are other major contributors. The rise in construction activities further exacerbates the problem.",
            paragraph2: "To address these sources, Medellín can adopt stricter vehicle emission standards, transition industries to cleaner technologies, and encourage the use of renewable energy in residential areas.",
            details: {
              "Vehicle Emissions": "Vehicle emissions are the largest contributor to air pollution in Medellín. This includes exhaust from cars, buses, and motorcycles. Reducing vehicle emissions through improved public transportation, promotion of electric vehicles, and car-free zones can significantly improve air quality.",
              "Industrial Activities": "Industrial activities, including manufacturing and power generation, are the second-largest source of air pollution. Implementing stricter emission controls, encouraging the adoption of cleaner technologies, and promoting energy efficiency in industries can help reduce this source of pollution.",
              "Residential": "Residential sources of air pollution include cooking, heating, and the use of consumer products. Promoting energy-efficient appliances, clean cooking fuels, and educating residents about indoor air quality can help mitigate this source of pollution.",
              "Other": "Other sources of air pollution include construction activities, waste management, and natural sources like dust. Implementing dust control measures at construction sites, improving waste management practices, and increasing green spaces can help address these sources."
            }
          },
          bicycleInfrastructure: {
            title: "Bicycle Infrastructure and Air Quality",
            paragraph1: "Proper bicycle infrastructure plays a critical role in reducing air pollution by promoting eco-friendly transportation. Research shows that bicycle lanes separated by physical barriers can help reduce cyclists' exposure to PM2.5 by keeping them further from vehicular emissions.",
            paragraph2: "Decision-makers can encourage cycling through better infrastructure, reducing vehicle use in key areas, and offering subsidies for electric bikes.",
            imageAlt: "Comparison of different types of bicycle lanes"
          },
          citizenScience: {
            title: "Citizen Science and Evidence Co-creation",
            paragraph1: "Citizen science empowers communities to participate in air quality monitoring, providing valuable data for both residents and policy-makers. In Medellín, citizen science initiatives involve low-cost sensors deployed in neighborhoods, real-time data collection, and community workshops on environmental health.",
            paragraph2: "By engaging citizens in the process, decision-makers gain access to hyper-local data, helping them implement more targeted policies.",
            imageAlt: "Diagram of citizen science and evidence co-creation process"
          },
          digitalLiteracy: {
            title: "Digital Literacy and Human-Centric Analysis",
            paragraph1: "Digital literacy plays a crucial role in enabling citizens to interpret air quality data effectively. Providing workshops and educational materials can empower communities to understand air pollution better and make informed decisions.",
            paragraph2: "Decision-makers should invest in digital literacy initiatives to bridge the gap between complex environmental data and community-level understanding, fostering a more engaged and informed populace.",
            imageAlt: "Illustration of digital literacy and data analysis concepts"
          },
          timeline: {
            title: "Medellín's Air Quality Initiatives Timeline",
            "2007": {
              title: "Air Quality Monitoring Network",
              description: "Establishment of the first comprehensive air quality monitoring network in Medellín."
            },
            "2011": {
              title: "Integrated Transport System",
              description: "Launch of the Integrated Transport System (SITVA) to reduce vehicle emissions."
            },
            "2016": {
              title: "Comprehensive Air Quality Management Plan",
              description: "Implementation of the Plan Integral de Gestión de la Calidad del Aire."
            },
            "2019": {
              title: "Ciclovías Expansion",
              description: "Major expansion of the city's bicycle infrastructure to promote eco-friendly transportation."
            }
          }
        }
      },
      es: {
        translation: {
          pageTitle: "Calidad del Aire en Medellín",
          quickFacts: {
            title: "Datos Rápidos",
            fact1: "PM2.5 es un contaminante principal en Medellín",
            fact2: "La topografía del Valle de Aburrá atrapa contaminantes",
            fact3: "Las emisiones vehiculares son la principal fuente de contaminación",
            fact4: "Los patrones de viento afectan la dispersión de contaminantes",
            fact5: "Las inversiones térmicas empeoran la calidad del aire",
            fact6: "La lluvia ayuda a limpiar el aire"
          },
          intro: {
            title: "Entendiendo la Contaminación del Aire en Medellín",
            paragraph1: "Medellín, ubicada en el estrecho Valle de Aburrá, sufre de mala circulación del aire debido a su topografía. La contaminación del aire, particularmente el PM2.5 (partículas finas), representa riesgos significativos para la salud pública, afectando los pulmones y aumentando el riesgo de enfermedades cardíacas y respiratorias.",
            paragraph2: "Los ciudadanos y los tomadores de decisiones deben entender que mejorar la calidad del aire no es solo cuestión de reducir emisiones, sino también de abordar políticas de desarrollo urbano y transporte.",
            imageAlt: "Paisaje urbano de Medellín y factores de contaminación del aire"
          },
          airQualityMonitoring: {
            title: "Proceso de Monitoreo de la Calidad del Aire",
            paragraph1: "El monitoreo de la calidad del aire en Medellín implica un proceso complejo: recolección de datos, preprocesamiento y procesamiento analítico. Los sensores de campo recolectan datos brutos, que luego se limpian y analizan para proporcionar información útil.",
            paragraph2: "Este proceso garantiza que los tomadores de decisiones tengan acceso a datos de alta calidad y accionables para desarrollar soluciones específicas a los problemas de calidad del aire de la ciudad.",
            imageAlt: "Diagrama del proceso de monitoreo de la calidad del aire"
          },
          currentLevels: {
            title: "Niveles Actuales de PM2.5 en Medellín",
            paragraph1: "Monitorear los niveles de PM2.5 es esencial para comprender los puntos críticos de contaminación en Medellín. El centro de la ciudad, La Candelaria, tiene los niveles más altos debido al denso tráfico, mientras que las áreas residenciales como El Poblado muestran una calidad del aire ligeramente mejor.",
            paragraph2: "Entender estas diferencias puede ayudar a dirigir intervenciones, como reducir el tráfico durante las horas pico y aumentar los espacios verdes en las áreas más afectadas.",
            yAxisLabel: "PM2.5 (μg/m³)",
            barName: "Nivel de PM2.5"
          },
          airQualityTrends: {
            title: "Tendencias de la Calidad del Aire",
            paragraph1: "La calidad del aire fluctúa a lo largo del año en Medellín, con picos de contaminación durante los meses secos de diciembre a marzo. Estos patrones están influenciados por el clima estacional, como la lluvia que ayuda a limpiar el aire.",
            paragraph2: "Para los responsables políticos, esta información es crucial para diseñar estrategias de mitigación, como aumentar el monitoreo de la calidad del aire durante la temporada seca o imponer controles más estrictos sobre las emisiones de vehículos.",
            yAxisLabelLeft: "PM2.5 (μg/m³)",
            yAxisLabelRight: "ICA",
            lineName1: "Nivel de PM2.5",
            lineName2: "Índice de Calidad del Aire"
          },
          pollutionSources: {
            title: "Fuentes de Contaminación en Medellín",
            paragraph1: "Las emisiones de vehículos contribuyen significativamente a la contaminación del aire en Medellín, representando el 45% de las emisiones de PM2.5. Las actividades industriales y el uso de energía en los hogares son otros contribuyentes importantes. El aumento de las actividades de construcción agrava aún más el problema.",
            paragraph2: "Para abordar estas fuentes, Medellín puede adoptar estándares más estrictos de emisiones de vehículos, ayudar a las industrias a transicionar a tecnologías más limpias y fomentar el uso de energía renovable en áreas residenciales.",
            details: {
              "Vehicle Emissions": "Las emisiones de vehículos son el mayor contribuyente a la contaminación del aire en Medellín. Esto incluye el escape de automóviles, autobuses y motocicletas. Reducir las emisiones de vehículos mediante la mejora del transporte público, la promoción de vehículos eléctricos y zonas libres de automóviles puede mejorar significativamente la calidad del aire.",
              "Industrial Activities": "Las actividades industriales, incluidas la manufactura y la generación de energía, son la segunda fuente más grande de contaminación del aire. Implementar controles de emisiones más estrictos, fomentar la adopción de tecnologías más limpias y promover la eficiencia energética en las industrias puede ayudar a reducir esta fuente de contaminación.",
              "Residential": "Las fuentes residenciales de contaminación del aire incluyen la cocina, la calefacción y el uso de productos de consumo. Promover electrodomésticos energéticamente eficientes, combustibles de cocina limpios y educar a los residentes sobre la calidad del aire interior puede ayudar a mitigar esta fuente de contaminación.",
              "Other": "Otras fuentes de contaminación del aire incluyen actividades de construcción, gestión de residuos y fuentes naturales como el polvo. Implementar medidas de control de polvo en sitios de construcción, mejorar las prácticas de gestión de residuos y aumentar los espacios verdes puede ayudar a abordar estas fuentes."
            }
          },
          bicycleInfrastructure: {
            title: "Infraestructura para Bicicletas y Calidad del Aire",
            paragraph1: "La infraestructura adecuada para bicicletas juega un papel crucial en la reducción de la contaminación del aire al promover el transporte ecológico. Los estudios muestran que los carriles para bicicletas separados por barreras físicas pueden ayudar a reducir la exposición de los ciclistas al PM2.5 al mantenerlos más alejados de las emisiones vehiculares.",
            paragraph2: "Los tomadores de decisiones pueden fomentar el ciclismo mediante una mejor infraestructura, reduciendo el uso de vehículos en áreas clave y ofreciendo subsidios para bicicletas eléctricas.",
            imageAlt: "Comparación de diferentes tipos de carriles para bicicletas"
          },
          citizenScience: {
            title: "Ciencia Ciudadana y Co-creación de Evidencia",
            paragraph1: "La ciencia ciudadana empodera a las comunidades para participar en el monitoreo de la calidad del aire, proporcionando datos valiosos tanto para los residentes como para los responsables políticos. En Medellín, las iniciativas de ciencia ciudadana involucran sensores de bajo costo desplegados en los vecindarios, recopilación de datos en tiempo real y talleres comunitarios sobre salud ambiental.",
            paragraph2: "Al involucrar a los ciudadanos en el proceso, los tomadores de decisiones obtienen acceso a datos hiperlocales, lo que les ayuda a implementar políticas más específicas.",
            imageAlt: "Diagrama del proceso de ciencia ciudadana y co-creación de evidencia"
          },
          digitalLiteracy: {
            title: "Alfabetización Digital y Análisis Centrado en el Ser Humano",
            paragraph1: "La alfabetización digital juega un papel crucial en permitir que los ciudadanos interpreten eficazmente los datos de calidad del aire. Proporcionar talleres y materiales educativos puede empoderar a las comunidades para comprender mejor la contaminación del aire y tomar decisiones informadas.",
            paragraph2: "Los tomadores de decisiones deben invertir en iniciativas de alfabetización digital para cerrar la brecha entre los datos ambientales complejos y la comprensión a nivel comunitario, fomentando una población más comprometida e informada.",
            imageAlt: "Ilustración de conceptos de alfabetización digital y análisis de datos"
          },
          timeline: {
            title: "Cronología de las Iniciativas de Calidad del Aire en Medellín",
            "2007": {
              title: "Red de Monitoreo de la Calidad del Aire",
              description: "Establecimiento de la primera red integral de monitoreo de la calidad del aire en Medellín."
            },
            "2011": {
              title: "Sistema de Transporte Integrado",
              description: "Lanzamiento del Sistema Integrado de Transporte (SITVA) para reducir las emisiones de vehículos."
            },
            "2016": {
              title: "Plan Integral de Gestión de la Calidad del Aire",
              description: "Implementación del Plan Integral de Gestión de la Calidad del Aire en la ciudad."
            },
            "2019": {
              title: "Expansión de las Ciclovías",
              description: "Expansión importante de la infraestructura de bicicletas de la ciudad para promover el transporte ecológico."
            }
          }
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected language translation is not available
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;