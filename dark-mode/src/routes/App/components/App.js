import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import { ThemeContext } from '../../../common/containers/App';

function App() {
  const theme = React.useContext(ThemeContext);

  function Icon() {
    // use the global state to determine which icon is displayed on rerender
    if (theme.state.darkMode) {
      return (
        <FontAwesomeIcon icon={faSun} color="#FFA500" />
      );
    } else {
      return (
        <FontAwesomeIcon icon={faMoon} />
      )
    }
  }

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* 
        --The button that should toggle dark mode-- 
        when the button is clicked update the global state
        use the setTheme property that is passed down from the context provider
        */}
        <button className="app__dark-mode-btn icon level-right" onClick={() => { theme.setTheme({ darkMode: !theme.state.darkMode}) } }>
          <Icon />
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
