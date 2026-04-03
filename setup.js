const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'About', 'Portfolio', 'Process', 'Testimonials',
  'ServiceAreas', 'Financing', 'Contact', 'KitchenRemodeling',
  'BathroomRemodeling', 'WholeHomeRenovations', 'CustomCabinetry'
];

pages.forEach(page => {
  const content = `import React from 'react';\n\nconst ${page} = () => {\n  return (\n    <div className="section container">\n      <h1>${page.replace(/([A-Z])/g, ' $1').trim()}</h1>\n    </div>\n  );\n};\n\nexport default ${page};\n`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${page}.jsx`), content);
});

const components = ['Header', 'Footer'];
components.forEach(comp => {
  const content = `import React from 'react';\n\nconst ${comp} = () => {\n  return (\n    <header>\n      <div>${comp}</div>\n    </header>\n  );\n};\n\nexport default ${comp};\n`;
  fs.writeFileSync(path.join(__dirname, 'src', 'components', `${comp}.jsx`), content);
});
