import { useEffect } from 'react';
import { API_BASE_URL } from './services/AppSettings.ts'
import LandingPage from "./Pages/LandingPage.tsx";

const App = () => {

    useEffect(() => {
        fetch(`${API_BASE_URL}/movies`)
            .then((response) => response.json())
            .then(data  => {
                console.log("Movies data:", data);
            })
            .catch(error => {
                console.error("Error fetching movies data:", error);
            });
    }, []);

  return <LandingPage/>
}

export default App
