import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const DataProvider = ({ children }) => {
  const [mainPayload, setmainPayload] = useState({
    formData: {},
    items: [],
    images: [],
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  

  const handleSnackbarOpen = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <AppContext.Provider
      value={{
        mainPayload,
        setmainPayload,
        snackbar,
        setSnackbar,
        handleSnackbarClose,
        handleSnackbarOpen,
       
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppData = () => useContext(AppContext);
