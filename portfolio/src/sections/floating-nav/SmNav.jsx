const SmNav = ({ className, eachitem }) => {
  return (
    <li className={className}>
      <a href={eachitem.link}>{eachitem.icon}</a>
    </li>
  );
};

export default SmNav;
