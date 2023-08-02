import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import useLocalStorage from "use-local-storage";

function Layout({ children, pageTitle }) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const [theme, setTheme] = useLocalStorage("theme", "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      // Verificar el ancho de la pantalla y cambiar el estado de isOpen en consecuencia
      if (window.innerWidth > 920) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Agregar el evento resize
    window.addEventListener("resize", handleResize);
    // Llamar al evento resize una vez para inicializar el estado correctamente
    handleResize();
    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App" data-bs-theme={theme}>
      <Sidebar isOpen={sidebarIsOpen} onModeDark={switchTheme} theme={theme} />
      <div
        className={`container-fluid content bg-body-secondary ${
          sidebarIsOpen ? "is-open" : ""
        }`}
      >
        <Navbar onToggleSidebar={toggleSidebar} pageTitle={pageTitle} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
