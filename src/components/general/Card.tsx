import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  className,
  children,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-md overflow-hidden ${className ? className : ''}`}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt || title}
          style={{ height: 140, objectFit: 'cover' }}
        />
      )}
      <div className="px-3 py-2">
        <p className="text-gray-500">{title}</p>
        {subtitle && <h2 className="text-lg font-medium">{subtitle}</h2>}
      </div>
      <div className="px-3 py-2">{children}</div>
    </div>
  );
};

export default Card;