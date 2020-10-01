import React, { useState } from "react";
import { OTSubscriber } from "opentok-react";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

function Subscriber() {
  const [sessionError, setSessionError] = useState(null);
  const [sessionAudio, setSessionAudio] = useState(true);
  const [sessionVideo, setSessionVideo] = useState(true);

  return (
    <div className="subscriber">
      Subscriber
      {sessionError ? <div id="error"> {sessionError} </div> : null}
      <OTSubscriber
        properties={{
          subscribeToAudio: sessionAudio,
          subscribeToVideo: sessionVideo
        }}
        onError={setSessionError}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={sessionAudio}
              onChange={() => {
                setSessionAudio(!sessionAudio);
              }}
              name="audio-session-checkbox"
            />
          }
          label="Mute Audio"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sessionVideo}
              onChange={() => {
                setSessionVideo(!sessionVideo);
              }}
              name="video-session-checkbox"
            />
          }
          label="Stop Video"
        />
      </FormGroup>
    </div>
  );
}

export default Subscriber;
