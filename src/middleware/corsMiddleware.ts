import cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: ["zephix.org", "localhost:5173" ? process.env.NODE_ENV === 'development' : '']
}

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
