import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <span className={css.header}>{title}</span>
      {children}
    </div>
  );
};

export default Section;
