import React from "react";

interface Tag {
  name: string;
  colorClasses: string;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  tags: Tag[];
}

const CardComponent: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  link,
  tags,
}) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg glass-effect-neutral shadow">
      <img
        src={imageSrc}
        className="aspect-video w-full object-cover"
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-center border-b-2 border-t-2 border-black pb-2 pt-2 text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-900">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-2 py-1 bg-green-300 rounded-full font-semibold border-black"
        >
          Découvrir
        </a>
        <div className="mt-4 flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${tag.colorClasses}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
