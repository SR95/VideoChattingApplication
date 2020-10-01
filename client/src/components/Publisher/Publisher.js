import React, { useState } from "react";
import { OTPublisher } from "opentok-react";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

function Publisher() {
  const [sessionError, setSessionError] = useState(null);
  const [sessionAudio, setSessionAudio] = useState(true);
  const [sessionVideo, setSessionVideo] = useState(true);
  const [sessionVideoSource, setSessionVideoSource] = useState("camera");

  const changeVideoSource = videoSource => {
    if (videoSource !== "camera") {
      setSessionVideoSource("camera");
    } else {
      setSessionVideoSource("screen");
    }
  };

  return (
    <div className="publisher">
      <text className="titleText"> Publisher </text>
      {sessionError ? <div id="error">{sessionError}</div> : null}
      <OTPublisher
        properties={{
          publishAudio: sessionAudio,
          publishVideo: sessionVideo,
          videoSource: sessionVideoSource === "screen" ? "screen" : undefined
        }}
      />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={sessionVideoSource === "camera" ? false : true}
              onChange={() => {
                setSessionVideoSource(
                  sessionVideoSource === "camera" ? "screen" : "camera"
                );
              }}
              labelStyle={{ color: "white" }}
              iconStyle={{ fill: "white" }}
              name="video-session-source-checkbox"
            />
          }
          label="Share Screen"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!sessionAudio}
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
          label="Show Video"
        />
      </FormGroup>
    </div>
  );
}

export default Publisher;
