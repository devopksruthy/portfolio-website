import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';


interface CardProps {
  id: string,
  title: string,
  description: string,
  image: string,
  button: {
    label: string,
    link: string
  }
}

const Card: FC<CardProps> = ({ id,title, description, image ,button }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
        <Image src={image} alt="Project Thumbnail" width={400} height={400} className="object-cover rounded-t-lg" />
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto justify-center">
              <Link href={`/projects/${id}`} className="border-1 border-solid rounded-md p-2 border-cyan-700 text-cyan-800 cursor-pointer ">{button.label}</Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;