import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { useState, createContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState("Robert");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const getWelcomeMessage = async () => {
    const responseOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/react", responseOptions);

    if (!response.ok) {
      console.log("something messed up!");
    }
    else {
      const data = await response.json();
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
};

export default App;
