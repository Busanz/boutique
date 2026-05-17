import { FaStar, FaRegStar } from 'react-icons/fa';
import type { Review } from '../../utils/types';

type RatingProps = {
  reviewRating: Review[];
};

const RatingCard = ({ reviewRating }: RatingProps) => {
  return (
    <div>
      <div className="mt-4 space-y-3">
        <h3 className="font-medium text-text">
          Reviews ({reviewRating.length})
        </h3>
      </div>
      {reviewRating.map((review, index) => (
        <div key={index} className="border-b border-secondary py-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">
                  {i < review.rating ? (
                    <FaStar className="text-primary" size={16} />
                  ) : (
                    <FaRegStar className="text-primary" size={16} />
                  )}
                </span>
              ))}
            </div>
            <span className="text-xs text-text/50">{review.reviewerName}</span>
          </div>
          <p className="text-sm text-text">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingCard;
