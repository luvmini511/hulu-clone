import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie_poster"
        className="videoCard__img"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
        textTruncateChild={
          <a href="#" className="readOn">
            Read on
          </a>
        }
      />
      <h2 className="videoCard__title">{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type.toUpperCase()} • `}
        {movie.release_date || movie.first_air_date}
        {" • "}
        <ThumbUpSharpIcon /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
