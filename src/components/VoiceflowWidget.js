"use client";

import { useEffect } from 'react';

const VoiceflowWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '68c737ec2162423ad1f882aa' },
        url: 'https://general-runtime.voiceflow.com',
        // By OMITTING the 'render' property, Voiceflow defaults 
        // to the floating popup widget. This is the key change.
      });
    };
    
    document.body.appendChild(script);

    // Clean up the script when the component is no longer needed
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // The empty array ensures this effect runs only once

  // This component doesn't render any visible HTML itself
  return null;
};

export default VoiceflowWidget;