import React from 'react';
import Event from 'gatsby-theme-yaml-data/src/components/Event';

export default props => (
  <div>
    <Event {...props} />
    <h2>Example: Shadowing a component to add in content</h2>
    <p>Woo hoo!</p>
  </div>
);
