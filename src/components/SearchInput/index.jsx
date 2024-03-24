import PropTypes from 'prop-types'

const SearchInput = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="mx-6 my-4 flex justify-between">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="Type here"
        className="input input-bordered max-w-xs w-[260px] bg-slate-100 font-medium"
      />
      <button className="btn font-medium" type="submit">Add</button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SearchInput;
