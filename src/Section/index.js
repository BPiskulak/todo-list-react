import "./style.css";


const Section = ({title, body, extraHeaderContent}) => (
<section className="section">
        <div className="section_items">
          <h2 className="section__header">{title}</h2>
          {extraHeaderContent}
        </div>
        <div className="taskList">
          {body}
        </div>
      </section>

);

export default Section;
