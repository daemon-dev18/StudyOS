import { useEffect, useState } from "react";

function useTheme() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );


  useEffect(() => {

    document.body.className = theme;

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);


  return {
    theme,
    setTheme,
  };

}


export default useTheme;