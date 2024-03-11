import './drawer.css';
const Drawer = ({ children }) => {
  return (
    <div className="flex-container">
      <div className="sidebar">
        <ul>
          <li>
            <a href="src/layout/homepage#" onClick="openPage('page1')">
              Page 1
            </a>
          </li>
          <li>
            <a href="src/layout/homepage#" onClick="openPage('page2')">
              Page 2
            </a>
          </li>
          <li>
            <a href="src/layout/homepage#" onClick="openPage('page3')">
              Page 3
            </a>
          </li>
          <li>
            <a href="src/layout/homepage#" onClick="openPage('page4')">
              Page 4
            </a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Drawer;
