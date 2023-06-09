import React from 'react';
import styles from './Careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';

const Careers = () => {
  const career = useLoaderData();
  console.log(career);
  return (
    <div className={styles.careers}>
      {career.map((item) => (
        <Link to={item.id.toString()} key={item.id}>
          <p>{item.title}</p>
          <p>{item.location}</p>
        </Link>
      ))}
    </div>
  );
};
export default Careers;

export const careersLoader = async () => {
  const res = await fetch(
    'https://reactrouter-test.netlify.app/data/data.json'
  );

  return res.careers.json();
};
