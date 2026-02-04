import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { Container, About, HomeHero } from "../components/index";

const Home = () => {
  const [serverWaking, setServerWaking] = useState(true);
  useEffect(() => {
    axios
      .get("/api/health") // or /api/posts (lightest endpoint preferred)
      .finally(() => setServerWaking(false));
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {serverWaking && (
          <div className="w-full h-20 flex m-2 mb-4 items-center justify-center">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                Waking up server…
              </h2>
              <p className="text-gray-500">
                Please wait a moment. The backend is starting up.
              </p>
            </div>
          </div>
        )}
        <HomeHero />
        <About />
      </Container>
    </div>
  );
};

export default Home;
