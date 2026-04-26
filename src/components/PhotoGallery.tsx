import React from 'react';
import './PhotoGallery.css'; // Assuming there's a CSS file for styles

const photos = [
  { src: 'path/to/photo1.jpg', caption: 'Caption for Photo 1' },
  { src: 'path/to/photo2.jpg', caption: 'Caption for Photo 2' },
  { src: 'path/to/photo3.jpg', caption: 'Caption for Photo 3' },
  // Add more photos as needed
];

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.src} alt={photo.caption} className="photo-image" />
          <div className="photo-caption">{photo.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;