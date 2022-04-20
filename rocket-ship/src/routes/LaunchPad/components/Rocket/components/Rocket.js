import React, { useState, Component, memo } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}
/* Prevent the functional component Rocket from taking off:
In order to stop the FunctionalRocket component from rendering as challenged
it can be memoized using React.memo(). There are no props passed down 
so therefore it will not require re-rendering as it won't have props change value. */
export const FreezeFunctionalRocket = memo(FunctionalRocket);

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

/* Prevent the class component Rocket from taking off:
Replace the element ClassRocket with MemoClassRocket
In order to stop the ClassRocket component from rendering as challenged
it will use the lifecycle method shouldComponentUpdate().
The method will return false since the props will never change or evaluate to unequal. */
export class FreezeClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(prevProps, nextProps) {
    return !prevProps === nextProps;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
