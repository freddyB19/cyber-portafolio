import chatRoom from '../../assets/chat-rooms.png'
import chatMessage from '../../assets/chat-message.png'

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Nexus API Gateway",
    type: "Backend",
    tech: ["Node.js", "Redis", "Docker"],
    github: "https://github.com/tu-usuario/proyecto",
    demo: "https://nexus-demo.com",
    description: "Una arquitectura de microservicios diseñada para el alto tráfico de datos entre sectores industriales.",
    images: ["https://via.placeholder.com/600x400/002222", "https://via.placeholder.com/600x400/003333"],
    details: "Implementación de balanceo de carga, caché con Redis y seguridad mediante JWT."
  },
  {
    id: 2,
    title: "Deckard Search Engine",
    type: "Data",
    github: "https://github.com/tu-usuario/proyecto",
    tech: ["Python", "PostgreSQL", "ElasticSearch"],
    description: "Motor de búsqueda especializado en registros de replicantes y bases de datos históricas.",
    images: ["https://via.placeholder.com/600x400/001111"],
    details: "Optimización de consultas complejas y despliegue en infraestructura escalable."
  },
  {
    id: 3,
    title: "Sistema de chat",
    type: "Backend",
    github: "https://github.com/tu-usuario/proyecto",
    demo: "https://nexus-demo.com",
    tech: ["Python", "Flask", "Javascript", "Socketio"],
    description: "Sistema de mensajes y de conexión de usuarios en tiempo real.",
    images: [chatRoom, chatMessage],
    details: "Es una aplicación de chats que permite crear espacios de comunicación (salas/canales) para interactuar con diferentes usuarios"
  }
];