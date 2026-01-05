import React from 'react';

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  icons,
  demo,
  code
}) => {
  return (
    <div className="bg-dark-300 rounded-xl shadow-lg hover:scale-105 transition overflow-hidden">
      
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex gap-3 mb-4">
          {icons.map((Icon, index) => (
            <Icon key={index} className="text-purple text-xl" />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-sm bg-dark-200 px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={demo}
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          <a
            href={code}
            className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
