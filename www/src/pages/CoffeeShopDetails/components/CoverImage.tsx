import { ChevronLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';

interface CoverImageProps {
  imageUrl: string;
}

const CoverImage = ({ imageUrl }: CoverImageProps) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate('/');
  };
  return (
    <div className="relative">
      <img src={imageUrl} alt="Cover" className="w-full h-56 object-cover" />
      <button
        className="absolute top-4 left-4 bg-white rounded-lg p-1.5"
        onClick={onBackClick}
      >
        <ChevronLeft />
      </button>
    </div>
  );
};

export default CoverImage;
