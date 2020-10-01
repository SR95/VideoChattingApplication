import React, { useState } from "react";
import "./WebCall.css";

import { OTSession, OTStreams, preloadScript } from "opentok-react";
import ConnectionStatus from "../ConnectionStatus/ConnectionStatus";
import Publisher from "../Publisher/Publisher";
import Subscriber from "../Subscriber/Subscriber";

function WebCall(props) {
  const [sessionConnected, setSessionConnected] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const onError = err => {
    setErrorMessage(`Failed to connect: ${err}`);
  };

  return (
    <div>
      <OTSession
        apiKey={props.apiKey}
        sessionId={props.sessionId}
        token={props.token}
        eventHandlers={setSessionConnected}
        onError={onError}
      >
        {errorMessage ? <div id="error">{errorMessage}</div> : null}
        <ConnectionStatus connected={sessionConnected} />
        <Publisher />
        <OTStreams>
          <Subscriber />
        </OTStreams>
      </OTSession>
    </div>
  );
}

export default preloadScript(WebCall);
