import "./style.css";


const Form = (propos) => (
    <form className="form">
        <input className="form__field " required placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>

)
export default Form;