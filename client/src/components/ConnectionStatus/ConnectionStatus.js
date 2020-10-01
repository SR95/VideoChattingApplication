import React, { useEffect, useState } from "react";

function ConnectionStatus(props) {
  const [sessionConnected, setSessionConnected] = useState(props.connected);
  return (
    <div className="connectionStatus">
      <strong>Status: </strong> {props.connected}
    </div>
  );
}

export default ConnectionStatus;
