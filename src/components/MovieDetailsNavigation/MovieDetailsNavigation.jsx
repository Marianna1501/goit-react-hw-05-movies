import { Li, Div } from './MovieDetailsNavigation.styled';
import { useLocation } from 'react-router-dom';

export const MovieDetailNavigation = () => {
  const location = useLocation();

  return (
    <Div>
      <h3>Additional information</h3>
      <ul>
        <Li state={{ from: location?.state?.from ?? '/' }} to="cast">
          Casts
        </Li>
        <Li state={{ from: location?.state?.from ?? '/' }} to="reviews">
          Reviews
        </Li>
      </ul>
    </Div>
  );
};
