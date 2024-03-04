import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import {
  useWindowSize,
  useDebounce,
  useMediaQuery,
  useClickAway,
  useThrottle,
  useIsMobile,
} from "../components/hooks";

const stories = storiesOf("App Test", module);

stories.add("useWindowSize", () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <h3>Window Size Hook Example</h3>
      <p>Resize the browser window to see the changes:</p>
      <p>Width: {width}px, Height: {height}px</p>
    </>
  );
});

// Story: Delayed search input
stories.add("useDebounce", () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const debouncedSearch = useDebounce(handleSearch, 500);

  return (
    <>
      <h3>Debounce Hook Example</h3>
      <p>Type in the input below to see debounce in action:</p>
      <input type="text" onChange={(e) => debouncedSearch(e.target.value)} />
    </>
  );
});


// Story: Conditional rendering based on screen size
stories.add("useMediaQuery", () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <h3>Media Query Hook Example</h3>
      <p>This message changes based on screen width:</p>
      {isSmallScreen ? <p>Viewing on a small screen.</p> : <p>Viewing on a large screen.</p>}
    </>
  );
});


stories.add("useClickAway", () => {
  const dropdownRef = useRef(null);

  const closeDropdown = () => console.log("Dropdown closed");

  useClickAway({ ref: dropdownRef, callback: closeDropdown });

  return (
    <>
      <h3>Click Away Hook Example</h3>
      <p>Click outside the box to close the dropdown (see console log):</p>
      <div ref={dropdownRef} style={{ border: "1px solid black", padding: "20px" }}>
        Dropdown Content
      </div>
    </>
  );
});


stories.add("useClickAway", () => {
  const dropdownRef = useRef(null);

  const closeDropdown = () => console.log("Dropdown closed");

  useClickAway({ ref: dropdownRef, callback: closeDropdown });

  return (
    <>
      <h3>Click Away Hook Example</h3>
      <p>Click outside the box to close the dropdown (see console log):</p>
      <div ref={dropdownRef} style={{ border: "1px solid black", padding: "20px" }}>
        Dropdown Content
      </div>
    </>
  );
});


stories.add("useThrottle", () => {
  const handleMouseMove = useThrottle((event) => {
    console.log("Mouse coordinates:", event.clientX, event.clientY);
  }, 200);

  return (
    <>
      <h3>Throttle Hook Example</h3>
      <p>Move your mouse over the box below to see throttled logging:</p>
      <div onMouseMove={handleMouseMove} style={{ border: "1px solid black", padding: "20px" }}>
        Move Mouse Here
      </div>
    </>
  );
});


stories.add("useIsMobile", () => {
  const isMobileDevice = useIsMobile();

  return (
    <>
      <h3>Mobile Detection Hook Example</h3>
      <p>You are using a:</p>
      {isMobileDevice ? <p>Mobile Device.</p> : <p>Desktop Device.</p>}
    </>
  );
});
