import React from 'react';
import PropTypes from 'prop-types';

function Breadcrumb({ items }) {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
