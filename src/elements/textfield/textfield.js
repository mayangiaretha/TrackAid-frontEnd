import './textfield.css';

const Textfield = ({ type, id, name, placeholder, value, onChange }) => (
  <input
    id={id}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
  />
);

export default Textfield;
