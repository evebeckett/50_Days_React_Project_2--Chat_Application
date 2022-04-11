import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";

const projectID = "b1f2aa36-530f-4d10-8b88-7ebb458d6460";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
