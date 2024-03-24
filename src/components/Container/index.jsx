import PropTypes from "prop-types";

function Container(props) {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="w-96 h-[600px] bg-slate-900 rounded-xl">
        {props.children}
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
