import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

function PinkButton(props) {
  const { text, bgColor, link } = props;
  const Navigate = useNavigate();
  return (
    <button
      onClick={()=>Navigate(link)}
      className={classNames(
        "border-0 rounded-full px-8 h-10 text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-black hover:border-2 hover:border-black",
        bgColor
      )}
    >
      {text}
    </button>
  );
}

PinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

PinkButton.defaultProps = {
  bgColor: "bg-custom-pink",
};

export default PinkButton
