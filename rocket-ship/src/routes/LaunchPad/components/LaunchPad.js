import { useEffect, useState } from 'react';
import { ClassRocket, FreezeClassRocket, FunctionalRocket, FreezeFunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [, triggerRerender] = useState(Date.now());
  
  useEffect(() => {
    setInterval(() => { triggerRerender(Date.now()); }, 500);
  }, [])
  
  return (
    // The element being returned can be swapped between its frozen or original version.
    // Frozen version don't 'take off' per the challenge 
    <div className="launchpad">
      <FreezeFunctionalRocket />
    </div>
  );
}
