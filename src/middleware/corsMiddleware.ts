import cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: ["https://coffee.zephix.org", "http://localhost:5173" ? process.env.NODE_ENV === 'development' : '']
}

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
